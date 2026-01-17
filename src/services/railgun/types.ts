/**
 * RAILGUN SDK Type Definitions
 * 
 * This file contains TypeScript types for the RAILGUN SDK integration.
 * These types provide a clean interface between our application and the SDK.
 */

import { NetworkName, TXIDVersion } from '@railgun-community/shared-models';

// Re-export commonly used types from shared-models
export { NetworkName, TXIDVersion };

/**
 * Supported RAILGUN network chain IDs
 */
export const RAILGUN_SUPPORTED_CHAIN_IDS = {
  ETHEREUM: 1,
  POLYGON: 137,
  ARBITRUM: 42161,
  BSC: 56,
} as const;

export type RailgunChainId = typeof RAILGUN_SUPPORTED_CHAIN_IDS[keyof typeof RAILGUN_SUPPORTED_CHAIN_IDS];

/**
 * Map from chain ID to RAILGUN NetworkName
 */
export const CHAIN_ID_TO_NETWORK_NAME: Record<RailgunChainId, NetworkName> = {
  [RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM]: NetworkName.Ethereum,
  [RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON]: NetworkName.Polygon,
  [RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM]: NetworkName.Arbitrum,
  [RAILGUN_SUPPORTED_CHAIN_IDS.BSC]: NetworkName.BNBChain,
};

/**
 * Map from NetworkName to chain ID
 */
export const NETWORK_NAME_TO_CHAIN_ID: Partial<Record<NetworkName, number>> = {
  [NetworkName.Ethereum]: RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM,
  [NetworkName.Polygon]: RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON,
  [NetworkName.Arbitrum]: RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM,
  [NetworkName.BNBChain]: RAILGUN_SUPPORTED_CHAIN_IDS.BSC,
};

/**
 * Engine initialization status
 */
export type EngineStatus = 
  | 'uninitialized'
  | 'initializing'
  | 'downloading_artifacts'
  | 'ready'
  | 'error';

/**
 * Engine state including status and any error
 */
export interface EngineState {
  status: EngineStatus;
  error?: string;
  artifactProgress?: {
    current: number;
    total: number;
    percentage: number;
  };
}

/**
 * Wallet status for the RAILGUN private wallet
 */
export type WalletStatus =
  | 'none'
  | 'loading'
  | 'awaiting_signature'
  | 'creating'
  | 'ready'
  | 'error';

/**
 * Wallet state including the RAILGUN address
 */
export interface WalletState {
  status: WalletStatus;
  railgunAddress?: string;
  walletId?: string;
  error?: string;
}

/**
 * Shield operation parameters
 */
export interface ShieldParams {
  networkName: NetworkName;
  tokenAddress: string;
  tokenDecimals: number;
  amount: bigint;
  fromAddress: string;
}

/**
 * Unshield operation parameters
 */
export interface UnshieldParams {
  networkName: NetworkName;
  tokenAddress: string;
  tokenDecimals: number;
  amount: bigint;
  toAddress: string;
  walletId: string;
}

/**
 * Privacy operation status during execution
 */
export type PrivacyOperationStatus = 
  | 'idle'
  | 'preparing'
  | 'awaiting_approval'
  | 'generating_proof'
  | 'shielding'
  | 'shielded'
  | 'waiting'
  | 'unshielding'
  | 'completed'
  | 'failed';

/**
 * Privacy operation state during execution
 */
export interface PrivacyOperationState {
  status: PrivacyOperationStatus;
  currentStep: number;
  totalSteps: number;
  txHash?: string;
  shieldTxHash?: string;
  unshieldTxHash?: string;
  error?: string;
  message?: string;
  waitTimeRemaining?: number;
  estimatedCompletion?: number;
  proofProgress?: {
    current: number;
    total: number;
  };
}

/**
 * Privacy quote with fee estimates
 */
export interface PrivacyQuote {
  chainId: RailgunChainId;
  networkName: NetworkName;
  shieldFeeUSD: string;
  unshieldFeeUSD: string;
  totalFeeUSD: string;
  estimatedShieldTime: number;
  estimatedUnshieldTime: number;
  recommendedWaitTime: number;
  totalEstimatedTime: number;
}

