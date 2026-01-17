/**
 * RAILGUN Engine Initialization
 * 
 * This module handles the initialization and lifecycle of the RAILGUN privacy engine.
 * It sets up the necessary infrastructure for ZK proof generation and private transactions.
 */

import {
  startRailgunEngine,
  loadProvider,
  setOnBalanceUpdateCallback,
  setOnUTXOMerkletreeScanCallback,
  setOnTXIDMerkletreeScanCallback,
} from '@railgun-community/wallet';
import type { FallbackProviderJsonConfig } from '@railgun-community/shared-models';
import {
  NetworkName,
  NETWORK_CONFIG,
  isDefined,
} from '@railgun-community/shared-models';
import type {
  EngineState,
  EngineStatus,
  RailgunEngineConfig,
  RailgunChainId,
} from './types';
import {
  RAILGUN_SUPPORTED_CHAIN_IDS,
  getNetworkName,
  isRailgunSupported,
} from './types';

// Engine singleton state
let engineState: EngineState = {
  status: 'uninitialized',
};

let engineInitPromise: Promise<boolean> | null = null;

// Callbacks for state updates
type EngineStateCallback = (state: EngineState) => void;
const stateCallbacks: Set<EngineStateCallback> = new Set();

/**
 * Subscribe to engine state changes
 */
export function subscribeToEngineState(callback: EngineStateCallback): () => void {
  stateCallbacks.add(callback);
  // Immediately call with current state
  callback(engineState);
  return () => {
    stateCallbacks.delete(callback);
  };
}

/**
 * Update engine state and notify subscribers
 */
function updateEngineState(updates: Partial<EngineState>): void {
  engineState = { ...engineState, ...updates };
  stateCallbacks.forEach(callback => callback(engineState));
}

/**
 * Get current engine state
 */
export function getEngineState(): EngineState {
  return engineState;
}

/**
 * Get engine status
 */
export function getEngineStatus(): EngineStatus {
  return engineState.status;
}

/**
 * Check if engine is ready
 */
export function isEngineReady(): boolean {
  return engineState.status === 'ready';
}

/**
 * Default POI (Proof of Innocence) aggregator nodes
 * These are the official RAILGUN community nodes
 */
const DEFAULT_POI_NODES = [
  'https://poi-node.railgun.org',
];

/**
 * RPC provider configurations for supported networks
 * Using public RPC endpoints - production should use dedicated providers
 */
