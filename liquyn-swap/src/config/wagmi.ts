import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet, arbitrum, optimism, polygon, base, bsc, avalanche } from 'wagmi/chains';
import { hyperEVM } from './chains';

// Wagmi configuration with RainbowKit
export const config = getDefaultConfig({
  appName: 'Liquyn Swap',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id',
  chains: [mainnet, arbitrum, optimism, polygon, base, bsc, avalanche, hyperEVM],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [avalanche.id]: http(),
    [hyperEVM.id]: http('https://rpc.hyperliquid.xyz/evm'),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
