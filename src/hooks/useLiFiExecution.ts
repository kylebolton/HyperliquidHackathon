import { useState, useCallback } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { executeRoute, type Route } from '@lifi/sdk';
import type { ExecutionStatus, Quote } from '../types';

// Extended Quote type that may contain raw route
type QuoteWithRawRoute = Quote & { _rawRoute?: Route };

export function useLiFiExecution() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  
  const [status, setStatus] = useState<ExecutionStatus>({
    status: 'idle',
    currentStep: 0,
    totalSteps: 0,
  });

  const execute = useCallback(async (quote: Quote): Promise<boolean> => {
    if (!address || !walletClient) {
      setStatus({ status: 'failed', currentStep: 0, totalSteps: 0, error: 'Wallet not connected' });
      return false;
    }

    try {
      setStatus({
        status: 'pending',
        currentStep: 0,
        totalSteps: quote.steps.length,
      });

      // Check if we have a raw route stored from the initial quote
      const quoteWithRoute = quote as QuoteWithRawRoute;
      
      if (!quoteWithRoute._rawRoute) {
        throw new Error('No route data available. Please refresh the quote and try again.');
      }
      
      const route = quoteWithRoute._rawRoute;
      
      console.log('[LI.FI] Executing stored route:', { 
        id: route.id, 
        fromChain: route.fromChainId,
        toChain: route.toChainId,
        toToken: route.toToken?.symbol,
        steps: route.steps.length 
      });

      setStatus({
        status: 'signing',
        currentStep: 0,
        totalSteps: route.steps.length,
      });

      // Execute the route
      await executeRoute(route, {
        updateRouteHook: (updatedRoute) => {
          // Find current executing step
          let currentTxHash: string | undefined;

          for (let i = 0; i < updatedRoute.steps.length; i++) {
            const step = updatedRoute.steps[i];
            // Access execution through any to handle SDK type differences
            const execution = (step as { execution?: { status: string; process?: Array<{ txHash?: string; substatus?: string }> } }).execution;
            
            if (execution) {
              
              // Get the latest process status
              const processes = execution.process || [];
              const latestProcess = processes[processes.length - 1];
              
              if (latestProcess?.txHash) {
                currentTxHash = latestProcess.txHash;
              }

              if (execution.status === 'DONE') {
                continue;
              }

              // Update status based on step execution status
              if (execution.status === 'PENDING') {
                setStatus({
                  status: 'processing',
                  currentStep: i + 1,
                  totalSteps: updatedRoute.steps.length,
                  txHash: currentTxHash,
                });
              } else if (execution.status === 'ACTION_REQUIRED') {
                setStatus({
                  status: 'signing',
                  currentStep: i + 1,
                  totalSteps: updatedRoute.steps.length,
                  txHash: currentTxHash,
                });
              }
              break;
            }
          }
        },
      });

      setStatus({
        status: 'completed',
        currentStep: quote.steps.length,
        totalSteps: quote.steps.length,
      });

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Execution failed';
      setStatus({
        status: 'failed',
        currentStep: 0,
        totalSteps: quote.steps.length,
        error: errorMessage,
      });
      return false;
    }
  }, [address, walletClient]);

  const reset = useCallback(() => {
    setStatus({
      status: 'idle',
      currentStep: 0,
      totalSteps: 0,
    });
  }, []);

  return {
    status,
    execute,
    reset,
    isExecuting: status.status === 'pending' || status.status === 'signing' || status.status === 'processing',
  };
}
