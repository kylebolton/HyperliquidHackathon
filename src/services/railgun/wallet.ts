/**
 * RAILGUN Wallet Management
 * 
 * This module handles the creation and management of RAILGUN private wallets.
 * Wallets are derived deterministically from a signed message using the user's
 * Ethereum wallet, ensuring the same RAILGUN wallet is recovered across sessions.
 */

import {
  createRailgunWallet,
  loadWalletByID,
  unloadWalletByID,
  getWalletShareableViewingKey,
  refreshBalances,
  rescanFullUTXOMerkletreesAndWallets,
} from '@railgun-community/wallet';
import {
  isDefined,
  TXIDVersion,
} from '@railgun-community/shared-models';
import { ethers } from 'ethers';
import type { WalletState, WalletStatus, RailgunChainId } from './types';
import { getNetworkName, RAILGUN_SUPPORTED_CHAIN_IDS } from './types';
import { isEngineReady } from './engine';

// Wallet singleton state
let walletState: WalletState = {
  status: 'none',
};

// Callbacks for state updates
type WalletStateCallback = (state: WalletState) => void;
const stateCallbacks: Set<WalletStateCallback> = new Set();

/**
 * Subscribe to wallet state changes
 */
export function subscribeToWalletState(callback: WalletStateCallback): () => void {
  stateCallbacks.add(callback);
  // Immediately call with current state
  callback(walletState);
  return () => {
    stateCallbacks.delete(callback);
  };
}

/**
 * Update wallet state and notify subscribers
 */
function updateWalletState(updates: Partial<WalletState>): void {
  walletState = { ...walletState, ...updates };
  stateCallbacks.forEach(callback => callback(walletState));
}

/**
 * Get current wallet state
 */
export function getWalletState(): WalletState {
  return walletState;
}

/**
 * Get wallet status
 */
export function getWalletStatus(): WalletStatus {
  return walletState.status;
}

/**
 * Check if wallet is ready
 */
export function isWalletReady(): boolean {
  return walletState.status === 'ready' && isDefined(walletState.walletId);
}

/**
 * Get the current wallet ID
 */
export function getWalletId(): string | undefined {
  return walletState.walletId;
}

/**
 * Get the RAILGUN address (0zk format)
 */
export function getRailgunAddress(): string | undefined {
  return walletState.railgunAddress;
}

/**
 * Message to sign for deterministic wallet derivation
 */
const WALLET_DERIVATION_MESSAGE = `Sign this message to create your private RAILGUN wallet for Liquyn.

This does not cost any gas and will not submit any transactions.

Your RAILGUN wallet will be derived deterministically from this signature,
meaning you'll always get the same private wallet when signing with this address.`;

/**
 * Storage key for persisting wallet ID
 */
const WALLET_ID_STORAGE_KEY = 'liquyn_railgun_wallet_id';

/**
 * Get stored wallet ID for an address
 */
function getStoredWalletId(address: string): string | null {
  try {
    const stored = localStorage.getItem(`${WALLET_ID_STORAGE_KEY}_${address.toLowerCase()}`);
    return stored;
  } catch {
    return null;
  }
}

/**
 * Store wallet ID for an address
 */
function storeWalletId(address: string, walletId: string): void {
  try {
    localStorage.setItem(`${WALLET_ID_STORAGE_KEY}_${address.toLowerCase()}`, walletId);
  } catch {
    console.warn('[RAILGUN] Failed to store wallet ID');
  }
}

/**
 * Clear stored wallet ID for an address
 */
function clearStoredWalletId(address: string): void {
  try {
    localStorage.removeItem(`${WALLET_ID_STORAGE_KEY}_${address.toLowerCase()}`);
  } catch {
    // Ignore errors
  }
}

/**
 * Derive a BIP-39 mnemonic from a signature
 * Uses the signature as entropy to generate a deterministic mnemonic
 */
function deriveMnemonicFromSignature(signature: string): string {
  // Hash the signature to get 256 bits of entropy
  const hash = ethers.keccak256(signature);
  
  // Use first 128 bits (16 bytes) for 12-word mnemonic
  const entropy = ethers.getBytes(hash).slice(0, 16);
  
  // Convert to mnemonic
  const mnemonic = ethers.Mnemonic.fromEntropy(entropy);
  
  return mnemonic.phrase;
}

/**
 * Derive encryption key from address for wallet encryption
 */
function deriveEncryptionKey(address: string): string {
  // Create a deterministic encryption key from the address
  const hash = ethers.keccak256(
    ethers.toUtf8Bytes(`liquyn_railgun_encryption_${address.toLowerCase()}`)
  );
  // Use 32 bytes as hex string
  return hash;
}

/**
 * Create or load a RAILGUN wallet from an Ethereum signer
 * 
 * @param signer - The ethers signer from the connected wallet
 * @param address - The Ethereum address
 * @returns The wallet ID if successful
 */