const RPC_PROVIDERS: Record<RailgunChainId, FallbackProviderJsonConfig> = {
  [RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM,
    providers: [
      {
        provider: 'https://eth.llamarpc.com',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
      {
        provider: 'https://rpc.ankr.com/eth',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON,
    providers: [
      {
        provider: 'https://polygon.llamarpc.com',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
      {
        provider: 'https://rpc.ankr.com/polygon',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM,
    providers: [
      {
        provider: 'https://arb1.arbitrum.io/rpc',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
      {
        provider: 'https://rpc.ankr.com/arbitrum',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.BSC]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.BSC,
    providers: [
      {
        provider: 'https://bsc-dataseed.binance.org',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
      {
        provider: 'https://rpc.ankr.com/bsc',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 10,
        stallTimeout: 2500,
      },
    ],
  },
};

/**
 * Artifact store configuration for browser environment
 * Uses a CDN-based approach for downloading ZK circuit artifacts
 */
const artifactStore = {
  get: async (_path: string): Promise<string | Buffer | null> => {
    // In browser, return null to trigger download from CDN
    return null;
  },
  store: async (_dir: string, _path: string, _item: string | Uint8Array): Promise<void> => {
    // Browser storage is handled internally by the SDK using IndexedDB
  },
  exists: async (_path: string): Promise<boolean> => {
    // Let the SDK handle artifact caching
    return false;
  },
};

/**
 * Create the database storage for browser environment
 * Uses IndexedDB via localForage internally
 */
function createBrowserDatabase(_dbPath: string) {
  // The SDK handles browser database creation internally
  // This is a no-op for browser environments
  return undefined;
}

/**
 * Initialize the RAILGUN engine
 * This must be called before any privacy operations can be performed
 */
export async function initializeRailgunEngine(
  config?: Partial<RailgunEngineConfig>
): Promise<boolean> {
  // Return existing initialization if in progress
  if (engineInitPromise) {
    return engineInitPromise;
  }

  // Already initialized
  if (engineState.status === 'ready') {
    return true;
  }

  engineInitPromise = doInitializeEngine(config);
  return engineInitPromise;
}

async function doInitializeEngine(
  config?: Partial<RailgunEngineConfig>
): Promise<boolean> {
  try {
    updateEngineState({ 
      status: 'initializing',
      error: undefined,
    });

    const walletSource = config?.walletSource ?? 'liquyn-swap';
    const poiNodeURLs = config?.poiConfig?.nodeURLs ?? DEFAULT_POI_NODES;
    const shouldDebug = config?.shouldDebug ?? false;

    // Set up balance update callback
    setOnBalanceUpdateCallback(async (balanceData) => {
      // Balance updated - this will be handled by the wallet module
      if (shouldDebug && isDefined(balanceData)) {
        console.log('[RAILGUN] Balance update received');
      }
    });

    // Set up merkletree scan callbacks
    setOnUTXOMerkletreeScanCallback((scanData) => {
      if (shouldDebug && isDefined(scanData)) {
        const progress = scanData.progress ?? 0;
        console.log(`[RAILGUN] UTXO Merkletree scan: ${Math.round(progress * 100)}%`);
      }
    });

    setOnTXIDMerkletreeScanCallback((scanData) => {
      if (shouldDebug && isDefined(scanData)) {
        const progress = scanData.progress ?? 0;
        console.log(`[RAILGUN] TXID Merkletree scan: ${Math.round(progress * 100)}%`);
      }
    });

    updateEngineState({ status: 'downloading_artifacts' });

    // Initialize the engine
    await startRailgunEngine(
      walletSource,
      createBrowserDatabase('railgun-db'),
      shouldDebug,
      artifactStore,
      false, // useNativeArtifacts - false for browser
      false, // skipMerkletreeScans - we want full scanning
      poiNodeURLs,
    );

    // Load providers for all supported networks
    await loadProvidersForNetworks();

    updateEngineState({ status: 'ready' });
    console.log('[RAILGUN] Engine initialized successfully');
    
    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[RAILGUN] Engine initialization failed:', errorMessage);
    
    updateEngineState({
      status: 'error',
      error: errorMessage,
    });
    
    engineInitPromise = null;
    return false;
  }
}

/**
 * Load RPC providers for all supported networks
 */
async function loadProvidersForNetworks(): Promise<void> {
  const networks = Object.values(RAILGUN_SUPPORTED_CHAIN_IDS);
  
  for (const chainId of networks) {
    if (!isRailgunSupported(chainId)) continue;
    
    const networkName = getNetworkName(chainId);
    const providerConfig = RPC_PROVIDERS[chainId];
    
    // Skip if network not in RAILGUN config
    if (!NETWORK_CONFIG[networkName]) {
      console.warn(`[RAILGUN] Network ${networkName} not found in config`);
      continue;
    }
    
    try {
      await loadProvider(
        providerConfig,
        networkName,
        10000, // pollingInterval in ms
      );
      console.log(`[RAILGUN] Provider loaded for ${networkName}`);
    } catch (error) {
      console.warn(`[RAILGUN] Failed to load provider for ${networkName}:`, error);
      // Continue with other networks even if one fails
    }
  }
}

/**
 * Load provider for a specific network
 */
export async function loadNetworkProvider(chainId: RailgunChainId): Promise<boolean> {
  if (!isRailgunSupported(chainId)) {
    console.error(`[RAILGUN] Chain ${chainId} is not supported`);
    return false;
  }

  const networkName = getNetworkName(chainId);
  const providerConfig = RPC_PROVIDERS[chainId];

  try {
    await loadProvider(providerConfig, networkName, 10000);
    return true;
  } catch (error) {
    console.error(`[RAILGUN] Failed to load provider for ${networkName}:`, error);
    return false;
  }
}

/**
 * Get the RAILGUN contract addresses for a network
 */
export function getRailgunContractAddresses(networkName: NetworkName): {
  proxy: string;
  relay: string;
} | null {
  const config = NETWORK_CONFIG[networkName];
  if (!config) return null;

  return {
    proxy: config.proxyContract,
    relay: config.relayAdaptContract,
  };
}

/**
 * Reset engine state (for testing/debugging)
 */
export function resetEngineState(): void {
  engineState = {
    status: 'uninitialized',
  };
  engineInitPromise = null;
  stateCallbacks.clear();
}
