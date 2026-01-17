import { useState, useCallback, useRef } from 'react';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import type { ExecutionStatus, Quote } from '../types';
import { parseErrorMessage, type ParsedError } from '../lib/errors';
import { 
  getQuoteApi,
  getTransactionStatus,
  type LiFiRoute,
} from '../services/lifi-api';

// Extended Quote type that may contain raw route from REST API
type QuoteWithRawRoute = Quote & { _rawRoute?: LiFiRoute };

export interface StepExecution {
  status: 'pending' | 'active' | 'complete' | 'failed';
  txHash?: string;
  startTime?: number;
  endTime?: number;
  error?: string;
}

export interface RetryExecutionState {
  status: ExecutionStatus;
  stepExecutions: StepExecution[];
  retryCount: number;
  lastError: ParsedError | null;
  canRetry: boolean;
}

const MAX_RETRIES = 3;
const STATUS_POLL_INTERVAL = 5000;
const MAX_STATUS_POLLS = 60;

// Errors that can be retried
const RETRYABLE_ERROR_PATTERNS = [
  'network',
  'timeout',
  'connection',
  'rate limit',
  'temporary',
  'unavailable',
  'try again',
  'rpc',
  'nonce',
];

function isRetryableError(error: Error | string): boolean {
  const message = (error instanceof Error ? error.message : error).toLowerCase();
  return RETRYABLE_ERROR_PATTERNS.some(pattern => message.includes(pattern));
}

export function useRetryExecution() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  
  const [state, setState] = useState<RetryExecutionState>({
    status: {
      status: 'idle',
      currentStep: 0,
      totalSteps: 0,
    },
    stepExecutions: [],
    retryCount: 0,
    lastError: null,
    canRetry: false,
  });

  const lastQuoteRef = useRef<Quote | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const resetState = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setState({
      status: {
        status: 'idle',
        currentStep: 0,
        totalSteps: 0,
      },
      stepExecutions: [],
      retryCount: 0,
      lastError: null,
      canRetry: false,
    });
    lastQuoteRef.current = null;
  }, []);

  const executeWithRetry = useCallback(async (
    quote: Quote,
    isRetry: boolean = false
  ): Promise<boolean> => {
    if (!address || !walletClient || !publicClient) {
      setState(prev => ({
        ...prev,
        status: { status: 'failed', currentStep: 0, totalSteps: 0, error: 'Wallet not connected' },
        lastError: parseErrorMessage('Wallet not connected'),
        canRetry: false,
      }));
      return false;
    }

    lastQuoteRef.current = quote;
    abortControllerRef.current = new AbortController();

    // Get the raw route from the quote
    const quoteWithRoute = quote as QuoteWithRawRoute;
    
    if (!quoteWithRoute._rawRoute) {
      setState(prev => ({
        ...prev,
        status: { status: 'failed', currentStep: 0, totalSteps: 0, error: 'No route data available' },
        lastError: parseErrorMessage('No route data available. Please refresh the quote and try again.'),
        canRetry: false,
      }));
      return false;
    }
    
    const route = quoteWithRoute._rawRoute;

    // Initialize step executions
    const initialStepExecutions: StepExecution[] = [{ status: 'pending' as const }];

    setState(prev => ({
      ...prev,
      status: {
        status: 'pending',
        currentStep: 0,
        totalSteps: 1,
      },
      stepExecutions: initialStepExecutions,
      lastError: null,
      canRetry: false,
      retryCount: isRetry ? prev.retryCount + 1 : 0,
    }));

    try {
      // Update step status to active
      setState(prev => ({
        ...prev,
        status: {
          status: 'pending',
          currentStep: 1,
          totalSteps: 1,
        },
        stepExecutions: [{ status: 'active' as const, startTime: Date.now() }],
      }));

      // Get fresh quote with transaction data
      const quoteResponse = await getQuoteApi({
        fromChain: route.fromChainId,
        toChain: route.toChainId,
        fromToken: route.fromToken.address,
        toToken: route.toToken.address,
        fromAmount: route.fromAmount,
        fromAddress: address,
        slippage: 0.01,
      });

      if (!quoteResponse.transactionRequest) {
        throw new Error('No transaction data in quote response');
      }

      const txRequest = quoteResponse.transactionRequest;

      // Check if we need token approval
      if (route.fromToken.address !== '0x0000000000000000000000000000000000000000') {
        const approvalAddress = quoteResponse.estimate?.approvalAddress || txRequest.to;
        
        const allowance = await checkAllowance(
          route.fromToken.address as `0x${string}`,
          address,
          approvalAddress as `0x${string}`,
          publicClient
        );

        const requiredAmount = BigInt(route.fromAmount);
        
        if (allowance < requiredAmount) {
          setState(prev => ({
            ...prev,
            status: {
              ...prev.status,
              status: 'signing',
            },
          }));

          const approvalTxHash = await approveToken(
            route.fromToken.address as `0x${string}`,
            approvalAddress as `0x${string}`,
            requiredAmount,
            walletClient
          );

          await publicClient.waitForTransactionReceipt({
            hash: approvalTxHash,
          });
        }
      }

      // Execute the main transaction
      setState(prev => ({
        ...prev,
        status: {
          ...prev.status,
          status: 'signing',
        },
      }));

      const txHash = await walletClient.sendTransaction({
        to: txRequest.to as `0x${string}`,
        data: txRequest.data as `0x${string}`,
        value: BigInt(txRequest.value || '0'),
        chain: undefined,
      });

      setState(prev => ({
        ...prev,
        status: {
          ...prev.status,
          status: 'processing',
          txHash,
        },
        stepExecutions: [{ ...prev.stepExecutions[0], txHash }],
      }));

      // Wait for confirmation
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (receipt.status === 'reverted') {
        throw new Error('Transaction reverted');
      }

      // Poll for bridge completion if cross-chain
      if (route.fromChainId !== route.toChainId) {
        await pollBridgeStatus(txHash, route.fromChainId, route.toChainId, quoteResponse.tool || 'unknown');
      }

      // Mark complete
      setState(prev => ({
        ...prev,
        status: {
          status: 'completed',
          currentStep: 1,
          totalSteps: 1,
        },
        stepExecutions: [{ status: 'complete' as const, endTime: Date.now(), txHash }],
        canRetry: false,
      }));

      return true;
    } catch (error) {
      if (abortControllerRef.current?.signal.aborted) {
        return false;
      }

      const errorMessage = error instanceof Error ? error.message : 'Execution failed';
      const parsedError = parseErrorMessage(errorMessage);
      const canRetry = isRetryableError(errorMessage) && state.retryCount < MAX_RETRIES;

      setState(prev => ({
        ...prev,
        status: {
          status: 'failed',
          currentStep: prev.status.currentStep,
          totalSteps: prev.status.totalSteps,
          error: parsedError.message,
        },
        stepExecutions: [{ status: 'failed' as const, error: parsedError.message }],
        lastError: parsedError,
        canRetry,
      }));

      return false;
    }
  }, [address, walletClient, publicClient, state.retryCount]);

  const retry = useCallback(async (): Promise<boolean> => {
    if (!lastQuoteRef.current || state.retryCount >= MAX_RETRIES) {
      return false;
    }
    return executeWithRetry(lastQuoteRef.current, true);
  }, [executeWithRetry, state.retryCount]);

  const execute = useCallback(async (quote: Quote): Promise<boolean> => {
    return executeWithRetry(quote, false);
  }, [executeWithRetry]);

  return {
    ...state,
    execute,
    retry,
    reset: resetState,
    isExecuting: ['pending', 'signing', 'processing'].includes(state.status.status),
    maxRetries: MAX_RETRIES,
  };
}

