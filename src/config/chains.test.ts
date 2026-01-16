import { describe, it, expect } from 'vitest';
import { hyperliquid, sourceChains, allChains, chainMetadata, HYPERLIQUID_CHAIN_ID } from './chains';

describe('Chain Configuration', () => {
  describe('Hyperliquid Chain', () => {
    it('should have correct chain ID for mainnet', () => {
      expect(hyperliquid.id).toBe(998);
      expect(HYPERLIQUID_CHAIN_ID).toBe(998);
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
  });

  describe('Chain Metadata', () => {
    it('should have Hyperliquid metadata with correct name', () => {
      expect(chainMetadata[998]).toBeDefined();
      expect(chainMetadata[998].name).toBe('Hyperliquid');
      expect(chainMetadata[998].name).not.toContain('HyperEVM');
    });

    it('should use Hyperliquid logo for chain 998', () => {
      expect(chainMetadata[998].logo).toContain('green.png');
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
      expect(chainIds).not.toContain(998);
    });
  });

  describe('All Chains', () => {
    it('should include Hyperliquid', () => {
      const chainIds = allChains.map((c) => c.id);
      expect(chainIds).toContain(998);
    });

    it('should include all source chains plus Hyperliquid', () => {
      expect(allChains.length).toBe(sourceChains.length + 1);
    });
  });
});
