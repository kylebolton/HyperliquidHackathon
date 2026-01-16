import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAccount, useBalance, useSwitchChain } from 'wagmi';
import { parseUnits } from 'viem';
import { ArrowDown, AlertCircle, Loader2, Info } from 'lucide-react';
import { cn, formatAmount } from '../../lib/utils';
import { ChainSelector, TokenSelector } from './ChainTokenSelector';
import { QuoteCard } from './QuoteCard';
import { ExecutionProgress } from './ExecutionProgress';
import { DepositToHyperliquid } from '../deposit/DepositToHyperliquid';
import { Button } from '../ui/Button';
import { useLiFiQuote } from '../../hooks/useLiFiQuote';
import { useLiFiExecution } from '../../hooks/useLiFiExecution';
import { hyperliquidTokens, type Token } from '../../config/tokens';
import { HYPERLIQUID_CHAIN_ID, selectorChains } from '../../config/chains';

type ButtonState = {
  text: string;
  disabled: boolean;
  variant: 'primary' | 'error' | 'warning';
  showLoader?: boolean;
};

export function BridgeWidget() {
  const { address, isConnected, chainId: connectedChainId } = useAccount();
  const { switchChain } = useSwitchChain();
  
  // Bridge state
  const [fromChainId, setFromChainId] = useState<number | null>(null);
  const [fromChainKey, setFromChainKey] = useState<string | null>(null);
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token>(hyperliquidTokens[0]); // Default to USDC
  const [amount, setAmount] = useState('');
  const [autoDeposit, setAutoDeposit] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);

  // Get balance for selected token
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
    token: fromToken?.address === '0x0000000000000000000000000000000000000000' 
      ? undefined 
      : fromToken?.address as `0x${string}`,
    chainId: fromChainId as 1 | 10 | 42161 | 137 | 8453 | 56 | 43114 | 998 | undefined,
  });

  // Calculate amount in smallest units
  const amountInUnits = useMemo(() => {
    if (!amount || !fromToken || parseFloat(amount) <= 0) return '0';
    try {
      return parseUnits(amount, fromToken.decimals).toString();
    } catch {
      return '0';
    }
  }, [amount, fromToken]);

  // Check if user has sufficient balance
  const hasSufficientBalance = useMemo(() => {
    if (!balance || !amount || parseFloat(amount) <= 0) return true; // Don't show error if no amount
    return parseFloat(balance.formatted) >= parseFloat(amount);
  }, [balance, amount]);

  // Get quote
  const { 
    data: quote, 
    isLoading: isLoadingQuote, 
    error: quoteError,
    isFetched: isQuoteFetched,
  } = useLiFiQuote({
    fromChainId,
    fromTokenAddress: fromToken?.address || null,
    toTokenAddress: toToken.address,
    amount: amountInUnits,
    enabled: !!fromChainId && !!fromToken && !!amount && parseFloat(amount) > 0 && hasSufficientBalance,
  });

  // Execution
  const { status: executionStatus, execute, reset: resetExecution, isExecuting } = useLiFiExecution();

  // Check if on wrong network
  const isWrongNetwork = fromChainId && connectedChainId !== fromChainId;

  // Get chain name for display
  const fromChainName = fromChainKey 
    ? selectorChains.find(c => c.key === fromChainKey)?.name 
    : selectorChains.find(c => c.id === fromChainId)?.name;

  // Reset token when chain changes
  useEffect(() => {
    setFromToken(null);
    setAmount('');
  }, [fromChainId, fromChainKey]);

  // Determine button state with detailed feedback
  const buttonState: ButtonState = useMemo(() => {
    if (!isConnected) {
      return { text: 'Connect Wallet', disabled: true, variant: 'primary' };
    }
    if (!fromChainId) {
      return { text: 'Select Source Chain', disabled: true, variant: 'primary' };
    }
    if (!fromToken) {
      return { text: 'Select Token', disabled: true, variant: 'primary' };
    }
    if (!amount || parseFloat(amount) <= 0) {
      return { text: 'Enter Amount', disabled: true, variant: 'primary' };
    }
    if (isBalanceLoading) {
      return { text: 'Checking Balance...', disabled: true, variant: 'primary', showLoader: true };
    }
    if (!hasSufficientBalance) {
      return { text: 'Insufficient Balance', disabled: true, variant: 'error' };
    }
    if (isWrongNetwork) {
      return { text: `Switch to ${fromChainName || 'Source Chain'}`, disabled: false, variant: 'warning' };
    }
    if (isLoadingQuote) {
      return { text: 'Finding Best Route...', disabled: true, variant: 'primary', showLoader: true };
    }
    if (quoteError) {
      return { text: 'No Route Available', disabled: true, variant: 'error' };
    }
    if (isQuoteFetched && !quote) {
      return { text: 'No Route Found', disabled: true, variant: 'error' };
    }
    if (isExecuting) {
      return { text: 'Bridging...', disabled: true, variant: 'primary', showLoader: true };
    }
    if (quote) {
      return { text: 'Bridge to Hyperliquid', disabled: false, variant: 'primary' };
    }
    return { text: 'Bridge to Hyperliquid', disabled: true, variant: 'primary' };
  }, [
    isConnected, fromChainId, fromToken, amount, isBalanceLoading, 
    hasSufficientBalance, isWrongNetwork, isLoadingQuote, quoteError,
    isQuoteFetched, quote, isExecuting
  ]);

  // Handle bridge execution or network switch
  const handleBridge = async () => {
    if (isWrongNetwork && fromChainId) {
      switchChain?.({ chainId: fromChainId as 1 | 10 | 42161 | 137 | 8453 | 56 | 43114 | 998 });
      return;
    }
    if (!quote) return;
    
    const success = await execute(quote);
    
    if (success && autoDeposit && toToken.symbol === 'USDC') {
      setShowDepositModal(true);
    }
  };

  // Handle max button
  const handleMax = () => {
    if (balance) {
      const isNative = fromToken?.address === '0x0000000000000000000000000000000000000000';
      const maxAmount = isNative 
        ? Math.max(0, parseFloat(balance.formatted) - 0.01)
        : parseFloat(balance.formatted);
      setAmount(maxAmount.toString());
    }
  };

  // Generate detailed error/info message
  const statusMessage = useMemo(() => {
    if (!isConnected) return null;
    if (!hasSufficientBalance && amount && parseFloat(amount) > 0) {
      const needed = parseFloat(amount);
      const have = balance ? parseFloat(balance.formatted) : 0;
      return {
        type: 'error' as const,
        message: `You need ${formatAmount(needed.toString(), 4)} ${fromToken?.symbol} but only have ${formatAmount(have.toString(), 4)}`,
      };
    }
    if (quoteError) {
      return {
        type: 'error' as const,
        message: quoteError.message || 'Failed to find a route. Try a different amount or token.',
      };
    }
    if (isQuoteFetched && !quote && !isLoadingQuote && amount && parseFloat(amount) > 0 && hasSufficientBalance) {
      return {
        type: 'warning' as const,
        message: 'No bridge route found for this pair. Try a larger amount or different token.',
      };
    }
    if (isWrongNetwork && fromChainId) {
      return {
        type: 'info' as const,
        message: 'You need to switch networks to bridge from this chain.',
      };
    }
    return null;
  }, [isConnected, hasSufficientBalance, amount, balance, fromToken, quoteError, isQuoteFetched, quote, isLoadingQuote, isWrongNetwork, fromChainId]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4 px-4 sm:px-0">
      {/* Main Bridge Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5 sm:p-6"
      >
        <div className="space-y-5">
          {/* From Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/50">From</span>
              {balance && fromToken && (
                <span className={cn(
                  'text-xs',
                  !hasSufficientBalance && amount && parseFloat(amount) > 0 
                    ? 'text-red-400' 
                    : 'text-white/30'
                )}>
                  Balance: {formatAmount(balance.formatted)} {fromToken.symbol}
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <ChainSelector
                selectedChainId={fromChainId}
                selectedChainKey={fromChainKey}
                onSelect={(chainId, chainKey) => {
                  setFromChainId(chainId);
                  setFromChainKey(chainKey || null);
                }}
              />
              <TokenSelector
                chainId={fromChainId}
                selectedToken={fromToken}
                onSelect={setFromToken}
              />
            </div>

            {/* Amount Input */}
            <div className="relative">
              <input
                type="number"
                inputMode="decimal"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={!fromToken}
                className={cn(
                  'w-full bg-dark-700 border rounded-xl px-4 py-4 pr-16',
                  'text-xl sm:text-2xl font-semibold text-white placeholder-white/20',
                  'focus:outline-none',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'transition-colors duration-200',
                  !hasSufficientBalance && amount && parseFloat(amount) > 0
                    ? 'border-red-500/50 focus:border-red-500'
                    : 'border-dark-400/30 focus:border-accent/40'
                )}
              />
              {balance && fromToken && (
                <button
                  onClick={handleMax}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold 
                             text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                >
                  MAX
                </button>
              )}
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="flex items-center justify-center">
            <div className="p-2 bg-dark-700 border border-dark-400/30 rounded-xl">
              <ArrowDown className="w-4 h-4 text-white/40" />
            </div>
          </div>

          {/* To Section */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-white/50">To (Hyperliquid)</span>
            
            {/* Destination Token Selector */}
            <div className="flex gap-2">
              {hyperliquidTokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => setToToken(token)}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all',
                    'active:scale-[0.98]',
                    toToken.symbol === token.symbol
                      ? 'bg-accent/10 border border-accent/40'
                      : 'bg-dark-700 border border-dark-400/30 hover:border-dark-300/50'
                  )}
                >
                  <img
                    src={token.logo}
                    alt={token.symbol}
                    className="w-5 h-5 rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/20';
                    }}
                  />
                  <span className={cn(
                    'font-medium text-sm',
                    toToken.symbol === token.symbol ? 'text-accent' : 'text-white/70'
                  )}>
                    {token.symbol}
                  </span>
                </button>
              ))}
            </div>

            {/* Hyperliquid Badge */}
            <div className="flex items-center gap-2.5 p-3 bg-dark-700/50 rounded-xl border border-dark-400/20">
              <img 
                src="/assets/green.png" 
                alt="Hyperliquid" 
                className="h-7 w-auto"
              />
              <div>
                <div className="text-sm font-medium text-white">Hyperliquid</div>
                <div className="text-xs text-white/40">Chain ID: {HYPERLIQUID_CHAIN_ID}</div>
              </div>
            </div>
          </div>

          {/* Auto-Deposit Toggle */}
          {toToken.symbol === 'USDC' && (
            <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-xl border border-dark-400/20">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Auto-deposit to Hyperliquid</span>
              </div>
              <button
                onClick={() => setAutoDeposit(!autoDeposit)}
                className={cn(
                  'relative w-10 h-5 rounded-full transition-colors duration-200',
                  autoDeposit ? 'bg-accent' : 'bg-dark-500'
                )}
              >
                <motion.div
                  animate={{ x: autoDeposit ? 20 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"
                />
              </button>
            </div>
          )}

          {/* Status/Error Message */}
          <AnimatePresence mode="wait">
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className={cn(
                  'flex items-start gap-2 p-3 rounded-xl text-sm',
                  statusMessage.type === 'error' && 'bg-red-500/10 border border-red-500/20 text-red-400',
                  statusMessage.type === 'warning' && 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400',
                  statusMessage.type === 'info' && 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                )}
              >
                {statusMessage.type === 'error' && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                {statusMessage.type === 'warning' && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                {statusMessage.type === 'info' && <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                <span>{statusMessage.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bridge Button */}
          <Button
            onClick={handleBridge}
            disabled={buttonState.disabled}
            className={cn(
              'w-full',
              buttonState.variant === 'error' && 'bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30',
              buttonState.variant === 'warning' && 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30'
            )}
            size="lg"
          >
            <span className="flex items-center justify-center gap-2">
              {buttonState.showLoader && <Loader2 className="w-4 h-4 animate-spin" />}
              {buttonState.text}
            </span>
          </Button>
        </div>
      </motion.div>

      {/* Quote Display */}
      {(isLoadingQuote || quote) && (
        <QuoteCard
          quote={quote || null}
          isLoading={isLoadingQuote}
          error={quoteError?.message}
        />
      )}

      {/* Execution Progress */}
      <ExecutionProgress
        status={executionStatus}
        onClose={() => {
          resetExecution();
          if (executionStatus.status === 'completed') {
            setAmount('');
          }
        }}
      />

      {/* Deposit Modal */}
      {showDepositModal && quote && (
        <DepositToHyperliquid
          amount={formatAmount(Number(quote.toAmount) / Math.pow(10, quote.toToken.decimals), 2)}
          isOpen={showDepositModal}
          onClose={() => setShowDepositModal(false)}
          onSuccess={() => {
            setShowDepositModal(false);
            setAmount('');
          }}
        />
      )}
    </div>
  );
}
