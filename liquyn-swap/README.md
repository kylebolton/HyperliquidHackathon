# Liquyn Swap

A minimal, mobile-first bridge dApp for swapping and bridging from any chain to HyperEVM. Built for the Hyperliquid Hackathon.

**Repository:** https://github.com/kylebolton/HyperliquidHackathon

## Features

- Cross-chain bridging to HyperEVM via LI.FI
- Mobile-first responsive design
- Auto-deposit to Hyperliquid L1 trading account
- Reusable `<DepositToHyperliquid />` component

## Quick Start

```bash
cd liquyn-swap
npm install
cp .env.example .env
# Add VITE_WALLETCONNECT_PROJECT_ID to .env
npm run dev
```

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- RainbowKit + wagmi
- LI.FI SDK
- Motion

## Reusable Component

```tsx
import { DepositToHyperliquid } from './components/deposit/DepositToHyperliquid';

<DepositToHyperliquid
  amount="100"
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onSuccess={(txHash) => console.log('Success!', txHash)}
/>
```

## Supported Chains

- Ethereum, Arbitrum, Optimism, Polygon, Base, BNB Chain, Avalanche → HyperEVM (998)

## License

MIT
