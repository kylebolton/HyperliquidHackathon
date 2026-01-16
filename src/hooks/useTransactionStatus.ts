import { useState, useEffect, useCallback, useRef } from 'react';
import { getTransactionStatus, type TransactionStatus } from '../services/lifi';
import { HYPERLIQUID_CHAIN_ID } from '../config/chains';

interface UseTransactionStatusOptions {
  txHash: string | undefined;
  fromChainId: number | undefined;
  toChainId?: number;
  pollInterval?: number;
  enabled?: boolean;
  onComplete?: (status: TransactionStatus) => void;
  onFailed?: (status: TransactionStatus) => void;
}

interface UseTransactionStatusResult {
  status: TransactionStatus | null;
  isPolling: boolean;
  error: Error | null;
  startPolling: () => void;
  stopPolling: () => void;
  refetch: () => Promise<TransactionStatus | null>;
}

const DEFAULT_POLL_INTERVAL = 10000; // 10 seconds
const MAX_POLL_ATTEMPTS = 120; // 20 minutes at 10s intervals

export function useTransactionStatus({
  txHash,
  fromChainId,
  toChainId = HYPERLIQUID_CHAIN_ID,
  pollInterval = DEFAULT_POLL_INTERVAL,
  enabled = true,
  onComplete,
  onFailed,
}: UseTransactionStatusOptions): UseTransactionStatusResult {
  const [status, setStatus] = useState<TransactionStatus | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const pollCountRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const fetchStatus = useCallback(async (): Promise<TransactionStatus | null> => {
    if (!txHash || !fromChainId) return null;

    try {
      const result = await getTransactionStatus(txHash, fromChainId, toChainId);
      
      if (!isMountedRef.current) return null;
      
      setStatus(result);
      setError(null);

      // Check for terminal states
      if (result.status === 'DONE') {
        onComplete?.(result);
        return result;
      }
      
      if (result.status === 'FAILED' || result.status === 'INVALID') {
        onFailed?.(result);
        return result;
      }

      return result;
    } catch (err) {
      if (!isMountedRef.current) return null;
      
      const error = err instanceof Error ? err : new Error('Failed to fetch status');
      setError(error);
      return null;
    }
  }, [txHash, fromChainId, toChainId, onComplete, onFailed]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPolling(false);
    pollCountRef.current = 0;
  }, []);

  const startPolling = useCallback(() => {
    if (!txHash || !fromChainId || intervalRef.current) return;

    setIsPolling(true);
    pollCountRef.current = 0;

    // Initial fetch
    fetchStatus();

    // Start polling
    intervalRef.current = setInterval(async () => {
      pollCountRef.current += 1;

      // Stop if max attempts reached
      if (pollCountRef.current >= MAX_POLL_ATTEMPTS) {
        stopPolling();
        setError(new Error('Transaction status polling timed out'));
        return;
      }

      const result = await fetchStatus();

      // Stop polling on terminal states
      if (result && (result.status === 'DONE' || result.status === 'FAILED' || result.status === 'INVALID')) {
        stopPolling();
      }
    }, pollInterval);
  }, [txHash, fromChainId, pollInterval, fetchStatus, stopPolling]);

  // Auto-start polling when enabled and txHash changes
  useEffect(() => {
    if (enabled && txHash && fromChainId) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
      stopPolling();
    };
  }, [enabled, txHash, fromChainId, startPolling, stopPolling]);

  return {
    status,
    isPolling,
    error,
    startPolling,
    stopPolling,
    refetch: fetchStatus,
  };
}

// Human-readable status messages
export function getStatusMessage(status: TransactionStatus | null): string {
  if (!status) return 'Checking transaction status...';

  switch (status.status) {
    case 'NOT_FOUND':
      return 'Transaction not found. It may still be processing.';
    case 'PENDING':
      if (status.substatus === 'WAIT_SOURCE_CONFIRMATIONS') {
        return 'Waiting for source chain confirmation...';
      }
      if (status.substatus === 'WAIT_DESTINATION_TRANSACTION') {
        return 'Waiting for destination chain transaction...';
      }
      if (status.substatus === 'BRIDGE_NOT_AVAILABLE') {
        return 'Bridge is temporarily unavailable. Please wait...';
      }
      return status.substatusMessage || 'Transaction is being processed...';
    case 'DONE':
      return 'Transaction complete!';
    case 'FAILED':
      return status.substatusMessage || 'Transaction failed.';
    case 'INVALID':
      return 'Invalid transaction hash.';
    default:
      return 'Unknown status';
  }
}
