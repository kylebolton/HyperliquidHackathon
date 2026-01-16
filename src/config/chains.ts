import { defineChain } from 'viem';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';

// Hyperliquid Chain ID (Mainnet)
export const HYPERLIQUID_CHAIN_ID = 998;

// Hyperliquid Chain Definition (Mainnet)
export const hyperliquid = defineChain({
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
});

// Supported source chains for bridging
export const sourceChains = [
  mainnet,
  arbitrum,
  optimism,
  polygon,
  base,
  bsc,
  avalanche,
] as const;

// All supported chains including Hyperliquid
export const allChains = [...sourceChains, hyperliquid] as const;

// Chain metadata for UI
export const chainMetadata: Record<number, {
  name: string;
  shortName: string;
  logo: string;
  color: string;
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
  [HYPERLIQUID_CHAIN_ID]: {
    name: 'Hyperliquid',
    shortName: 'HYPE',
    logo: '/assets/green.png',
    color: '#4ADE80',
  },
};

export type SupportedChainId = (typeof allChains)[number]['id'];
