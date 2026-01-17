import { useState, useCallback, useRef } from 'react';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import type { ExecutionStatus, Quote } from '../types';
import { 
  getQuoteApi,
  getTransactionStatus,
  type LiFiRoute,
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
        totalSteps: 1,
      });

      // Get the raw route from the quote
      const quoteWithRoute = quote as QuoteWithRawRoute;
      
      if (!quoteWithRoute._rawRoute) {
        throw new Error('No route data available. Please refresh the quote and try again.');
      }
      
      const route = quoteWithRoute._rawRoute;
      
      // Use the /quote endpoint to get fresh transaction data
      // This is more reliable than stepTransaction
      setStatus({
        status: 'pending',
        currentStep: 1,
        totalSteps: 1,
      });

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

      // Check if we need token approval first
      if (route.fromToken.address !== '0x0000000000000000000000000000000000000000') {
        // Get approval address from quote response
        const approvalAddress = quoteResponse.estimate?.approvalAddress || txRequest.to;
        
        const allowance = await checkAllowance(
          route.fromToken.address as `0x${string}`,
          address,
          approvalAddress as `0x${string}`,
          publicClient
        );

        const requiredAmount = BigInt(route.fromAmount);
        
        if (allowance < requiredAmount) {
          setStatus({
            status: 'signing',
            currentStep: 1,
            totalSteps: 1,
          });

          // Request approval for exact amount needed
          const approvalTxHash = await approveToken(
            route.fromToken.address as `0x${string}`,
            approvalAddress as `0x${string}`,
            requiredAmount,
            walletClient
          );

          // Wait for approval confirmation
          await publicClient.waitForTransactionReceipt({
            hash: approvalTxHash,
          });
        }
      }

      // Execute the main transaction
      setStatus({
        status: 'signing',
        currentStep: 1,
        totalSteps: 1,
      });

      const txHash = await walletClient.sendTransaction({
        to: txRequest.to as `0x${string}`,
        data: txRequest.data as `0x${string}`,
        value: BigInt(txRequest.value || '0'),
        chain: undefined, // Use connected chain
      });

      setStatus({
        status: 'processing',
        currentStep: 1,
        totalSteps: 1,
        txHash,
      });

      // Wait for transaction confirmation
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (receipt.status === 'reverted') {
        throw new Error('Transaction reverted');
      }

      // For cross-chain transactions, poll for bridge completion
      if (route.fromChainId !== route.toChainId) {
        await pollBridgeStatus(
          txHash,
          route.fromChainId,
          route.toChainId,
          quoteResponse.tool || 'unknown',
          () => {
            setStatus({
              status: 'processing',
              currentStep: 1,
              totalSteps: 1,
              txHash,
            });
          }
        );
      }

      setStatus({
        status: 'completed',
        currentStep: 1,
        totalSteps: 1,
      });

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Execution failed';
      
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

// Helper: Poll bridge status until completion
async function pollBridgeStatus(
  txHash: string,
  fromChain: number,
  toChain: number,
  bridge: string,
  onUpdate: () => void
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

      onUpdate();

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

  // Timeout - but transaction might still complete
}
