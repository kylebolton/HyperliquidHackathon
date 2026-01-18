/**
 * RAILGUN Wallet React Hook
 * 
 * This hook manages the RAILGUN private wallet lifecycle, handling creation,
 * loading, and state management. The wallet is derived deterministically from
 * a signed message, ensuring the same wallet is recovered across sessions.
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { BrowserProvider, JsonRpcSigner } from 'ethers';
import {
  createOrLoadRailgunWallet,
  subscribeToWalletState,
  getWalletState,
  unloadWallet,
  isEngineReady,
  type WalletState,
} from '../services/railgun';

interface UseRailgunWalletReturn {
  /** Current wallet state */
  state: WalletState;
  /** Whether the wallet is ready for operations */
  isReady: boolean;
  /** Whether the wallet is being created or loaded */
  isLoading: boolean;
  /** Whether waiting for user signature */
  isAwaitingSignature: boolean;
  /** Whether there was an error */
  hasError: boolean;
  /** Error message if any */
  error: string | undefined;
  /** The RAILGUN address (0zk format) */
  railgunAddress: string | undefined;
  /** Create or load the RAILGUN wallet */
  createWallet: () => Promise<string | null>;
  /** Disconnect the wallet */
  disconnect: () => Promise<void>;
}

/**
 * Hook for managing the RAILGUN private wallet
 * 
 * @param autoCreate - Whether to automatically create wallet when connected (default: false)
 * @returns Wallet state and control functions
 * 
 * @example
 * ```tsx
 * function PrivacyWallet() {
 *   const { 
 *     isReady, 
 *     isLoading, 
 *     isAwaitingSignature,
 *     railgunAddress,
 *     createWallet 
 *   } = useRailgunWallet();
 * 
 *   if (isAwaitingSignature) return <p>Please sign the message...</p>;
 *   if (isLoading) return <Loading />;
 *   if (!isReady) return <button onClick={createWallet}>Enable Privacy</button>;
 * 
 *   return <p>Your private address: {railgunAddress}</p>;
 * }
 * ```
 */
export function useRailgunWallet(autoCreate: boolean = false): UseRailgunWalletReturn {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [state, setState] = useState<WalletState>(getWalletState);

  // Subscribe to wallet state changes
  useEffect(() => {
    const unsubscribe = subscribeToWalletState((newState) => {
      setState(newState);
    });

    return unsubscribe;
  }, []);

  // Convert wagmi wallet client to ethers signer
  const getSigner = useCallback(async (): Promise<JsonRpcSigner | null> => {
    if (!walletClient) return null;

    try {
      // Create ethers provider from wagmi wallet client
      const provider = new BrowserProvider(walletClient.transport as any);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error('[RAILGUN] Failed to get signer:', error);
      return null;
    }
  }, [walletClient]);

  // Create wallet function
  const createWallet = useCallback(async (): Promise<string | null> => {
    if (!isConnected || !address) {
      console.error('[RAILGUN] Wallet not connected');
      return null;
    }

    if (!isEngineReady()) {
      console.error('[RAILGUN] Engine not ready');
      return null;
    }

    const signer = await getSigner();
    if (!signer) {
      console.error('[RAILGUN] Could not get signer');
      return null;
    }

    return createOrLoadRailgunWallet(signer, address);
  }, [isConnected, address, getSigner]);

  // Disconnect function
  const disconnect = useCallback(async () => {
    await unloadWallet();
  }, []);

  // Auto-create wallet when connected (if enabled)
  useEffect(() => {
    if (
      autoCreate &&
      isConnected &&
      address &&
      isEngineReady() &&
      state.status === 'none'
    ) {
      createWallet();
    }
  }, [autoCreate, isConnected, address, state.status, createWallet]);

  // Unload wallet when disconnected
  useEffect(() => {
    if (!isConnected && state.status !== 'none') {
      unloadWallet();
    }
  }, [isConnected, state.status]);

  // Memoize return value
  return useMemo(() => ({
    state,
    isReady: state.status === 'ready',
    isLoading: state.status === 'loading' || state.status === 'creating',
    isAwaitingSignature: state.status === 'awaiting_signature',
    hasError: state.status === 'error',
    error: state.error,
    railgunAddress: state.railgunAddress,
    createWallet,
    disconnect,
  }), [state, createWallet, disconnect]);
}

/**
 * Simplified hook that just tracks wallet ready state
 */
export function useIsWalletReady(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToWalletState((state) => {
      setIsReady(state.status === 'ready');
    });

    return unsubscribe;
  }, []);

  return isReady;
}

/**
 * Hook to get the RAILGUN address
 */
export function useRailgunAddress(): string | undefined {
  const [address, setAddress] = useState<string | undefined>();

  useEffect(() => {
    const unsubscribe = subscribeToWalletState((state) => {
      setAddress(state.railgunAddress);
    });

    return unsubscribe;
  }, []);

  return address;
}
