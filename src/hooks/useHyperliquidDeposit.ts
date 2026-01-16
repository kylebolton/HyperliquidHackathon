import { useState, useCallback } from 'react';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { depositToHyperliquid, checkUSDCBalance } from '../services/hyperliquid';
import type { PublicClient, WalletClient } from 'viem';

export type DepositStatus = 'idle' | 'checking' | 'approving' | 'depositing' | 'completed' | 'failed';

interface UseHyperliquidDepositResult {
  status: DepositStatus;
  statusMessage: string;
  txHash: string | null;
  error: string | null;
  deposit: (amountUSD: string) => Promise<boolean>;
  reset: () => void;
  isDepositing: boolean;
}

export function useHyperliquidDeposit(): UseHyperliquidDepositResult {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [status, setStatus] = useState<DepositStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const deposit = useCallback(async (amountUSD: string): Promise<boolean> => {
    if (!walletClient || !publicClient || !address) {
      setError('Wallet not connected');
      setStatus('failed');
      return false;
    }

    setError(null);
    setTxHash(null);
    setStatus('checking');
    setStatusMessage('Initializing...');

    try {
      const result = await depositToHyperliquid(
        walletClient as WalletClient,
        publicClient as PublicClient,
        amountUSD,
        (newStatus, message) => {
          setStatus(newStatus);
          if (message) setStatusMessage(message);
        }
      );

      if (result.success) {
        setTxHash(result.txHash || null);
        setStatus('completed');
        setStatusMessage('Deposit successful!');
        return true;
      } else {
        setError(result.error || 'Deposit failed');
        setStatus('failed');
        setStatusMessage(result.error || 'Deposit failed');
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setStatus('failed');
      setStatusMessage(errorMessage);
      return false;
    }
  }, [walletClient, publicClient, address]);

  const reset = useCallback(() => {
    setStatus('idle');
    setStatusMessage('');
    setTxHash(null);
    setError(null);
  }, []);

  return {
    status,
    statusMessage,
    txHash,
    error,
    deposit,
    reset,
    isDepositing: status === 'checking' || status === 'approving' || status === 'depositing',
  };
}

// Hook to check USDC balance on Hyperliquid
export function useHyperliquidBalance() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);

  const fetchBalance = useCallback(async () => {
    if (!publicClient || !address) return;
    
    setIsLoading(true);
    try {
      const balanceRaw = await checkUSDCBalance(publicClient as PublicClient, address);
      setBalance((Number(balanceRaw) / 1e6).toString());
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setIsLoading(false);
    }
  }, [publicClient, address]);

  return { balance, isLoading, fetchBalance };
}
