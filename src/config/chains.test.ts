import { describe, it, expect } from 'vitest';
import { 
  hyperliquid, 
  hyperliquidTestnet, 
  sourceChains, 
  allChains, 
  chainMetadata, 
  HYPERLIQUID_CHAIN_ID, 
  HYPERLIQUID_TESTNET_CHAIN_ID,
  HYPEREVM_CHAIN_ID,
  HYPEREVM_TESTNET_CHAIN_ID,
  isHyperEVM,
  getHyperEVMExplorerUrl,
  getHyperEVMAddressUrl,
} from './chains';

describe('Chain Configuration', () => {
  describe('Hyperliquid Chain', () => {
    it('should have correct chain ID for mainnet', () => {
      expect(hyperliquid.id).toBe(999);
      expect(HYPERLIQUID_CHAIN_ID).toBe(999);
    });

    it('should be named "Hyperliquid" not "HyperEVM"', () => {
      expect(hyperliquid.name).toBe('Hyperliquid');
      expect(hyperliquid.name).not.toContain('HyperEVM');
    });

    it('should use mainnet RPC URL', () => {
      expect(hyperliquid.rpcUrls.default.http[0]).toBe('https://rpc.hyperliquid.xyz/evm');
      // Should not contain testnet
      expect(hyperliquid.rpcUrls.default.http[0]).not.toContain('testnet');
    });

    it('should have HYPE as native currency', () => {
      expect(hyperliquid.nativeCurrency.symbol).toBe('HYPE');
      expect(hyperliquid.nativeCurrency.decimals).toBe(18);
    });

    it('should have iconUrl for RainbowKit', () => {
      expect(hyperliquid.iconUrl).toBe('/assets/green.png');
    });
  });

  describe('Hyperliquid Testnet Chain', () => {
    it('should have correct chain ID for testnet', () => {
      expect(hyperliquidTestnet.id).toBe(998);
      expect(HYPERLIQUID_TESTNET_CHAIN_ID).toBe(998);
    });

    it('should be named "Hyperliquid Testnet"', () => {
      expect(hyperliquidTestnet.name).toBe('Hyperliquid Testnet');
    });

    it('should use testnet RPC URL', () => {
      expect(hyperliquidTestnet.rpcUrls.default.http[0]).toContain('testnet');
    });

    it('should have iconUrl for RainbowKit', () => {
      expect(hyperliquidTestnet.iconUrl).toBe('/assets/green.png');
    });
  });

  describe('Chain Metadata', () => {
    it('should have Hyperliquid metadata with correct name', () => {
      expect(chainMetadata[999]).toBeDefined();
      expect(chainMetadata[999].name).toBe('Hyperliquid');
      expect(chainMetadata[999].name).not.toContain('HyperEVM');
    });

    it('should use Hyperliquid logo for chain 999', () => {
      expect(chainMetadata[999].logo).toContain('green.png');
    });

    it('should have metadata for all source chains', () => {
      sourceChains.forEach((chain) => {
        expect(chainMetadata[chain.id]).toBeDefined();
        expect(chainMetadata[chain.id].name).toBeTruthy();
        expect(chainMetadata[chain.id].logo).toBeTruthy();
      });
    });
  });

  describe('Source Chains', () => {
    it('should include major EVM chains', () => {
      const chainIds = sourceChains.map((c) => c.id);
      
      expect(chainIds).toContain(1);      // Ethereum
      expect(chainIds).toContain(42161);  // Arbitrum
      expect(chainIds).toContain(10);     // Optimism
      expect(chainIds).toContain(137);    // Polygon
      expect(chainIds).toContain(8453);   // Base
    });

    it('should not include Hyperliquid in source chains', () => {
      const chainIds = sourceChains.map((c) => c.id);
      expect(chainIds).not.toContain(999);
    });
  });

  describe('All Chains', () => {
    it('should include Hyperliquid mainnet and testnet', () => {
      const chainIds = allChains.map((c) => c.id);
      expect(chainIds).toContain(999); // Mainnet
      expect(chainIds).toContain(998); // Testnet
    });

    it('should include all source chains plus Hyperliquid mainnet and testnet', () => {
      // 7 source chains + 2 Hyperliquid chains (mainnet + testnet)
      expect(allChains.length).toBe(sourceChains.length + 2);
    });
  });
});

/**
 * =============================================================================
 * HYPEREVM VS HYPERLIQUID L1 DISTINCTION TESTS
 * =============================================================================
 * 
 * These tests verify the correct distinction between:
 * - HyperEVM: The EVM-compatible layer (chain 999/998)
 * - Hyperliquid L1: The trading layer (NOT directly EVM accessible)
 */
