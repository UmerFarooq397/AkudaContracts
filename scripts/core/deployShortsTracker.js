const { getFrameSigner, deployContract, contractAt , sendTxn, readTmpAddresses, writeTmpAddresses } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities")
const { toUsd } = require("../../test/shared/units");
const { getArgumentForSignature } = require("typechain");

const network = (process.env.HARDHAT_NETWORK || 'mainnet');
const tokens = require('./tokens')[network];



async function getValues() {
  return { vaultAddress: "0x1B183979a5cd95FAF392c8002dbF0D5A1C687D9a" }
}

async function main() {
  const { vaultAddress, gasLimit } = await getValues()
  const gov = { address: "0x777e2217A6e4438a6204e8e43B7648970e6417f9" }
  const shortsTracker = await deployContract("ShortsTracker", [vaultAddress], "ShortsTracker", { gasLimit })
  await sendTxn(shortsTracker.setGov(gov.address), "shortsTracker.setGov")
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
