/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ReaderInterface extends ethers.utils.Interface {
  functions: {
    "BASIS_POINTS_DIVISOR()": FunctionFragment;
    "POSITION_PROPS_LENGTH()": FunctionFragment;
    "PRICE_PRECISION()": FunctionFragment;
    "USDG_DECIMALS()": FunctionFragment;
    "getAmountOut(address,address,address,uint256)": FunctionFragment;
    "getFeeBasisPoints(address,address,address,uint256)": FunctionFragment;
    "getFees(address,address[])": FunctionFragment;
    "getFullVaultTokenInfo(address,address,uint256,address[])": FunctionFragment;
    "getFundingRates(address,address,address[])": FunctionFragment;
    "getMaxAmountIn(address,address,address)": FunctionFragment;
    "getPairInfo(address,address[])": FunctionFragment;
    "getPositions(address,address,address[],address[],bool[])": FunctionFragment;
    "getPrices(address,address[])": FunctionFragment;
    "getStakingInfo(address,address[])": FunctionFragment;
    "getTokenBalances(address,address[])": FunctionFragment;
    "getTokenBalancesWithSupplies(address,address[])": FunctionFragment;
    "getTokenSupply(address,address[])": FunctionFragment;
    "getTotalBalance(address,address[])": FunctionFragment;
    "getTotalStaked(address[])": FunctionFragment;
    "getVaultTokenInfo(address,address,uint256,address[])": FunctionFragment;
    "getVaultTokenInfoV2(address,address,uint256,address[])": FunctionFragment;
    "getVestingInfo(address,address[])": FunctionFragment;
    "gov()": FunctionFragment;
    "hasMaxGlobalShortSizes()": FunctionFragment;
    "setConfig(bool)": FunctionFragment;
    "setGov(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_PROPS_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDG_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeBasisPoints",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFees",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFullVaultTokenInfo",
    values: [string, string, BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFundingRates",
    values: [string, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxAmountIn",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPairInfo",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositions",
    values: [string, string, string[], string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrices",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingInfo",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalances",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalancesWithSupplies",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenSupply",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBalance",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalStaked",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultTokenInfo",
    values: [string, string, BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultTokenInfoV2",
    values: [string, string, BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingInfo",
    values: [string, string[]]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasMaxGlobalShortSizes",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setConfig", values: [boolean]): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_PROPS_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USDG_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFullVaultTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFundingRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPairInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalancesWithSupplies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultTokenInfoV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasMaxGlobalShortSizes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;

  events: {};
}

export class Reader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ReaderInterface;

  functions: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAmountOut(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getFeeBasisPoints(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getFees(
      _vault: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFullVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFundingRates(
      _vault: string,
      _weth: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getMaxAmountIn(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPairInfo(
      _factory: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getPositions(
      _vault: string,
      _account: string,
      _collateralTokens: string[],
      _indexTokens: string[],
      _isLong: boolean[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getPrices(
      _priceFeed: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getStakingInfo(
      _account: string,
      _yieldTrackers: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getTokenBalances(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getTokenBalancesWithSupplies(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getTokenSupply(
      _token: string,
      _excludedAccounts: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalBalance(
      _token: string,
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalStaked(
      _yieldTokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getVaultTokenInfoV2(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getVestingInfo(
      _account: string,
      _vesters: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<[boolean]>;

    setConfig(
      _hasMaxGlobalShortSizes: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  getAmountOut(
    _vault: string,
    _tokenIn: string,
    _tokenOut: string,
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getFeeBasisPoints(
    _vault: string,
    _tokenIn: string,
    _tokenOut: string,
    _amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getFees(
    _vault: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFullVaultTokenInfo(
    _vault: string,
    _weth: string,
    _usdgAmount: BigNumberish,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFundingRates(
    _vault: string,
    _weth: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getMaxAmountIn(
    _vault: string,
    _tokenIn: string,
    _tokenOut: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPairInfo(
    _factory: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getPositions(
    _vault: string,
    _account: string,
    _collateralTokens: string[],
    _indexTokens: string[],
    _isLong: boolean[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getPrices(
    _priceFeed: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getStakingInfo(
    _account: string,
    _yieldTrackers: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTokenBalances(
    _account: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTokenBalancesWithSupplies(
    _account: string,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getTokenSupply(
    _token: string,
    _excludedAccounts: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalBalance(
    _token: string,
    _accounts: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalStaked(
    _yieldTokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getVaultTokenInfo(
    _vault: string,
    _weth: string,
    _usdgAmount: BigNumberish,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getVaultTokenInfoV2(
    _vault: string,
    _weth: string,
    _usdgAmount: BigNumberish,
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getVestingInfo(
    _account: string,
    _vesters: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  gov(overrides?: CallOverrides): Promise<string>;

  hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<boolean>;

  setConfig(
    _hasMaxGlobalShortSizes: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getFeeBasisPoints(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getFees(
      _vault: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFullVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFundingRates(
      _vault: string,
      _weth: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getMaxAmountIn(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPairInfo(
      _factory: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getPositions(
      _vault: string,
      _account: string,
      _collateralTokens: string[],
      _indexTokens: string[],
      _isLong: boolean[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getPrices(
      _priceFeed: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getStakingInfo(
      _account: string,
      _yieldTrackers: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTokenBalances(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTokenBalancesWithSupplies(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTokenSupply(
      _token: string,
      _excludedAccounts: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBalance(
      _token: string,
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalStaked(
      _yieldTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getVaultTokenInfoV2(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getVestingInfo(
      _account: string,
      _vesters: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    gov(overrides?: CallOverrides): Promise<string>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<boolean>;

    setConfig(
      _hasMaxGlobalShortSizes: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_PROPS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeBasisPoints(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFees(
      _vault: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFullVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingRates(
      _vault: string,
      _weth: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxAmountIn(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPairInfo(
      _factory: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositions(
      _vault: string,
      _account: string,
      _collateralTokens: string[],
      _indexTokens: string[],
      _isLong: boolean[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrices(
      _priceFeed: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingInfo(
      _account: string,
      _yieldTrackers: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalances(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalancesWithSupplies(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenSupply(
      _token: string,
      _excludedAccounts: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBalance(
      _token: string,
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalStaked(
      _yieldTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultTokenInfoV2(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingInfo(
      _account: string,
      _vesters: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    hasMaxGlobalShortSizes(overrides?: CallOverrides): Promise<BigNumber>;

    setConfig(
      _hasMaxGlobalShortSizes: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POSITION_PROPS_LENGTH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOut(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeBasisPoints(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFees(
      _vault: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFullVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFundingRates(
      _vault: string,
      _weth: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxAmountIn(
      _vault: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPairInfo(
      _factory: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositions(
      _vault: string,
      _account: string,
      _collateralTokens: string[],
      _indexTokens: string[],
      _isLong: boolean[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrices(
      _priceFeed: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingInfo(
      _account: string,
      _yieldTrackers: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalances(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalancesWithSupplies(
      _account: string,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenSupply(
      _token: string,
      _excludedAccounts: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBalance(
      _token: string,
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalStaked(
      _yieldTokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultTokenInfo(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultTokenInfoV2(
      _vault: string,
      _weth: string,
      _usdgAmount: BigNumberish,
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingInfo(
      _account: string,
      _vesters: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasMaxGlobalShortSizes(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setConfig(
      _hasMaxGlobalShortSizes: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}