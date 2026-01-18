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
import leveljs from 'level-js';

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
  'https://poi-node-1.railgun.ch',
  'https://poi-node-2.railgun.ch',
  'https://poi-aggregator.railway.app',
];

/**
 * RPC provider configurations for supported networks
 * Using CORS-friendly public RPC endpoints
 * Note: For high-volume production use, consider dedicated providers like Alchemy/Infura
 */
const RPC_PROVIDERS: Record<RailgunChainId, FallbackProviderJsonConfig> = {
  [RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM,
    providers: [
      {
        provider: 'https://eth.llamarpc.com',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 1, // Reduced to avoid rate limits
        stallTimeout: 5000,
      },
      {
        provider: 'https://cloudflare-eth.com',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 5000,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.POLYGON,
    providers: [
      {
        provider: 'https://polygon-rpc.com',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 5000,
      },
      {
        provider: 'https://polygon.llamarpc.com',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 5000,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM,
    providers: [
      // CORS-friendly public RPC endpoints - tested for browser access
      {
        provider: 'https://arbitrum.drpc.org',
        priority: 1,
        weight: 2,
        maxLogsPerBatch: 1,
        stallTimeout: 15000,
      },
      {
        provider: 'https://arb-pokt.nodies.app',
        priority: 2,
        weight: 2,
        maxLogsPerBatch: 1,
        stallTimeout: 15000,
      },
      {
        provider: 'https://arbitrum.meowrpc.com',
        priority: 3,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 15000,
      },
    ],
  },
  [RAILGUN_SUPPORTED_CHAIN_IDS.BSC]: {
    chainId: RAILGUN_SUPPORTED_CHAIN_IDS.BSC,
    providers: [
      {
        provider: 'https://bsc-dataseed1.defibit.io',
        priority: 1,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 5000,
      },
      {
        provider: 'https://bsc-dataseed2.defibit.io',
        priority: 2,
        weight: 1,
        maxLogsPerBatch: 1,
        stallTimeout: 5000,
      },
    ],
  },
};

/**
 * IndexedDB database name for artifact caching
 */
const ARTIFACT_DB_NAME = 'railgun-artifacts';
const ARTIFACT_STORE_NAME = 'artifacts';

/**
 * Open IndexedDB for artifact storage
 */
function openArtifactDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(ARTIFACT_DB_NAME, 1);
    
    request.onerror = () => {
      console.error('[RAILGUN] Failed to open artifact database:', request.error);
      reject(request.error);
    };
    
    request.onsuccess = () => {
      resolve(request.result);
    };
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(ARTIFACT_STORE_NAME)) {
        db.createObjectStore(ARTIFACT_STORE_NAME);
      }
    };
  });
}

/**
 * Artifact store configuration for browser environment
 * Uses IndexedDB for caching ZK circuit artifacts
 */
const artifactStore = {
  get: async (path: string): Promise<string | Buffer | null> => {
    try {
      const db = await openArtifactDB();
      return new Promise((resolve) => {
        const transaction = db.transaction(ARTIFACT_STORE_NAME, 'readonly');
        const store = transaction.objectStore(ARTIFACT_STORE_NAME);
        const request = store.get(path);
        
        request.onerror = () => {
          console.warn('[RAILGUN] Failed to get artifact:', path);
          resolve(null);
        };
        
        request.onsuccess = () => {
          resolve(request.result || null);
        };
        
        transaction.oncomplete = () => {
          db.close();
        };
      });
    } catch (error) {
      console.warn('[RAILGUN] Artifact store get error:', error);
      return null;
    }
  },
  
  store: async (_dir: string, path: string, item: string | Uint8Array): Promise<void> => {
    try {
      const db = await openArtifactDB();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(ARTIFACT_STORE_NAME, 'readwrite');
        const store = transaction.objectStore(ARTIFACT_STORE_NAME);
        const request = store.put(item, path);
        
        request.onerror = () => {
          console.warn('[RAILGUN] Failed to store artifact:', path);
          reject(request.error);
        };
        
        request.onsuccess = () => {
          resolve();
        };
        
        transaction.oncomplete = () => {
          db.close();
        };
      });
    } catch (error) {
      console.warn('[RAILGUN] Artifact store put error:', error);
    }
  },
  
  exists: async (path: string): Promise<boolean> => {
    try {
      const result = await artifactStore.get(path);
      return result !== null;
    } catch {
      return false;
    }
  },
};

/**
 * Create the database storage for browser environment
 * Uses level-js which is abstract-leveldown compatible and backed by IndexedDB
 */