/**
 * Result of a shield operation
 */
export interface ShieldResult {
  success: boolean;
  txHash?: string;
  error?: string;
}

/**
 * Result of an unshield operation
 */
export interface UnshieldResult {
  success: boolean;
  txHash?: string;
  error?: string;
}

/**
 * Result of the full privacy flow
 */
export interface PrivacyFlowResult {
  success: boolean;
  shieldTxHash?: string;
  unshieldTxHash?: string;
  error?: string;
}

/**
 * Callback for privacy operation progress updates
 */
export type PrivacyProgressCallback = (state: PrivacyOperationState) => void;

/**
 * POI (Proof of Innocence) configuration
 */
export interface POIConfig {
  nodeURLs: string[];
  listKeys?: string[];
}

/**
 * Engine configuration for initialization
 */
export interface RailgunEngineConfig {
  walletSource: string;
  poiConfig: POIConfig;
  shouldDebug?: boolean;
}

/**
 * Token balance in private wallet
 */
export interface PrivateTokenBalance {
  tokenAddress: string;
  symbol: string;
  decimals: number;
  balance: bigint;
  balanceFormatted: string;
}

/**
 * Private wallet balances by network
 */
export interface PrivateBalances {
  networkName: NetworkName;
  tokens: PrivateTokenBalance[];
  lastScanned?: number;
}

/**
 * Gas estimates for privacy operations
 */
export interface GasEstimate {
  gasLimit: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  estimatedCostWei: bigint;
  estimatedCostUSD: string;
}

/**
 * Privacy step IDs for UI progress display
 */
export type PrivacyStepId = 
  | 'bridge_to_railgun'
  | 'shield'
  | 'wait'
  | 'unshield'
  | 'bridge_to_hyperliquid';

/**
 * Privacy step configuration for display
 */
export interface PrivacyStepConfig {
  id: PrivacyStepId;
  label: string;
  description: string;
}

/**
 * Get privacy steps for UI display
 */
export function getPrivacySteps(): PrivacyStepConfig[] {
  return [
    {
      id: 'bridge_to_railgun',
      label: 'Bridge to Privacy Chain',
      description: 'Transfer funds to a Railgun-supported chain',
    },
    {
      id: 'shield',
      label: 'Shield Funds',
      description: 'Enter Railgun private balance using ZK proofs',
    },
    {
      id: 'wait',
      label: 'Anonymity Period',
      description: 'Wait for anonymity set to grow (recommended)',
    },
    {
      id: 'unshield',
      label: 'Unshield Funds',
      description: 'Exit to a new public address',
    },
    {
      id: 'bridge_to_hyperliquid',
      label: 'Bridge to Hyperliquid',
      description: 'Transfer to final destination',
    },
  ];
}

/**
 * Check if a chain ID supports RAILGUN
 */
export function isRailgunSupported(chainId: number): chainId is RailgunChainId {
  return Object.values(RAILGUN_SUPPORTED_CHAIN_IDS).includes(chainId as RailgunChainId);
}

/**
 * Get NetworkName from chain ID
 */
export function getNetworkName(chainId: RailgunChainId): NetworkName {
  return CHAIN_ID_TO_NETWORK_NAME[chainId];
}

/**
 * Get chain ID from NetworkName
 */
export function getChainId(networkName: NetworkName): number | undefined {
  return NETWORK_NAME_TO_CHAIN_ID[networkName];
}

/**
 * Get the best RAILGUN chain for privacy routing
 * Prefers Arbitrum for lowest fees
 */
export function getBestRailgunChain(preferredChainId?: number): RailgunChainId {
  if (preferredChainId && isRailgunSupported(preferredChainId)) {
    return preferredChainId;
  }
  // Default to Arbitrum for lowest fees
  return RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM;
}

/**
 * Get chain name for display
 */
export function getRailgunChainName(chainId: RailgunChainId): string {
  switch (chainId) {
    case RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM:
      return 'Ethereum';
    case RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON:
      return 'Polygon';
    case RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM:
      return 'Arbitrum';
    case RAILGUN_SUPPORTED_CHAIN_IDS.BSC:
      return 'BNB Chain';
    default:
      return 'Unknown';
  }
}
