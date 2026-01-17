import { defineChain, type Chain } from 'viem';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';

/**
 * =============================================================================
 * HYPERLIQUID LAYER DISTINCTION
 * =============================================================================
 * 
 * Hyperliquid has TWO distinct layers that should not be confused:
 * 
 * 1. HyperEVM (Chain ID 999/998)
 *    - EVM-compatible execution layer
 *    - Where LI.FI and other bridges deposit tokens
 *    - Has standard EVM addresses (0x...)
 *    - Transactions visible on explorer.hyperliquid.xyz
 *    - This is where USDC arrives when bridging from external chains
 * 
 * 2. Hyperliquid L1 (Trading Layer)
 *    - The actual perps/spot trading platform
 *    - NOT directly EVM accessible
 *    - Requires deposit via bridge contract on HyperEVM
 *    - Where trading actually happens
 * 
 * FLOW: External Chain -> HyperEVM (bridge) -> Hyperliquid L1 (deposit contract)
 * =============================================================================
 */

// HyperEVM Chain IDs (the EVM-compatible layer)
// Note: This is where external bridges deposit tokens, NOT the L1 trading layer
export const HYPERLIQUID_CHAIN_ID = 999;  // HyperEVM Mainnet
export const HYPERLIQUID_TESTNET_CHAIN_ID = 998; // HyperEVM Testnet

// Alias for clarity - HyperEVM is the EVM layer, distinct from L1
export const HYPEREVM_CHAIN_ID = HYPERLIQUID_CHAIN_ID;
export const HYPEREVM_TESTNET_CHAIN_ID = HYPERLIQUID_TESTNET_CHAIN_ID;

// Sonic Chain ID
export const SONIC_CHAIN_ID = 146;

// Sonic Chain Definition with RainbowKit icon
export const sonic = {
  ...defineChain({
    id: SONIC_CHAIN_ID,
    name: 'Sonic',
    nativeCurrency: {
      name: 'Sonic',
      symbol: 'S',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.soniclabs.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Sonic Explorer',
        url: 'https://sonicscan.org',
      },
    },
  }),
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png',
  iconBackground: '#0a0a0a',
} as Chain & { iconUrl: string; iconBackground: string };

// HyperEVM Chain Definition (Mainnet) with RainbowKit icon
// This is the EVM layer - tokens bridged here need to be deposited to L1 for trading
export const hyperliquid = {
  ...defineChain({
    id: HYPERLIQUID_CHAIN_ID,
    name: 'Hyperliquid',
    nativeCurrency: {
      name: 'HYPE',
      symbol: 'HYPE',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.hyperliquid.xyz/evm'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Hyperliquid Explorer',
        url: 'https://explorer.hyperliquid.xyz',
      },
    },
  }),
  iconUrl: '/assets/green.png',
  iconBackground: '#0a0a0a',
} as Chain & { iconUrl: string; iconBackground: string };

// HyperEVM Testnet Chain Definition with RainbowKit icon
// This is the EVM layer - tokens bridged here need to be deposited to L1 for trading
export const hyperliquidTestnet = {
  ...defineChain({
    id: HYPERLIQUID_TESTNET_CHAIN_ID,
    name: 'Hyperliquid Testnet',
    nativeCurrency: {
      name: 'HYPE',
      symbol: 'HYPE',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Hyperliquid Testnet Explorer',
        url: 'https://explorer.hyperliquid-testnet.xyz',
      },
    },
    testnet: true,
  }),
  iconUrl: '/assets/green.png',
  iconBackground: '#0a0a0a',
} as Chain & { iconUrl: string; iconBackground: string };

// Supported source chains for bridging (external chains)
export const sourceChains = [
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  bsc,
  avalanche,
  sonic,
] as const;

// All supported chains including Hyperliquid
export const allChains = [...sourceChains, hyperliquid, hyperliquidTestnet] as const;

// Chain metadata for UI - includes both mainnet chains and Hyperliquid options
export const chainMetadata: Record<number, {
  name: string;
  shortName: string;
  logo: string;
  color: string;
  isTestnet?: boolean;
}> = {
  1: {
    name: 'Ethereum',
    shortName: 'ETH',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    color: '#627EEA',
  },
  42161: {
    name: 'Arbitrum',
    shortName: 'ARB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
    color: '#28A0F0',
  },
  10: {
    name: 'Optimism',
    shortName: 'OP',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
    color: '#FF0420',
  },
  137: {
    name: 'Polygon',
    shortName: 'MATIC',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    color: '#8247E5',
  },
  8453: {
    name: 'Base',
    shortName: 'BASE',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png',
    color: '#0052FF',
  },
  56: {
    name: 'BNB Chain',
    shortName: 'BNB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    color: '#F3BA2F',
  },
  43114: {
    name: 'Avalanche',
    shortName: 'AVAX',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
    color: '#E84142',
  },
  [SONIC_CHAIN_ID]: {
    name: 'Sonic',
    shortName: 'S',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png',
    color: '#1DB4F4',
  },
  [HYPERLIQUID_CHAIN_ID]: {
    name: 'Hyperliquid',
    shortName: 'HYPE',
    logo: '/assets/green.png',
    color: '#4ADE80',
  },
  [HYPERLIQUID_TESTNET_CHAIN_ID]: {
    name: 'Hyperliquid Testnet',
    shortName: 'HYPE-T',
    logo: '/assets/green.png',
    color: '#4ADE80',
    isTestnet: true,
  },
};

// UI chain entries for the selector (includes testnet as separate entry)
export interface ChainEntry {
  id: number;
  key: string; // Unique key for React
  name: string;
  shortName: string;
  logo: string;
  color: string;
  isTestnet?: boolean;
  rpcUrl?: string;
}

