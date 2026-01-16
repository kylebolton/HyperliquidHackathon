import { defineChain, type Chain } from 'viem';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';

// Hyperliquid Chain IDs
export const HYPERLIQUID_CHAIN_ID = 998;
export const HYPERLIQUID_TESTNET_CHAIN_ID = 999; // Using different ID for testnet in wallet

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
  iconUrl: 'https://raw.githubusercontent.com/Fantom-foundation/brand-assets/main/sonic/S-logo.png',
  iconBackground: '#0a0a0a',
} as Chain & { iconUrl: string; iconBackground: string };

// Hyperliquid Chain Definition (Mainnet) with RainbowKit icon
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

// Hyperliquid Testnet Chain Definition with RainbowKit icon
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
    logo: 'https://raw.githubusercontent.com/Fantom-foundation/brand-assets/main/sonic/S-logo.png',
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
  { id: SONIC_CHAIN_ID, key: 'sonic', name: 'Sonic', shortName: 'S', logo: 'https://raw.githubusercontent.com/Fantom-foundation/brand-assets/main/sonic/S-logo.png', color: '#1DB4F4' },
  { id: HYPERLIQUID_CHAIN_ID, key: 'hyperliquid', name: 'Hyperliquid', shortName: 'HYPE', logo: '/assets/green.png', color: '#4ADE80' },
  { id: HYPERLIQUID_TESTNET_CHAIN_ID, key: 'hyperliquid-testnet', name: 'Hyperliquid (Testnet)', shortName: 'HYPE-T', logo: '/assets/green.png', color: '#4ADE80', isTestnet: true, rpcUrl: 'https://rpc.hyperliquid-testnet.xyz/evm' },
];

// Source chains for bridging TO Hyperliquid (excludes Hyperliquid itself)
export const sourceSelectorChains = selectorChains.filter(
  chain => chain.id !== HYPERLIQUID_CHAIN_ID && chain.id !== HYPERLIQUID_TESTNET_CHAIN_ID
);

export type SupportedChainId = (typeof allChains)[number]['id'];