export async function createOrLoadRailgunWallet(
  signer: ethers.Signer,
  address: string
): Promise<string | null> {
  if (!isEngineReady()) {
    updateWalletState({
      status: 'error',
      error: 'RAILGUN engine not initialized',
    });
    return null;
  }

  // Check for existing wallet
  const existingWalletId = getStoredWalletId(address);
  if (existingWalletId) {
    const loaded = await loadExistingWallet(existingWalletId, address);
    if (loaded) {
      return existingWalletId;
    }
    // If loading failed, clear stored ID and create new wallet
    clearStoredWalletId(address);
  }

  // Need to create new wallet
  updateWalletState({ status: 'awaiting_signature' });

  try {
    // Request signature from user
    const signature = await signer.signMessage(WALLET_DERIVATION_MESSAGE);

    updateWalletState({ status: 'creating' });

    // Derive mnemonic from signature
    const mnemonic = deriveMnemonicFromSignature(signature);
    const encryptionKey = deriveEncryptionKey(address);

    // Create the RAILGUN wallet
    const walletInfo = await createRailgunWallet(
      encryptionKey,
      mnemonic,
      undefined, // creationBlockNumbers - will use defaults
    );

    if (!walletInfo) {
      throw new Error('Failed to create RAILGUN wallet');
    }

    const { id: walletId, railgunAddress } = walletInfo;

    // Store wallet ID for future sessions
    storeWalletId(address, walletId);

    // Update state
    updateWalletState({
      status: 'ready',
      walletId,
      railgunAddress,
      error: undefined,
    });

    console.log('[RAILGUN] Wallet created successfully');
    console.log('[RAILGUN] Address:', railgunAddress);

    // Start background balance scan
    startBackgroundScan(walletId);

    return walletId;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[RAILGUN] Wallet creation failed:', errorMessage);

    // Check if user rejected signature
    const isUserRejection = errorMessage.toLowerCase().includes('user rejected') ||
                           errorMessage.toLowerCase().includes('user denied');

    updateWalletState({
      status: 'error',
      error: isUserRejection ? 'Signature request rejected' : errorMessage,
    });

    return null;
  }
}

/**
 * Load an existing RAILGUN wallet by ID
 */
export async function loadExistingWallet(
  walletId: string,
  address: string
): Promise<boolean> {
  if (!isEngineReady()) {
    updateWalletState({
      status: 'error',
      error: 'RAILGUN engine not initialized',
    });
    return false;
  }

  updateWalletState({ status: 'loading' });

  try {
    const encryptionKey = deriveEncryptionKey(address);
    
    // Try to load the wallet
    const walletInfo = await loadWalletByID(encryptionKey, walletId, false);

    if (!walletInfo) {
      throw new Error('Wallet not found');
    }

    updateWalletState({
      status: 'ready',
      walletId: walletInfo.id,
      railgunAddress: walletInfo.railgunAddress,
      error: undefined,
    });

    console.log('[RAILGUN] Wallet loaded successfully');

    // Start background balance scan
    startBackgroundScan(walletId);

    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[RAILGUN] Failed to load wallet:', errorMessage);

    updateWalletState({
      status: 'none',
      error: undefined, // Don't show error, just need to create new wallet
    });

    return false;
  }
}

/**
 * Unload the current wallet
 */
export async function unloadWallet(): Promise<void> {
  const { walletId } = walletState;
  
  if (walletId) {
    try {
      await unloadWalletByID(walletId);
    } catch {
      // Ignore errors during unload
    }
  }

  updateWalletState({
    status: 'none',
    walletId: undefined,
    railgunAddress: undefined,
    error: undefined,
  });
}

/**
 * Start background scanning for wallet balances
 */
async function startBackgroundScan(walletId: string): Promise<void> {
  try {
    // Get all supported networks
    const networks = Object.values(RAILGUN_SUPPORTED_CHAIN_IDS).map(
      chainId => getNetworkName(chainId)
    );

    // Scan each network
    for (const networkName of networks) {
      try {
        // Trigger balance refresh for each network
        // API changed - uses chain object format
        await refreshBalances(
          { name: networkName } as any, // Chain
          [walletId], // Scan for this wallet
        );
      } catch (error) {
        console.warn(`[RAILGUN] Balance scan failed for ${networkName}:`, error);
      }
    }
  } catch (error) {
    console.warn('[RAILGUN] Background scan error:', error);
  }
}

/**
 * Force rescan merkletrees for the wallet
 */
export async function rescanWallet(): Promise<void> {
  const { walletId } = walletState;
  
  if (!walletId) {
    throw new Error('No wallet loaded');
  }

  try {
    // Get all supported networks
    const networks = Object.values(RAILGUN_SUPPORTED_CHAIN_IDS).map(
      chainId => getNetworkName(chainId)
    );

    for (const networkName of networks) {
      try {
        // Note: API changed - rescan takes chain and txidVersion
        await rescanFullUTXOMerkletreesAndWallets(
          { name: networkName } as any, // Chain object
          TXIDVersion.V2_PoseidonMerkle,
        );
      } catch (error) {
        console.warn(`[RAILGUN] Rescan failed for ${networkName}:`, error);
      }
    }
  } catch (error) {
    console.error('[RAILGUN] Wallet rescan failed:', error);
    throw error;
  }
}

/**
 * Get the shareable viewing key for the wallet
 * This allows others to view the wallet's balances without spending
 */
export async function getViewingKey(): Promise<string | null> {
  const { walletId } = walletState;
  
  if (!walletId) {
    return null;
  }

  try {
    const viewingKey = await getWalletShareableViewingKey(walletId);
    return viewingKey;
  } catch (error) {
    console.error('[RAILGUN] Failed to get viewing key:', error);
    return null;
  }
}

/**
 * Get RAILGUN smart wallet contract for a network
 */
export function getSmartWalletContract(_chainId: RailgunChainId): string | null {
  // Note: The SDK doesn't export getRailgunSmartWalletContractForNetwork
  // This would need to be looked up from NETWORK_CONFIG if needed
  return null;
}

/**
 * Reset wallet state (for testing/debugging)
 */
export function resetWalletState(): void {
  walletState = {
    status: 'none',
  };
  stateCallbacks.clear();
}
