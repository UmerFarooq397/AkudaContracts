const { getFrameSigner, deployContract, contractAt , sendTxn, readTmpAddresses, writeTmpAddresses } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities")
const { toUsd } = require("../../test/shared/units")

const network = (process.env.HARDHAT_NETWORK || 'mainnet');
const tokens = require('./tokens')[network];

const {
  BSC_TESTNET_URL,
  BSC_TESTNET_DEPLOY_KEY
} = require("../../env.json")

async function getValues(signer) {
  const provider = new ethers.providers.JsonRpcProvider(BSC_TESTNET_URL)
  const capKeeperWallet = new ethers.Wallet(BSC_TESTNET_DEPLOY_KEY).connect(provider)

  const vault = await contractAt("Vault", "0x1B183979a5cd95FAF392c8002dbF0D5A1C687D9a")
  const timelock = await contractAt("Timelock", await vault.gov(), signer)
  const router = await contractAt("Router", await vault.router(), signer)
  const weth = await contractAt("WETH", tokens.nativeToken.address)
  const referralStorage = await contractAt("ReferralStorage", "0x2BE676E945F79493Da633Bba796237f74a4Fe76D")
  const shortsTracker = await contractAt("ShortsTracker", "0xc6Cf2c52BABF583c315641A1d8eDB1965fcb60C6", signer)
  const shortsTrackerTimelock = await contractAt("ShortsTrackerTimelock", "0x5B1369cfbE69Ae1728d2BB483D52c7eF42C6f3e5", signer)
  const depositFee = "30" // 0.3%
  const minExecutionFee = "100000000000000" // 0.0001 ETH

  return {
    capKeeperWallet,
    vault,
    timelock,
    router,
    weth,
    referralStorage,
    shortsTracker,
    shortsTrackerTimelock,
    depositFee,
    minExecutionFee  
  }
}

async function main() {
  const signer = await getFrameSigner()

  const {
    capKeeperWallet,
    vault,
    timelock,
    router,
    weth,
    shortsTracker,
    shortsTrackerTimelock,
    depositFee,
    minExecutionFee,
    referralStorage
  } = await getValues(signer)

  const positionUtils = await deployContract("PositionUtils", [])

  const referralStorageGov = await contractAt("Timelock", await referralStorage.gov(), signer)

  const positionRouterArgs = [vault.address, router.address, weth.address, shortsTracker.address, depositFee, minExecutionFee]
  const positionRouter = await deployContract("PositionRouter", positionRouterArgs, "PositionRouter", {
      libraries: {
        PositionUtils: positionUtils.address
      }
  })

  await sendTxn(positionRouter.setReferralStorage(referralStorage.address), "positionRouter.setReferralStorage")
  await sendTxn(referralStorageGov.signalSetHandler(referralStorage.address, positionRouter.address, true), "referralStorage.signalSetHandler(positionRouter)")

  await sendTxn(shortsTrackerTimelock.signalSetHandler(positionRouter.address, true), "shortsTrackerTimelock.signalSetHandler(positionRouter)")

  await sendTxn(router.addPlugin(positionRouter.address), "router.addPlugin")

  await sendTxn(positionRouter.setDelayValues(0, 180, 30 * 60), "positionRouter.setDelayValues")
  await sendTxn(timelock.setContractHandler(positionRouter.address, true), "timelock.setContractHandler(positionRouter)")

  await sendTxn(positionRouter.setGov(await vault.gov()), "positionRouter.setGov")

  await sendTxn(positionRouter.setAdmin(capKeeperWallet.address), "positionRouter.setAdmin")
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
