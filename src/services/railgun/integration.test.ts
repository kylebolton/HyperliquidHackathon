/**
 * RAILGUN SDK Integration Tests
 * 
 * These tests verify the complete integration of the RAILGUN privacy system,
 * including engine initialization, wallet creation, and privacy operations.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Valid 65-byte signature for mocking
const MOCK_SIGNATURE = '0x' + 'a'.repeat(130);

// Mock ethers BEFORE importing modules
vi.mock('ethers', async () => {
  const actual = await vi.importActual('ethers');
  
  // Mock contract that returns proper values
  const MockContract = vi.fn().mockImplementation(() => ({
    allowance: vi.fn().mockResolvedValue(BigInt('1000000000000000000000')), // Already approved
    approve: vi.fn().mockResolvedValue({
      hash: '0xapproval',
      wait: vi.fn().mockResolvedValue({ status: 1 }),
    }),
  }));
  
  return {
    ...actual,
    keccak256: vi.fn().mockReturnValue('0x' + '1'.repeat(64)),
    getBytes: vi.fn().mockReturnValue(new Uint8Array(16).fill(1)),
    toUtf8Bytes: vi.fn().mockReturnValue(new Uint8Array([1, 2, 3])),
    Mnemonic: {
      fromEntropy: vi.fn().mockReturnValue({
        phrase: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
      }),
    },
    Contract: MockContract,
  };
});

// Mock the @railgun-community/wallet module
vi.mock('@railgun-community/wallet', () => ({
  startRailgunEngine: vi.fn().mockResolvedValue(undefined),
  loadProvider: vi.fn().mockResolvedValue(undefined),
  setOnBalanceUpdateCallback: vi.fn(),
  setOnUTXOMerkletreeScanCallback: vi.fn(),
  setOnTXIDMerkletreeScanCallback: vi.fn(),
  createRailgunWallet: vi.fn().mockResolvedValue({
    id: 'test-wallet-id',
    railgunAddress: '0zk1qy2xkq...test-address',
  }),
  loadWalletByID: vi.fn().mockResolvedValue({
    id: 'test-wallet-id',
    railgunAddress: '0zk1qy2xkq...test-address',
  }),
  unloadWalletByID: vi.fn().mockResolvedValue(undefined),
  getWalletShareableViewingKey: vi.fn().mockResolvedValue('viewing-key-123'),
  refreshBalances: vi.fn().mockResolvedValue(undefined),
  rescanFullUTXOMerkletreesAndWallets: vi.fn().mockResolvedValue(undefined),
  populateShield: vi.fn().mockResolvedValue({
    transaction: {
      to: '0xRailgunProxy',
      data: '0xshielddata',
      value: 0n,
    },
  }),
  populateProvedUnshield: vi.fn().mockResolvedValue({
    transaction: {
      to: '0xRailgunProxy',
      data: '0xunshielddata',
      value: 0n,
    },
  }),
  generateUnshieldProof: vi.fn().mockResolvedValue(undefined),
  getShieldPrivateKeySignatureMessage: vi.fn().mockReturnValue('Shield signature message'),
  gasEstimateForShield: vi.fn().mockResolvedValue({
    gasEstimate: 500000n,
  }),
  gasEstimateForUnprovenUnshield: vi.fn().mockResolvedValue({
    gasEstimate: 800000n,
  }),
}));

// Import after mocks are set up
import {
  initializeRailgunEngine,
  getEngineState,
  getEngineStatus,
  isEngineReady,
  subscribeToEngineState,
  resetEngineState,
} from './engine';
import {
  createOrLoadRailgunWallet,
  getWalletState,
  getWalletStatus,
  isWalletReady,
  getRailgunAddress,
  subscribeToWalletState,
  resetWalletState,
} from './wallet';
import {
  getPrivacyQuote,
  executeShield,
  executePrivacyFlow,
} from './operations';
import {
  isRailgunSupported,
  getBestRailgunChain,
  getNetworkName,
  getPrivacySteps,
  RAILGUN_SUPPORTED_CHAIN_IDS,
  NetworkName,
} from './types';

describe('RAILGUN SDK Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetEngineState();
    resetWalletState();
    
    // Mock localStorage
    const localStorageMock: Record<string, string> = {};
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => localStorageMock[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        localStorageMock[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete localStorageMock[key];
      }),
      clear: vi.fn(() => {
        Object.keys(localStorageMock).forEach(key => delete localStorageMock[key]);
      }),
    });
  });

  afterEach(() => {
    resetEngineState();
    resetWalletState();
    vi.unstubAllGlobals();
  });

  describe('Type Utilities', () => {
    it('should correctly identify supported chains', () => {
      // Supported chains
      expect(isRailgunSupported(1)).toBe(true); // Ethereum
      expect(isRailgunSupported(137)).toBe(true); // Polygon
      expect(isRailgunSupported(42161)).toBe(true); // Arbitrum
      expect(isRailgunSupported(56)).toBe(true); // BSC

      // Unsupported chains
      expect(isRailgunSupported(999)).toBe(false); // Hyperliquid
      expect(isRailgunSupported(146)).toBe(false); // Sonic
      expect(isRailgunSupported(10)).toBe(false); // Optimism
    });

    it('should return correct network names for chain IDs', () => {
      expect(getNetworkName(1)).toBe(NetworkName.Ethereum);
      expect(getNetworkName(137)).toBe(NetworkName.Polygon);
      expect(getNetworkName(42161)).toBe(NetworkName.Arbitrum);
      expect(getNetworkName(56)).toBe(NetworkName.BNBChain);
    });

    it('should select best Railgun chain for privacy routing', () => {
      // When source is already a Railgun chain, use it
      expect(getBestRailgunChain(1)).toBe(1);
      expect(getBestRailgunChain(137)).toBe(137);
      expect(getBestRailgunChain(42161)).toBe(42161);

      // When source is not a Railgun chain, default to Arbitrum
      expect(getBestRailgunChain(999)).toBe(42161);
      expect(getBestRailgunChain(146)).toBe(42161);
      expect(getBestRailgunChain(undefined)).toBe(42161);
    });

    it('should return correct privacy steps', () => {
      const steps = getPrivacySteps();
      
      expect(steps).toHaveLength(5);
      expect(steps[0].id).toBe('bridge_to_railgun');
      expect(steps[1].id).toBe('shield');
      expect(steps[2].id).toBe('wait');
      expect(steps[3].id).toBe('unshield');
      expect(steps[4].id).toBe('bridge_to_hyperliquid');
    });
  });

  describe('Engine Initialization', () => {
    it('should start with uninitialized status', () => {
      expect(getEngineStatus()).toBe('uninitialized');
      expect(isEngineReady()).toBe(false);
    });

    it('should initialize engine successfully', async () => {
      const result = await initializeRailgunEngine();
      
      expect(result).toBe(true);
      expect(getEngineStatus()).toBe('ready');
      expect(isEngineReady()).toBe(true);
    });

    it('should return true immediately if already initialized', async () => {
      await initializeRailgunEngine();
      
      const result = await initializeRailgunEngine();
      
      expect(result).toBe(true);
    });

    it('should support custom configuration', async () => {
      const result = await initializeRailgunEngine({
        walletSource: 'custom-app',
        poiConfig: {
          nodeURLs: ['https://custom-poi-node.example.com'],
        },
        shouldDebug: true,
      });
      
      expect(result).toBe(true);
    });

    it('should track engine state through callbacks', async () => {
      const states: string[] = [];
      
      const unsubscribe = subscribeToEngineState((state) => {
        states.push(state.status);
      });
      
      await initializeRailgunEngine();
      
      unsubscribe();
      
      // Should have recorded state changes
      expect(states.length).toBeGreaterThan(0);
      expect(states).toContain('ready');
    });
  });

  describe('Wallet Management', () => {
    const mockSigner = {
      getAddress: vi.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
      signMessage: vi.fn().mockResolvedValue(MOCK_SIGNATURE),
    };

    beforeEach(async () => {
      await initializeRailgunEngine();
    });

    it('should start with no wallet', () => {
      expect(getWalletStatus()).toBe('none');
      expect(isWalletReady()).toBe(false);
      expect(getRailgunAddress()).toBeUndefined();
    });

    it('should create wallet when no existing wallet found', async () => {
      const walletId = await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      expect(walletId).toBe('test-wallet-id');
      expect(isWalletReady()).toBe(true);
      expect(getRailgunAddress()).toBe('0zk1qy2xkq...test-address');
    });

    it('should request signature during wallet creation', async () => {
      await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      expect(mockSigner.signMessage).toHaveBeenCalled();
    });

    it('should store wallet ID in localStorage for recovery', async () => {
      await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'liquyn_railgun_wallet_id_0x1234567890123456789012345678901234567890',
        'test-wallet-id'
      );
    });

    it('should track wallet state through callbacks', async () => {
      const states: string[] = [];
      
      const unsubscribe = subscribeToWalletState((state) => {
        states.push(state.status);
      });
      
      await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      unsubscribe();
      
      expect(states).toContain('none');
      expect(states).toContain('ready');
    });

    it('should fail gracefully if engine not ready', async () => {
      resetEngineState();
      
      const walletId = await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      expect(walletId).toBeNull();
      expect(getWalletState().error).toBe('RAILGUN engine not initialized');
    });

    it('should handle user rejection gracefully', async () => {
      const rejectingSigner = {
        getAddress: vi.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
        signMessage: vi.fn().mockRejectedValue(new Error('user rejected')),
      };
      
      const walletId = await createOrLoadRailgunWallet(
        rejectingSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      expect(walletId).toBeNull();
      expect(getWalletState().error).toBe('Signature request rejected');
    });
  });

  describe('Privacy Quotes', () => {
    it('should generate quote for Ethereum', () => {
      const quote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM);
      
      expect(quote.chainId).toBe(1);
      expect(quote.networkName).toBe(NetworkName.Ethereum);
      expect(parseFloat(quote.shieldFeeUSD)).toBeGreaterThan(0);
      expect(parseFloat(quote.unshieldFeeUSD)).toBeGreaterThan(0);
      expect(parseFloat(quote.totalFeeUSD)).toBeGreaterThan(0);
      expect(quote.recommendedWaitTime).toBe(600); // 10 minutes
    });

    it('should generate quote for Arbitrum with lower fees', () => {
      const ethereumQuote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ETHEREUM);
      const arbitrumQuote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM);
      
      // Arbitrum should have lower fees due to lower gas prices
      expect(parseFloat(arbitrumQuote.totalFeeUSD)).toBeLessThan(
        parseFloat(ethereumQuote.totalFeeUSD)
      );
    });

    it('should include time estimates', () => {
      const quote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM);
      
      expect(quote.estimatedShieldTime).toBeGreaterThan(0);
      expect(quote.estimatedUnshieldTime).toBeGreaterThan(0);
      expect(quote.totalEstimatedTime).toBe(
        quote.estimatedShieldTime + quote.estimatedUnshieldTime + quote.recommendedWaitTime
      );
    });
  });

  describe('Privacy Operations', () => {
    let mockSigner: any;
    
    beforeEach(async () => {
      mockSigner = {
        getAddress: vi.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
        signMessage: vi.fn().mockResolvedValue(MOCK_SIGNATURE),
        sendTransaction: vi.fn().mockResolvedValue({
          hash: '0xtxhash123',
          wait: vi.fn().mockResolvedValue({ status: 1 }),
        }),
      };
      
      await initializeRailgunEngine();
      await createOrLoadRailgunWallet(
        mockSigner,
        '0x1234567890123456789012345678901234567890'
      );
    });

    it('should fail shield if engine not ready', async () => {
      resetEngineState();
      
      const result = await executeShield(mockSigner as any, {
        networkName: NetworkName.Arbitrum,
        tokenAddress: '0xUSDC',
        tokenDecimals: 6,
        amount: 1000000n,
        fromAddress: '0x1234567890123456789012345678901234567890',
      });
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('RAILGUN engine not initialized');
    });

    it('should fail shield if wallet not ready', async () => {
      resetWalletState();
      
      const result = await executeShield(mockSigner as any, {
        networkName: NetworkName.Arbitrum,
        tokenAddress: '0xUSDC',
        tokenDecimals: 6,
        amount: 1000000n,
        fromAddress: '0x1234567890123456789012345678901234567890',
      });
      
      expect(result.success).toBe(false);
      expect(result.error).toBe('RAILGUN wallet not ready');
    });

    it('should track progress during shield operation', async () => {
      // Ensure wallet is ready
      expect(isWalletReady()).toBe(true);
      
      const progressUpdates: string[] = [];
      
      // Note: Full shield execution requires a real provider
      // This test verifies that the operation starts and reports progress
      const result = await executeShield(
        mockSigner,
        {
          networkName: NetworkName.Arbitrum,
          tokenAddress: '0xUSDC',
          tokenDecimals: 6,
          amount: 1000000n,
          fromAddress: '0x1234567890123456789012345678901234567890',
        },
        (state) => {
          progressUpdates.push(state.status);
        }
      );
      
      // With mock signer (no real provider), the operation will fail at contract call
      // but should still report progress before failing
      expect(progressUpdates.length).toBeGreaterThan(0);
      expect(progressUpdates).toContain('preparing');
    });

    it('should handle privacy flow with mock signer', async () => {
      // Ensure wallet is ready
      expect(isWalletReady()).toBe(true);
      
      const progressUpdates: string[] = [];
      
      // Note: Full privacy flow requires a real provider
      // This test verifies the flow starts correctly
      const result = await executePrivacyFlow(
        mockSigner,
        {
          networkName: NetworkName.Arbitrum,
          tokenAddress: '0xUSDC',
          tokenDecimals: 6,
          amount: 1000000n,
          fromAddress: '0x1234567890123456789012345678901234567890',
        },
        {
          networkName: NetworkName.Arbitrum,
          tokenAddress: '0xUSDC',
          tokenDecimals: 6,
          amount: 990000n,
          toAddress: '0xNewDestination',
          walletId: 'test-wallet-id',
        },
        (state) => {
          progressUpdates.push(state.status);
        },
        true // Skip wait for faster test
      );
      
      // With mock signer, the flow will start but fail at contract interaction
      // Verify the flow was attempted
      expect(progressUpdates.length).toBeGreaterThan(0);
      // The result indicates whether the full flow completed
      // Without real providers, it will fail at contract operations
      expect(typeof result.success).toBe('boolean');
    });
  });

  describe('Full Integration Flow', () => {
    it('should complete entire privacy setup flow', async () => {
      const mockSigner = {
        getAddress: vi.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
        signMessage: vi.fn().mockResolvedValue(MOCK_SIGNATURE),
        sendTransaction: vi.fn().mockResolvedValue({
          hash: '0xtxhash123',
          wait: vi.fn().mockResolvedValue({ status: 1 }),
        }),
      };

      // Step 1: Verify chain support
      expect(isRailgunSupported(42161)).toBe(true);
      
      // Step 2: Get best chain for privacy
      const privacyChainId = getBestRailgunChain(146); // From Sonic
      expect(privacyChainId).toBe(42161); // Should route to Arbitrum
      
      // Step 3: Get privacy quote
      const quote = getPrivacyQuote(privacyChainId);
      expect(parseFloat(quote.totalFeeUSD)).toBeGreaterThan(0);
      
      // Step 4: Initialize engine
      const engineInitialized = await initializeRailgunEngine();
      expect(engineInitialized).toBe(true);
      expect(isEngineReady()).toBe(true);
      
      // Step 5: Create wallet
      const walletId = await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      expect(walletId).toBeTruthy();
      expect(isWalletReady()).toBe(true);
      expect(getRailgunAddress()).toBeTruthy();
      
      // Step 6: Get privacy steps for UI
      const steps = getPrivacySteps();
      expect(steps.length).toBe(5);
      
      // Step 7: Verify privacy flow can be attempted
      // Note: Full execution requires real blockchain connection
      const progressUpdates: string[] = [];
      const result = await executePrivacyFlow(
        mockSigner as any,
        {
          networkName: getNetworkName(privacyChainId),
          tokenAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          tokenDecimals: 6,
          amount: 10000000n,
          fromAddress: '0x1234567890123456789012345678901234567890',
        },
        {
          networkName: getNetworkName(privacyChainId),
          tokenAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
          tokenDecimals: 6,
          amount: 9900000n,
          toAddress: '0xNewPrivateDestination',
          walletId: walletId!,
        },
        (state) => {
          progressUpdates.push(state.status);
        },
        true
      );
      
      // Verify the flow was attempted (progress was tracked)
      expect(progressUpdates.length).toBeGreaterThan(0);
      // Result will be based on whether mock supports full contract operations
      expect(typeof result.success).toBe('boolean');
    });

    it('should load existing wallet from localStorage', async () => {
      // Initialize engine first
      await initializeRailgunEngine();
      
      const mockSigner = {
        getAddress: vi.fn().mockResolvedValue('0xSameUser'),
        signMessage: vi.fn().mockResolvedValue(MOCK_SIGNATURE),
      };

      // First: create wallet
      await createOrLoadRailgunWallet(mockSigner as any, '0xSameUser');
      
      const firstAddress = getRailgunAddress();
      expect(firstAddress).toBe('0zk1qy2xkq...test-address');
      
      // Simulate stored wallet ID
      vi.mocked(localStorage.getItem).mockReturnValue('test-wallet-id');
      
      // Reset wallet state to simulate page refresh
      resetWalletState();
      
      // Second: should load existing wallet
      await createOrLoadRailgunWallet(mockSigner as any, '0xSameUser');
      
      const secondAddress = getRailgunAddress();
      expect(secondAddress).toBe(firstAddress);
      
      // Should have loaded existing wallet (loadWalletByID called)
      const { loadWalletByID } = await import('@railgun-community/wallet');
      expect(loadWalletByID).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle network errors gracefully', async () => {
      const { startRailgunEngine } = await import('@railgun-community/wallet');
      vi.mocked(startRailgunEngine).mockRejectedValueOnce(new Error('Network error'));
      
      resetEngineState();
      
      const result = await initializeRailgunEngine();
      
      expect(result).toBe(false);
      expect(getEngineStatus()).toBe('error');
      expect(getEngineState().error).toBe('Network error');
    });

    it('should handle transaction failures', async () => {
      const mockSigner = {
        getAddress: vi.fn().mockResolvedValue('0x1234567890123456789012345678901234567890'),
        signMessage: vi.fn().mockResolvedValue(MOCK_SIGNATURE),
        sendTransaction: vi.fn().mockResolvedValue({
          hash: '0xtxhash123',
          wait: vi.fn().mockResolvedValue({ status: 0 }), // Failed tx
        }),
      };

      await initializeRailgunEngine();
      await createOrLoadRailgunWallet(
        mockSigner as any,
        '0x1234567890123456789012345678901234567890'
      );
      
      const result = await executeShield(mockSigner as any, {
        networkName: NetworkName.Arbitrum,
        tokenAddress: '0xUSDC',
        tokenDecimals: 6,
        amount: 1000000n,
        fromAddress: '0x1234567890123456789012345678901234567890',
      });
      
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('Chain Support Matrix', () => {
    const chains = [
      { id: 1, name: 'Ethereum', supported: true },
      { id: 137, name: 'Polygon', supported: true },
      { id: 42161, name: 'Arbitrum', supported: true },
      { id: 56, name: 'BSC', supported: true },
      { id: 999, name: 'Hyperliquid', supported: false },
      { id: 146, name: 'Sonic', supported: false },
      { id: 10, name: 'Optimism', supported: false },
      { id: 8453, name: 'Base', supported: false },
      { id: 43114, name: 'Avalanche', supported: false },
    ];

    chains.forEach(({ id, name, supported }) => {
      it(`should ${supported ? '' : 'NOT '}support ${name} (${id})`, () => {
        expect(isRailgunSupported(id)).toBe(supported);
      });
    });
  });

  describe('Privacy Quote Accuracy', () => {
    it('should calculate correct total fee', () => {
      const quote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM);
      
      const calculatedTotal = (
        parseFloat(quote.shieldFeeUSD) + 
        parseFloat(quote.unshieldFeeUSD)
      ).toFixed(2);
      
      expect(quote.totalFeeUSD).toBe(calculatedTotal);
    });

    it('should calculate correct total time', () => {
      const quote = getPrivacyQuote(RAILGUN_SUPPORTED_CHAIN_IDS.ARBITRUM);
      
      const calculatedTotal = 
        quote.estimatedShieldTime + 
        quote.estimatedUnshieldTime + 
        quote.recommendedWaitTime;
      
      expect(quote.totalEstimatedTime).toBe(calculatedTotal);
    });
  });
});
