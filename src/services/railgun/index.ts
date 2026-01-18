/**
 * RAILGUN SDK Integration
 * 
 * This module provides a production-ready integration with the RAILGUN privacy protocol.
 * It enables shield/unshield operations for private token transfers using zero-knowledge proofs.
 * 
 * Usage:
 * 1. Initialize the engine on app startup: await initializeRailgunEngine()
 * 2. Create/load wallet when user connects: await createOrLoadRailgunWallet(signer, address)
 * 3. Execute privacy operations: await executeShield() / await executeUnshield()
 * 
 * @module railgun
 */

// Re-export types
export type {
  RailgunChainId,
  EngineState,
  EngineStatus,
  WalletState,
  WalletStatus,
  ShieldParams,
  UnshieldParams,
  ShieldResult,
  UnshieldResult,
  PrivacyOperationState,
  PrivacyOperationStatus,
  PrivacyProgressCallback,
  PrivacyFlowResult,
  PrivacyQuote,
  PrivacyStepId,
  PrivacyStepConfig,
  POIConfig,
  RailgunEngineConfig,
  PrivateTokenBalance,
  PrivateBalances,
  GasEstimate,
} from './types';

// Re-export type utilities
export {
  RAILGUN_SUPPORTED_CHAIN_IDS,
  CHAIN_ID_TO_NETWORK_NAME,
  NETWORK_NAME_TO_CHAIN_ID,
  isRailgunSupported,
  getNetworkName,
  getChainId,
  getBestRailgunChain,
  getRailgunChainName,
  getPrivacySteps,
} from './types';

// Re-export engine functions
export {
  initializeRailgunEngine,
  getEngineState,
  getEngineStatus,
  isEngineReady,
  subscribeToEngineState,
  loadNetworkProvider,
  loadAllProviders,
  getRailgunContractAddresses,
  resetEngineState,
} from './engine';

// Re-export wallet functions
export {
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
} from './wallet';

// Re-export operations functions
export {
  executeShield,
  executeUnshield,
  executePrivacyFlow,
  getPrivacyQuote,
  ensureTokenApproval,
  getPrivateBalance,
} from './operations';

// Re-export shared-models types that may be needed
export { NetworkName, TXIDVersion } from '@railgun-community/shared-models';
