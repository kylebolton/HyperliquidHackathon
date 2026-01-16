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
  privacyEnabled: boolean;
}

// Privacy Mode Types
export type PrivacyStepId = 
  | 'bridge_to_railgun'
  | 'shield'
  | 'wait'
  | 'unshield'
  | 'bridge_to_hyperliquid';

export type PrivacyStepStatus = 
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'failed'
  | 'skipped';

export interface PrivacyStep {
  id: PrivacyStepId;
  label: string;
  description: string;
  status: PrivacyStepStatus;
  txHash?: string;
  error?: string;
  estimatedTime?: number;
  actualTime?: number;
}

export interface PrivacyRouteQuote extends Quote {
  isPrivate: true;
  privacyChainId: number;
  privacyChainName: string;
  shieldFeeUSD: string;
  unshieldFeeUSD: string;
  privacyFeeUSD: string;
  recommendedWaitTime: number;
  privacySteps: PrivacyStep[];
}

export interface StandardRouteQuote extends Quote {
  isPrivate: false;
}

export type RouteQuote = PrivacyRouteQuote | StandardRouteQuote;

export interface PrivacyExecutionState {
  status: 'idle' | 'executing' | 'completed' | 'failed';
  currentStepId: PrivacyStepId | null;
  steps: PrivacyStep[];
  overallProgress: number; // 0-100
  shieldTxHash?: string;
  unshieldTxHash?: string;
  error?: string;
}
