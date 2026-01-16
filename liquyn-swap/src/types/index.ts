import type { Token } from '../config/tokens';

export interface RouteStep {
  type: 'swap' | 'bridge' | 'cross';
  tool: string;
  toolLogo?: string;
  fromChain: number;
  toChain: number;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  estimatedTime: number; // in seconds
}

export interface Quote {
  id: string;
  fromChain: number;
  toChain: number;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  estimatedTime: number;
  gasCost: string;
  gasCostUSD: string;
  steps: RouteStep[];
  slippage: number;
}

export interface ExecutionStatus {
  status: 'idle' | 'pending' | 'signing' | 'processing' | 'completed' | 'failed';
  currentStep: number;
  totalSteps: number;
  txHash?: string;
  error?: string;
}

export interface BridgeState {
  fromChain: number | null;
  toChain: number;
  fromToken: Token | null;
  toToken: Token | null;
  amount: string;
  quote: Quote | null;
  execution: ExecutionStatus;
  autoDeposit: boolean;
}
