import { useState, useCallback, useRef } from 'react';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import type { ExecutionStatus, Quote } from '../types';
import { 
  getStepTransaction, 
  getTransactionStatus,
  type LiFiRoute,
  type LiFiStep 
} from '../services/lifi-api';

// Extended Quote type that may contain raw route from REST API
type QuoteWithRawRoute = Quote & { _rawRoute?: LiFiRoute };

// Polling interval for status checks (5 seconds)
const STATUS_POLL_INTERVAL = 5000;
const MAX_STATUS_POLLS = 60; // 5 minutes max

export function useLiFiExecution() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  
  const [status, setStatus] = useState<ExecutionStatus>({
    status: 'idle',
    currentStep: 0,
    totalSteps: 0,
  });

  const abortRef = useRef(false);

  const execute = useCallback(async (quote: Quote): Promise<boolean> => {
    if (!address || !walletClient || !publicClient) {
      setStatus({ status: 'failed', currentStep: 0, totalSteps: 0, error: 'Wallet not connected' });
      return false;
    }

    abortRef.current = false;

    try {
      setStatus({
        status: 'pending',
        currentStep: 0,
        totalSteps: quote.steps.length || 1,
      });

      // Get the raw route from the quote
      const quoteWithRoute = quote as QuoteWithRawRoute;
      
      if (!quoteWithRoute._rawRoute) {
        throw new Error('No route data available. Please refresh the quote and try again.');
      }
      
      const route = quoteWithRoute._rawRoute;
      
      console.log('[LI.FI Execution] Starting execution with route:', { 
        id: route.id, 
        fromChain: route.fromChainId,
        toChain: route.toChainId,
        fromToken: route.fromToken?.symbol,
        toToken: route.toToken?.symbol,
        steps: route.steps.length 
      });

      // Process each step
      for (let stepIndex = 0; stepIndex < route.steps.length; stepIndex++) {
        if (abortRef.current) {
          throw new Error('Execution cancelled');
        }

        const step = route.steps[stepIndex];
        console.log(`[LI.FI Execution] Processing step ${stepIndex + 1}/${route.steps.length}:`, step.tool);

        // Get transaction data for this step
        setStatus({
          status: 'pending',
          currentStep: stepIndex + 1,
          totalSteps: route.steps.length,
        });

        let stepWithTx: LiFiStep;
        try {
          stepWithTx = await getStepTransaction(step);
          console.log('[LI.FI Execution] Got transaction data:', stepWithTx.transactionRequest);
        } catch (error) {
          console.error('[LI.FI Execution] Failed to get transaction data:', error);
          throw new Error('Failed to prepare transaction. Please try again.');
        }

        if (!stepWithTx.transactionRequest) {
          throw new Error('No transaction data returned from LI.FI');
        }

        const txRequest = stepWithTx.transactionRequest;

        // Check if we need token approval first
        if (step.action.fromToken.address !== '0x0000000000000000000000000000000000000000') {
          const allowance = await checkAllowance(
            step.action.fromToken.address as `0x${string}`,
            address,
            txRequest.to as `0x${string}`,
            publicClient
          );

          const requiredAmount = BigInt(step.action.fromAmount);
          
          if (allowance < requiredAmount) {
            console.log('[LI.FI Execution] Approval needed, requesting...');
            setStatus({
              status: 'signing',
              currentStep: stepIndex + 1,
              totalSteps: route.steps.length,
            });

            // Request approval
            const approvalTxHash = await approveToken(
              step.action.fromToken.address as `0x${string}`,
              txRequest.to as `0x${string}`,
              requiredAmount,
              walletClient
            );

            console.log('[LI.FI Execution] Approval tx:', approvalTxHash);

            // Wait for approval confirmation
            await publicClient.waitForTransactionReceipt({
              hash: approvalTxHash,
            });
            console.log('[LI.FI Execution] Approval confirmed');
          }
        }

        // Execute the main transaction
        setStatus({
          status: 'signing',
          currentStep: stepIndex + 1,
          totalSteps: route.steps.length,
        });

        console.log('[LI.FI Execution] Sending transaction:', {
          to: txRequest.to,
          value: txRequest.value,
          chainId: txRequest.chainId,
        });

        const txHash = await walletClient.sendTransaction({
          to: txRequest.to as `0x${string}`,
          data: txRequest.data as `0x${string}`,
          value: BigInt(txRequest.value || '0'),
          chain: undefined, // Use connected chain
        });

        console.log('[LI.FI Execution] Transaction sent:', txHash);

        setStatus({
          status: 'processing',
          currentStep: stepIndex + 1,
          totalSteps: route.steps.length,
          txHash,
        });

        // Wait for transaction confirmation
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txHash,
        });

        console.log('[LI.FI Execution] Transaction confirmed:', receipt.status);

        if (receipt.status === 'reverted') {
          throw new Error('Transaction reverted');
        }

        // For cross-chain transactions, poll for bridge completion
        if (step.action.fromChainId !== step.action.toChainId) {
          console.log('[LI.FI Execution] Waiting for bridge completion...');
          await pollBridgeStatus(
            txHash,
            step.action.fromChainId,
            step.action.toChainId,
            step.tool,
            () => {
              setStatus({
                status: 'processing',
                currentStep: stepIndex + 1,
                totalSteps: route.steps.length,
                txHash,
              });
            }
          );
        }
      }

      setStatus({
        status: 'completed',
        currentStep: route.steps.length,
        totalSteps: route.steps.length,
      });

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Execution failed';
      console.error('[LI.FI Execution] Error:', errorMessage, error);
      
      setStatus({
        status: 'failed',
        currentStep: status.currentStep,
        totalSteps: status.totalSteps,
        error: errorMessage,
      });
      return false;
    }
  }, [address, walletClient, publicClient, status.currentStep, status.totalSteps]);

  const reset = useCallback(() => {
    abortRef.current = true;
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
  _amount: bigint, // Unused - we approve max instead
  walletClient: any
): Promise<`0x${string}`> {
  // Approve max amount to avoid multiple approvals
  const maxAmount = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  
  const hash = await walletClient.writeContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: 'approve',
    args: [spenderAddress, maxAmount],
  });
  
  return hash;
}

// Helper: Poll bridge status until completion
async function pollBridgeStatus(
  txHash: string,
  fromChain: number,
  toChain: number,
  bridge: string,
  onUpdate: (status: any) => void
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

      console.log('[LI.FI Execution] Bridge status:', status.status, status.substatus);
      onUpdate(status);

      if (status.status === 'DONE') {
        return;
      }

      if (status.status === 'FAILED') {
        throw new Error(status.substatusMessage || 'Bridge transaction failed');
      }
    } catch (error: any) {
      // Status endpoint might return 404 initially, that's ok
      if (!error.message?.includes('NOT_FOUND')) {
        console.warn('[LI.FI Execution] Status check error:', error);
      }
    }

    polls++;
    await new Promise(resolve => setTimeout(resolve, STATUS_POLL_INTERVAL));
  }

  // Timeout - but transaction might still complete
  console.warn('[LI.FI Execution] Status polling timed out');
}