export const selectorChains: ChainEntry[] = [
  { id: 1, key: 'eth', name: 'Ethereum', shortName: 'ETH', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png', color: '#627EEA' },
  { id: 42161, key: 'arb', name: 'Arbitrum', shortName: 'ARB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png', color: '#28A0F0' },
  { id: 10, key: 'op', name: 'Optimism', shortName: 'OP', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png', color: '#FF0420' },
  { id: 137, key: 'matic', name: 'Polygon', shortName: 'MATIC', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png', color: '#8247E5' },
  { id: 8453, key: 'base', name: 'Base', shortName: 'BASE', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png', color: '#0052FF' },
  { id: 56, key: 'bnb', name: 'BNB Chain', shortName: 'BNB', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png', color: '#F3BA2F' },
  { id: 43114, key: 'avax', name: 'Avalanche', shortName: 'AVAX', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png', color: '#E84142' },
  { id: SONIC_CHAIN_ID, key: 'sonic', name: 'Sonic', shortName: 'S', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png', color: '#1DB4F4' },
  { id: HYPERLIQUID_CHAIN_ID, key: 'hyperliquid', name: 'Hyperliquid', shortName: 'HYPE', logo: '/assets/green.png', color: '#4ADE80' },
  { id: HYPERLIQUID_TESTNET_CHAIN_ID, key: 'hyperliquid-testnet', name: 'Hyperliquid (Testnet)', shortName: 'HYPE-T', logo: '/assets/green.png', color: '#4ADE80', isTestnet: true, rpcUrl: 'https://rpc.hyperliquid-testnet.xyz/evm' },
];

// Source chains for bridging TO Hyperliquid (excludes Hyperliquid itself)
export const sourceSelectorChains = selectorChains.filter(
  chain => chain.id !== HYPERLIQUID_CHAIN_ID && chain.id !== HYPERLIQUID_TESTNET_CHAIN_ID
);

export type SupportedChainId = (typeof allChains)[number]['id'];

// Railgun-supported chains for privacy routing
export const RAILGUN_SUPPORTED_CHAIN_IDS = [1, 137, 42161, 56] as const;

export const railgunChainMetadata: Record<number, {
  name: string;
  shortName: string;
  logo: string;
  color: string;
  gasCostLevel: 'low' | 'medium' | 'high';
  recommendedForPrivacy: boolean;
}> = {
  1: {
    name: 'Ethereum',
    shortName: 'ETH',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    color: '#627EEA',
    gasCostLevel: 'high',
    recommendedForPrivacy: false, // High gas costs
  },
  137: {
    name: 'Polygon',
    shortName: 'MATIC',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    color: '#8247E5',
    gasCostLevel: 'low',
    recommendedForPrivacy: true,
  },
  42161: {
    name: 'Arbitrum',
    shortName: 'ARB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
    color: '#28A0F0',
    gasCostLevel: 'low',
    recommendedForPrivacy: true,
  },
  56: {
    name: 'BNB Chain',
    shortName: 'BNB',
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    color: '#F3BA2F',
    gasCostLevel: 'low',
    recommendedForPrivacy: true,
  },
};

/**
 * Check if a chain supports Railgun privacy
 */
export function isRailgunSupportedChain(chainId: number): boolean {
  return RAILGUN_SUPPORTED_CHAIN_IDS.includes(chainId as typeof RAILGUN_SUPPORTED_CHAIN_IDS[number]);
}

/**
 * Get recommended Railgun chain based on user's source chain
 * Prefers the source chain if it supports Railgun, otherwise defaults to Arbitrum
 */
export function getRecommendedRailgunChain(sourceChainId: number): number {
  if (isRailgunSupportedChain(sourceChainId)) {
    return sourceChainId;
  }
  // Default to Arbitrum for best balance of cost and speed
  return 42161;
}

/**
 * Get all chains that support Railgun for UI selection
 */
export function getRailgunChainOptions(): Array<{
  id: number;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  recommended: boolean;
}> {
  return RAILGUN_SUPPORTED_CHAIN_IDS.map(id => {
    const meta = railgunChainMetadata[id];
    return {
      id,
      name: meta.name,
      shortName: meta.shortName,
      logo: meta.logo,
      color: meta.color,
      recommended: meta.recommendedForPrivacy,
    };
  });
}

/**
 * =============================================================================
 * LAYER HELPER TYPES AND FUNCTIONS
 * =============================================================================
 */

/**
 * Represents the two layers in the Hyperliquid ecosystem
 */
export type HyperliquidLayer = 'hyperevm' | 'l1';

/**
 * Check if a chain ID is HyperEVM (the EVM-compatible layer)
 */
export function isHyperEVM(chainId: number): boolean {
  return chainId === HYPEREVM_CHAIN_ID || chainId === HYPEREVM_TESTNET_CHAIN_ID;
}

/**
 * Get the explorer URL for a transaction on HyperEVM
 * Note: L1 transactions are initiated via contracts on HyperEVM, so they also use this explorer
 */
export function getHyperEVMExplorerUrl(txHash: string, isTestnet = false): string {
  const baseUrl = isTestnet 
    ? 'https://explorer.hyperliquid-testnet.xyz'
    : 'https://explorer.hyperliquid.xyz';
  return `${baseUrl}/tx/${txHash}`;
}

/**
 * Get the explorer URL for an address on HyperEVM
 */
export function getHyperEVMAddressUrl(address: string, isTestnet = false): string {
  const baseUrl = isTestnet 
    ? 'https://explorer.hyperliquid-testnet.xyz'
    : 'https://explorer.hyperliquid.xyz';
  return `${baseUrl}/address/${address}`;
}
