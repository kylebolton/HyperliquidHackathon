import { useState, useCallback } from 'react';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { depositToHyperliquid, checkUSDCBalance } from '../services/hyperliquid';
import { HYPERLIQUID_CHAIN_ID } from '../config/chains';
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
  // Use Hyperliquid-specific public client for balance checks and contract reads
  // This ensures we query the correct chain regardless of which chain the wallet is connected to
  const hyperliquidPublicClient = usePublicClient({ chainId: HYPERLIQUID_CHAIN_ID });

  const [status, setStatus] = useState<DepositStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const deposit = useCallback(async (amountUSD: string): Promise<boolean> => {
    if (!walletClient || !hyperliquidPublicClient || !address) {
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
        hyperliquidPublicClient as PublicClient,
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
  }, [walletClient, hyperliquidPublicClient, address]);

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
  // Use Hyperliquid-specific public client to query balance on the correct chain
  const hyperliquidPublicClient = usePublicClient({ chainId: HYPERLIQUID_CHAIN_ID });
  const [balance, setBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);

  const fetchBalance = useCallback(async () => {
    if (!hyperliquidPublicClient || !address) return;
    
    setIsLoading(true);
    try {
      const balanceRaw = await checkUSDCBalance(hyperliquidPublicClient as PublicClient, address);
      setBalance((Number(balanceRaw) / 1e6).toString());
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setIsLoading(false);
    }
  }, [hyperliquidPublicClient, address]);

  return { balance, isLoading, fetchBalance };
}
