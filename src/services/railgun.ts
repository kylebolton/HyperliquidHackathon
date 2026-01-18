/**
 * Railgun Privacy Service
 * 
 * This module provides privacy functionality using the RAILGUN protocol.
 * All operations use the real RAILGUN SDK for production ZK-privacy transactions.
 * 
 * RAILGUN Flow:
 * 1. Shield: Transfer tokens from public address to private Railgun balance
 * 2. Wait: Allow time for anonymity set to grow (recommended)
 * 3. Unshield: Transfer tokens from private balance to any public address
 * 
 * @see https://docs.railgun.org for more information
 */

// Re-export everything from the new modular implementation
export {
  // Types
  type RailgunChainId,
  type EngineState,
  type EngineStatus,
  type WalletState,
  type WalletStatus,
  type ShieldParams,
  type UnshieldParams,
  type ShieldResult,
  type UnshieldResult,
  type PrivacyOperationState,
  type PrivacyOperationStatus,
  type PrivacyProgressCallback,
  type PrivacyFlowResult,
  type PrivacyQuote,
  type PrivacyStepId,
  type PrivacyStepConfig,
  type POIConfig,
  type RailgunEngineConfig,
  type PrivateTokenBalance,
  type PrivateBalances,
  type GasEstimate,
  
  // Constants
  RAILGUN_SUPPORTED_CHAIN_IDS,
  CHAIN_ID_TO_NETWORK_NAME,
  NETWORK_NAME_TO_CHAIN_ID,
  
  // Type utilities
  isRailgunSupported,
  getNetworkName,
  getChainId,
  getBestRailgunChain,
  getRailgunChainName,
  getPrivacySteps,
  
  // Engine functions
  initializeRailgunEngine,
  getEngineState,
  getEngineStatus,
  isEngineReady,
  subscribeToEngineState,
  loadNetworkProvider,
  getRailgunContractAddresses,
  resetEngineState,
  
  // Wallet functions
  createOrLoadRailgunWallet,
  loadExistingWallet,
  unloadWallet,
  getWalletState,
  getWalletStatus,
  isWalletReady,
  getWalletId,
  getRailgunAddress,
  subscribeToWalletState,
  rescanWallet,
  getViewingKey,
  getSmartWalletContract,
  resetWalletState,
  
  // Operations functions
  executeShield,
  executeUnshield,
  executePrivacyFlow,
  getPrivacyQuote,
  ensureTokenApproval,
  getPrivateBalance,
  
  // SDK types
  NetworkName,
  TXIDVersion,
} from './railgun/index';

// Legacy exports for backward compatibility with existing code
// These map to the new implementation

/**
 * @deprecated Use RAILGUN_SUPPORTED_CHAIN_IDS instead
 */
export const RAILGUN_SUPPORTED_CHAINS = {
  ETHEREUM: 1,
  POLYGON: 137,
  ARBITRUM: 42161,
  BSC: 56,
} as const;

/**
 * @deprecated Use PrivacyStepId from types instead
 */
export type PrivacyStepIdType = 
  | 'bridge_to_railgun'
  | 'shield'
  | 'wait'
  | 'unshield'
  | 'bridge_to_hyperliquid';
