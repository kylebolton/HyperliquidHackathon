import { useQuery } from '@tanstack/react-query';
import { useAccount } from 'wagmi';
import { fetchQuote, fetchRoutes } from '../services/lifi';
import type { Quote } from '../types';

interface UseLiFiQuoteParams {
  fromChainId: number | null;
  fromTokenAddress: string | null;
  toTokenAddress: string;
  amount: string;
  slippage?: number;
  enabled?: boolean;
}

export function useLiFiQuote({
  fromChainId,
  fromTokenAddress,
  toTokenAddress,
  amount,
  slippage = 0.5,
  enabled = true,
}: UseLiFiQuoteParams) {
  const { address } = useAccount();

  return useQuery({
    queryKey: ['lifi-quote', fromChainId, fromTokenAddress, toTokenAddress, amount, address, slippage],
    queryFn: async (): Promise<Quote | null> => {
      if (!fromChainId || !fromTokenAddress || !address || !amount || amount === '0') {
        return null;
      }

      const quote = await fetchQuote(
        fromChainId,
        fromTokenAddress,
        toTokenAddress,
        amount,
        address,
        slippage
      );

      return quote;
    },
    enabled: enabled && !!fromChainId && !!fromTokenAddress && !!address && !!amount && amount !== '0' && parseFloat(amount) > 0,
    staleTime: 30000, // 30 seconds
    refetchInterval: 30000, // Refetch every 30 seconds for fresh quotes
    retry: 1,
  });
}

export function useLiFiRoutes({
  fromChainId,
  fromTokenAddress,
  toTokenAddress,
  amount,
  slippage = 0.5,
  enabled = true,
}: UseLiFiQuoteParams) {
  const { address } = useAccount();

  return useQuery({
    queryKey: ['lifi-routes', fromChainId, fromTokenAddress, toTokenAddress, amount, address, slippage],
    queryFn: async (): Promise<Quote[]> => {
      if (!fromChainId || !fromTokenAddress || !address || !amount || amount === '0') {
        return [];
      }

      const routes = await fetchRoutes(
        fromChainId,
        fromTokenAddress,
        toTokenAddress,
        amount,
        address,
        slippage
      );

      return routes;
    },
    enabled: enabled && !!fromChainId && !!fromTokenAddress && !!address && !!amount && amount !== '0' && parseFloat(amount) > 0,
    staleTime: 30000,
    refetchInterval: 30000,
    retry: 1,
  });
}