function createBrowserDatabase(dbPath: string): ReturnType<typeof leveljs> {
  // Create a level-js database (abstract-leveldown compatible, backed by IndexedDB)
  return leveljs(dbPath);
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
    console.log('[RAILGUN] Starting engine initialization...');
    
    updateEngineState({ 
      status: 'initializing',
      error: undefined,
    });

    const walletSource = config?.walletSource ?? 'liquynswap';
    const poiNodeURLs = config?.poiConfig?.nodeURLs ?? DEFAULT_POI_NODES;
    // Disable verbose debug logging in production
    const shouldDebug = config?.shouldDebug ?? false;

    updateEngineState({ status: 'downloading_artifacts' });
    console.log('[RAILGUN] Calling startRailgunEngine...');

    const dbPath = createBrowserDatabase('railgun-db');
    console.log('[RAILGUN] Database path:', dbPath);

    // Initialize the engine FIRST - callbacks must be set AFTER engine is started
    // Note: skipMerkletreeScans must be false for wallet creation to work
    await startRailgunEngine(
      walletSource,
      dbPath,
      shouldDebug,
      artifactStore,
      false, // useNativeArtifacts - false for browser
      false, // skipMerkletreeScans - required for wallet operations
      poiNodeURLs,
    );

    console.log('[RAILGUN] Engine started, setting up callbacks...');

    // Set up balance update callback AFTER engine is started
    setOnBalanceUpdateCallback(async (balanceData) => {
      // Balance updated - this will be handled by the wallet module
      if (shouldDebug && isDefined(balanceData)) {
        console.log('[RAILGUN] Balance update received');
      }
    });

    // Set up merkletree scan callbacks AFTER engine is started
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

    console.log('[RAILGUN] Callbacks set, loading initial provider...');

    // Load only Ethereum provider initially to minimize rate limiting
    // Other providers will be loaded lazily when needed
    const defaultChainId = RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM;
    try {
      await loadNetworkProviderInternal(defaultChainId);
    } catch (error) {
      console.warn('[RAILGUN] Initial provider load failed, continuing without:', error);
      // Don't fail initialization if provider load fails - user can still use privacy mode
    }

    updateEngineState({ status: 'ready' });
    console.log('[RAILGUN] Engine initialized successfully');
    
    return true;
  } catch (error) {
    // Log the full error for debugging
    console.error('[RAILGUN] Engine initialization failed:', error);
    
    // Extract error message
    let errorMessage = 'Unknown error during engine initialization';
    if (error instanceof Error) {
      errorMessage = error.message;
      // Log stack trace for debugging
      if (error.stack) {
        console.error('[RAILGUN] Stack trace:', error.stack);
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object') {
      errorMessage = JSON.stringify(error);
    }
    
    console.error('[RAILGUN] Error message:', errorMessage);
    
    updateEngineState({
      status: 'error',
      error: errorMessage,
    });
    
    engineInitPromise = null;
    return false;
  }
}

// Track which providers have been loaded to avoid re-loading
const loadedProviders = new Set<RailgunChainId>();

/**
 * Internal function to load a network provider
 */
async function loadNetworkProviderInternal(chainId: RailgunChainId): Promise<boolean> {
  if (loadedProviders.has(chainId)) {
    return true; // Already loaded
  }

  if (!isRailgunSupported(chainId)) {
    console.warn(`[RAILGUN] Chain ${chainId} is not supported`);
    return false;
  }

  const networkName = getNetworkName(chainId);
  const providerConfig = RPC_PROVIDERS[chainId];

  // Skip if network not in RAILGUN config
  if (!NETWORK_CONFIG[networkName]) {
    console.warn(`[RAILGUN] Network ${networkName} not found in config`);
    return false;
  }

  try {
    await loadProvider(
      providerConfig,
      networkName,
      60000, // pollingInterval - increased to reduce RPC calls
    );
    loadedProviders.add(chainId);
    console.log(`[RAILGUN] Provider loaded for ${networkName}`);
    return true;
  } catch (error) {
    console.warn(`[RAILGUN] Failed to load provider for ${networkName}:`, error);
    return false;
  }
}

/**
 * Load provider for a specific network (public API)
 * Call this before performing privacy operations on a specific chain
 */
export async function loadNetworkProvider(chainId: RailgunChainId): Promise<boolean> {
  if (!isEngineReady()) {
    console.error('[RAILGUN] Engine not ready, cannot load provider');
    return false;
  }
  return loadNetworkProviderInternal(chainId);
}

/**
 * Load RPC providers for all supported networks
 * Note: This is optional - providers are loaded lazily by default
 */
export async function loadAllProviders(): Promise<void> {
  const networks = Object.values(RAILGUN_SUPPORTED_CHAIN_IDS);
  
  for (const chainId of networks) {
    await loadNetworkProviderInternal(chainId);
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
