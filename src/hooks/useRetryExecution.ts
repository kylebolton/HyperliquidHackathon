import { useState, useCallback, useRef } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { executeRoute, getRoutes } from '@lifi/sdk';
import type { ExecutionStatus, Quote } from '../types';
import { HYPERLIQUID_CHAIN_ID } from '../config/chains';
import { parseErrorMessage, type ParsedError } from '../lib/errors';

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
    if (!address || !walletClient) {
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

    // Initialize step executions
    const initialStepExecutions: StepExecution[] = quote.steps.map(() => ({
      status: 'pending' as const,
    }));

    setState(prev => ({
      ...prev,
      status: {
        status: 'pending',
        currentStep: 0,
        totalSteps: quote.steps.length,
      },
      stepExecutions: initialStepExecutions,
      lastError: null,
      canRetry: false,
      retryCount: isRetry ? prev.retryCount + 1 : 0,
    }));

    try {
      // Fetch the actual route object from LI.FI
      const routesResult = await getRoutes({
        fromChainId: quote.fromChain,
        toChainId: HYPERLIQUID_CHAIN_ID,
        fromTokenAddress: quote.fromToken.address,
        toTokenAddress: quote.toToken.address,
        fromAmount: quote.fromAmount,
        fromAddress: address,
      });

      if (!routesResult.routes.length) {
        throw new Error('No routes available. Try a different amount or token pair.');
      }

      const route = routesResult.routes[0];

      setState(prev => ({
        ...prev,
        status: {
          status: 'signing',
          currentStep: 0,
          totalSteps: route.steps.length,
        },
        stepExecutions: route.steps.map(() => ({
          status: 'pending' as const,
        })),
      }));

      // Execute the route
      await executeRoute(route, {
        updateRouteHook: (updatedRoute) => {
          if (abortControllerRef.current?.signal.aborted) return;

          const newStepExecutions: StepExecution[] = updatedRoute.steps.map((step) => {
            const execution = (step as { execution?: { 
              status: string; 
              process?: Array<{ txHash?: string; substatus?: string; startedAt?: number; doneAt?: number }> 
            } }).execution;

            if (!execution) {
              return { status: 'pending' as const };
            }

            const processes = execution.process || [];
            const latestProcess = processes[processes.length - 1];

            if (execution.status === 'DONE') {
              return {
                status: 'complete' as const,
                txHash: latestProcess?.txHash,
                startTime: processes[0]?.startedAt,
                endTime: latestProcess?.doneAt,
              };
            }

            if (execution.status === 'FAILED') {
              return {
                status: 'failed' as const,
                txHash: latestProcess?.txHash,
                error: 'Step failed',
              };
            }

            return {
              status: 'active' as const,
              txHash: latestProcess?.txHash,
              startTime: processes[0]?.startedAt,
            };
          });

          // Find current step
          const currentStepIndex = newStepExecutions.findIndex(s => s.status === 'active');
          const completedSteps = newStepExecutions.filter(s => s.status === 'complete').length;
          
          // Get transaction hash from active or last complete step
          const activeStep = newStepExecutions.find(s => s.status === 'active');
          const txHash = activeStep?.txHash || newStepExecutions[completedSteps - 1]?.txHash;

          // Determine overall status
          const hasActiveStep = newStepExecutions.some(s => s.status === 'active');
          const hasFailedStep = newStepExecutions.some(s => s.status === 'failed');
          
          let overallStatus: ExecutionStatus['status'] = 'processing';
          if (hasFailedStep) overallStatus = 'failed';
          else if (!hasActiveStep && completedSteps === newStepExecutions.length) overallStatus = 'completed';

          setState(prev => ({
            ...prev,
            status: {
              status: overallStatus,
              currentStep: currentStepIndex >= 0 ? currentStepIndex : completedSteps,
              totalSteps: updatedRoute.steps.length,
              txHash,
            },
            stepExecutions: newStepExecutions,
          }));
        },
      });

      setState(prev => ({
        ...prev,
        status: {
          status: 'completed',
          currentStep: quote.steps.length,
          totalSteps: quote.steps.length,
        },
        stepExecutions: prev.stepExecutions.map(s => 
          s.status === 'active' ? { ...s, status: 'complete' as const, endTime: Date.now() } : s
        ),
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
        stepExecutions: prev.stepExecutions.map((s, i) => 
          i === prev.status.currentStep && s.status === 'active' 
            ? { ...s, status: 'failed' as const, error: parsedError.message } 
            : s
        ),
        lastError: parsedError,
        canRetry,
      }));

      return false;
    }
  }, [address, walletClient, state.retryCount]);

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