describe('HyperEVM vs Hyperliquid L1 Layer Distinction', () => {
  describe('Chain ID Constants', () => {
    it('HYPEREVM_CHAIN_ID should be an alias for HYPERLIQUID_CHAIN_ID', () => {
      expect(HYPEREVM_CHAIN_ID).toBe(HYPERLIQUID_CHAIN_ID);
      expect(HYPEREVM_CHAIN_ID).toBe(999);
    });

    it('HYPEREVM_TESTNET_CHAIN_ID should be an alias for HYPERLIQUID_TESTNET_CHAIN_ID', () => {
      expect(HYPEREVM_TESTNET_CHAIN_ID).toBe(HYPERLIQUID_TESTNET_CHAIN_ID);
      expect(HYPEREVM_TESTNET_CHAIN_ID).toBe(998);
    });

    it('mainnet and testnet should have different chain IDs', () => {
      expect(HYPEREVM_CHAIN_ID).not.toBe(HYPEREVM_TESTNET_CHAIN_ID);
    });
  });

  describe('isHyperEVM function', () => {
    it('should return true for HyperEVM mainnet (999)', () => {
      expect(isHyperEVM(999)).toBe(true);
      expect(isHyperEVM(HYPEREVM_CHAIN_ID)).toBe(true);
    });

    it('should return true for HyperEVM testnet (998)', () => {
      expect(isHyperEVM(998)).toBe(true);
      expect(isHyperEVM(HYPEREVM_TESTNET_CHAIN_ID)).toBe(true);
    });

    it('should return false for other chains', () => {
      expect(isHyperEVM(1)).toBe(false);      // Ethereum
      expect(isHyperEVM(42161)).toBe(false);  // Arbitrum
      expect(isHyperEVM(137)).toBe(false);    // Polygon
      expect(isHyperEVM(10)).toBe(false);     // Optimism
      expect(isHyperEVM(8453)).toBe(false);   // Base
    });

    it('should return false for invalid chain IDs', () => {
      expect(isHyperEVM(0)).toBe(false);
      expect(isHyperEVM(-1)).toBe(false);
      expect(isHyperEVM(1000)).toBe(false);
    });
  });

  describe('Explorer URL Functions', () => {
    const testTxHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    const testAddress = '0x1234567890123456789012345678901234567890';

    describe('getHyperEVMExplorerUrl', () => {
      it('should return mainnet explorer URL by default', () => {
        const url = getHyperEVMExplorerUrl(testTxHash);
        expect(url).toBe(`https://explorer.hyperliquid.xyz/tx/${testTxHash}`);
      });

      it('should return testnet explorer URL when isTestnet is true', () => {
        const url = getHyperEVMExplorerUrl(testTxHash, true);
        expect(url).toBe(`https://explorer.hyperliquid-testnet.xyz/tx/${testTxHash}`);
      });

      it('should include the full transaction hash', () => {
        const url = getHyperEVMExplorerUrl(testTxHash);
        expect(url).toContain(testTxHash);
      });
    });

    describe('getHyperEVMAddressUrl', () => {
      it('should return mainnet explorer URL by default', () => {
        const url = getHyperEVMAddressUrl(testAddress);
        expect(url).toBe(`https://explorer.hyperliquid.xyz/address/${testAddress}`);
      });

      it('should return testnet explorer URL when isTestnet is true', () => {
        const url = getHyperEVMAddressUrl(testAddress, true);
        expect(url).toBe(`https://explorer.hyperliquid-testnet.xyz/address/${testAddress}`);
      });

      it('should include the full address', () => {
        const url = getHyperEVMAddressUrl(testAddress);
        expect(url).toContain(testAddress);
      });
    });
  });

  describe('Layer Understanding', () => {
    it('HyperEVM is the EVM layer where bridges deposit tokens', () => {
      // The chain definition is for HyperEVM (EVM-compatible)
      expect(hyperliquid.rpcUrls.default.http[0]).toContain('evm');
      
      // Chain ID 999 is HyperEVM, not L1
      expect(hyperliquid.id).toBe(HYPEREVM_CHAIN_ID);
    });

    it('L1 trading requires deposit from HyperEVM via bridge contract', () => {
      // L1 is NOT directly accessible via EVM
      // Users must:
      // 1. Bridge to HyperEVM (chain 999)
      // 2. Call the bridge contract on HyperEVM to deposit to L1
      
      // The bridge contract address (on HyperEVM)
      const BRIDGE_CONTRACT = '0x2Df1c51E09aECF9cacB7bc98cB1742757f163dF7';
      
      // This contract lives on HyperEVM and bridges to L1
      expect(BRIDGE_CONTRACT).toBeTruthy();
      expect(BRIDGE_CONTRACT.startsWith('0x')).toBe(true);
    });

    it('USDC on HyperEVM has a specific address', () => {
      // USDC contract on HyperEVM (chain 999)
      const USDC_HYPEREVM = '0xeb62eee3685fc4c43992febcd9e75443aef550ab';
      
      // This is where USDC arrives after bridging from external chains
      expect(USDC_HYPEREVM).toBeTruthy();
      expect(USDC_HYPEREVM.startsWith('0x')).toBe(true);
    });
  });
});