// Helper: Check token allowance
async function checkAllowance(
  tokenAddress: `0x${string}`,
  ownerAddress: `0x${string}`,
  spenderAddress: `0x${string}`,
  publicClient: any
): Promise<bigint> {
  try {
    const allowance = await publicClient.readContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'allowance',
      args: [ownerAddress, spenderAddress],
    });
    return allowance as bigint;
  } catch {
    return BigInt(0);
  }
}

// Helper: Approve token spending
async function approveToken(
  tokenAddress: `0x${string}`,
  spenderAddress: `0x${string}`,
  amount: bigint,
  walletClient: any
): Promise<`0x${string}`> {
  // Approve exact amount needed (with small buffer for slippage)
  const approvalAmount = amount + (amount / BigInt(100)); // +1% buffer
  
  const hash = await walletClient.writeContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'approve',
    args: [spenderAddress, approvalAmount],
  });
  
  return hash;
}

// Helper: Poll bridge status
async function pollBridgeStatus(
  txHash: string,
  fromChain: number,
  toChain: number,
  bridge: string
): Promise<void> {
  let polls = 0;
  
  while (polls < MAX_STATUS_POLLS) {
    try {
      const status = await getTransactionStatus({
        txHash,
        fromChain,
        toChain,
        bridge,
      });

      if (status.status === 'DONE') {
        return;
      }

      if (status.status === 'FAILED') {
        throw new Error(status.substatusMessage || 'Bridge transaction failed');
      }
    } catch {
      // Status endpoint might return 404 initially, that's ok
    }

    polls++;
    await new Promise(resolve => setTimeout(resolve, STATUS_POLL_INTERVAL));
  }
}
