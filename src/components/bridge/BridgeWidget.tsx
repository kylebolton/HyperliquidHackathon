import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAccount, useBalance, useSwitchChain } from 'wagmi';
import { parseUnits } from 'viem';
import { ArrowDown, AlertCircle, Loader2, Info, RefreshCw, Shield } from 'lucide-react';
import { cn, formatAmount } from '../../lib/utils';
import { ChainSelector, TokenSelector } from './ChainTokenSelector';
import { QuoteCard } from './QuoteCard';
import { ExecutionProgress } from './ExecutionProgress';
import { RouteOptions } from './RouteOptions';
import { SlippageSettings } from './SlippageSettings';
import { PrivacyToggle } from './PrivacyToggle';
import { PrivacyProgress } from './PrivacyProgress';
import { NetworkSwitchModal } from './NetworkSwitchModal';
import { DepositToHyperliquid } from '../deposit/DepositToHyperliquid';
import { Button } from '../ui/Button';
import { useLiFiRoutes } from '../../hooks/useLiFiQuote';
import { useRetryExecution } from '../../hooks/useRetryExecution';
import { usePrivacyRoutes, usePrivacyExecution, isPrivacyRoute } from '../../hooks/usePrivacyRoute';
import { useTransactionStatus, getStatusMessage } from '../../hooks/useTransactionStatus';
import { hyperliquidTokens, type Token } from '../../config/tokens';
import { HYPERLIQUID_CHAIN_ID, sourceSelectorChains, chainMetadata } from '../../config/chains';
import type { Quote, PrivacyRouteQuote } from '../../types';

type ButtonState = {
  text: string;
  disabled: boolean;
  variant: 'primary' | 'error' | 'warning';
  showLoader?: boolean;
};

type StatusMessage = {
  type: 'error' | 'warning' | 'info';
  message: string;
  title?: string;
  action?: string;
  canRetry?: boolean;
} | null;

export function BridgeWidget() {
  const { address, isConnected, chainId: connectedChainId } = useAccount();
  const { switchChain } = useSwitchChain();
  
  // Bridge state
  const [fromChainId, setFromChainId] = useState<number | null>(null);
  const [fromChainKey, setFromChainKey] = useState<string | null>(null);
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token>(hyperliquidTokens[0]); // Default to USDC
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState(1.0); // 1% default slippage
  const [autoDeposit, setAutoDeposit] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showNetworkSwitchModal, setShowNetworkSwitchModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Quote | null>(null);
  const [privacyEnabled, setPrivacyEnabled] = useState(false);

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

  // Get standard routes
  const { 
    data: standardRoutes, 
    isLoading: isLoadingStandardRoutes, 
    error: standardRouteError,
    isFetched: isStandardRoutesFetched,
    refetch: refetchStandardRoutes,
  } = useLiFiRoutes({
    fromChainId,
    fromTokenAddress: fromToken?.address || null,
    toTokenAddress: toToken.address,
    amount: amountInUnits,
    slippage,
    enabled: !!fromChainId && !!fromToken && !!amount && parseFloat(amount) > 0 && hasSufficientBalance && !privacyEnabled,
  });

  // Get privacy-enhanced routes when privacy is enabled
  const {
    standardRoutes: privacyStandardRoutes,
    privacyRoutes,
    isLoading: isLoadingPrivacyRoutes,
    error: privacyRouteError,
    refetch: refetchPrivacyRoutes,
  } = usePrivacyRoutes({
    fromChainId,
    fromTokenAddress: fromToken?.address || null,
    toTokenAddress: toToken.address,
    amount: amountInUnits,
    slippage,
    privacyEnabled,
    enabled: !!fromChainId && !!fromToken && !!amount && parseFloat(amount) > 0 && hasSufficientBalance && privacyEnabled,
  });

  // Combine routes based on privacy mode
  const routes = useMemo(() => {
    if (privacyEnabled) {
      // Show privacy routes first, then standard routes from privacy hook
      return [...privacyRoutes, ...privacyStandardRoutes];
    }
    return standardRoutes || [];
  }, [privacyEnabled, privacyRoutes, privacyStandardRoutes, standardRoutes]);

  const isLoadingRoutes = privacyEnabled ? isLoadingPrivacyRoutes : isLoadingStandardRoutes;
  const routeError = privacyEnabled ? privacyRouteError : standardRouteError;
  const isRoutesFetched = privacyEnabled ? (privacyRoutes.length > 0 || privacyStandardRoutes.length > 0) : isStandardRoutesFetched;
  
  const refetchRoutes = () => {
    if (privacyEnabled) {
      refetchPrivacyRoutes();
    } else {
      refetchStandardRoutes();
    }
  };

  // Auto-select best route when routes change
  useEffect(() => {
    if (routes && routes.length > 0) {
      setSelectedRoute(routes[0]);
    } else {
      setSelectedRoute(null);
    }
  }, [routes]);

  // Execution with retry support (standard routes)
  const { 
    status: executionStatus, 
    stepExecutions,
    execute, 
    retry,
    reset: resetExecution, 
    isExecuting: isStandardExecuting,
    lastError,
    canRetry,
    retryCount,
    maxRetries,
  } = useRetryExecution();

  // Privacy execution
  const {
    executionState: privacyExecutionState,
    executePrivacyRoute,
    reset: resetPrivacyExecution,
    isExecuting: isPrivacyExecuting,
  } = usePrivacyExecution();

  const isExecuting = isStandardExecuting || isPrivacyExecuting;

  // Transaction status polling for cross-chain tracking
  const { status: txStatus, isPolling } = useTransactionStatus({
    txHash: executionStatus.txHash,
    fromChainId: fromChainId || undefined,
    enabled: !!executionStatus.txHash && executionStatus.status === 'processing',
    onComplete: () => {
      // Transaction completed on destination chain
    },
    onFailed: () => {
      // Transaction failed
    },
  });

  // Check if on wrong network
  const isWrongNetwork = fromChainId && connectedChainId !== fromChainId;

  // Get chain name for display
  const fromChainName = fromChainKey 
    ? sourceSelectorChains.find(c => c.key === fromChainKey)?.name 
    : sourceSelectorChains.find(c => c.id === fromChainId)?.name;
  
  // Get chain info for modal
  const fromChainLogo = fromChainId ? chainMetadata[fromChainId]?.logo : undefined;
  const currentChainName = connectedChainId ? chainMetadata[connectedChainId]?.name : undefined;

  // Reset token when chain changes
  useEffect(() => {
    setFromToken(null);
    setAmount('');
    setSelectedRoute(null);
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
      return { text: `Switch to ${fromChainName || 'Source Chain'}`, disabled: false, variant: 'primary' };
    }
    if (isLoadingRoutes) {
      return { text: 'Finding Best Routes...', disabled: true, variant: 'primary', showLoader: true };
    }
    if (routeError) {
      return { text: 'No Route Available', disabled: true, variant: 'error' };
    }
    if (isRoutesFetched && (!routes || routes.length === 0)) {
      return { text: 'No Route Found', disabled: true, variant: 'error' };
    }
    if (isExecuting) {
      const text = privacyEnabled && isPrivacyExecuting ? 'Privacy Bridging...' : 'Bridging...';
      return { text, disabled: true, variant: 'primary', showLoader: true };
    }
    if (selectedRoute) {
      const isPrivate = isPrivacyRoute(selectedRoute);
      const text = isPrivate ? 'Private Bridge to Hyperliquid' : 'Bridge to Hyperliquid';
      return { text, disabled: false, variant: 'primary' };
    }
    return { text: 'Select a Route', disabled: true, variant: 'primary' };
  }, [
    isConnected, fromChainId, fromToken, amount, isBalanceLoading, 
    hasSufficientBalance, isWrongNetwork, isLoadingRoutes, routeError,
    isRoutesFetched, routes, isExecuting, selectedRoute, fromChainName,
    privacyEnabled, isPrivacyExecuting
  ]);

  // Handle network switch from modal
  const handleNetworkSwitch = () => {
    if (fromChainId) {
      switchChain?.({ chainId: fromChainId as 1 | 10 | 42161 | 137 | 8453 | 56 | 43114 | 998 });
    }
    setShowNetworkSwitchModal(false);
  };

  // Handle bridge execution or network switch
  const handleBridge = async () => {
    if (isWrongNetwork && fromChainId) {
      setShowNetworkSwitchModal(true);
      return;
    }
    if (!selectedRoute) return;
    
    let success = false;
    
    // Check if this is a privacy route
    if (isPrivacyRoute(selectedRoute)) {
      success = await executePrivacyRoute(selectedRoute as PrivacyRouteQuote);
    } else {
      success = await execute(selectedRoute);
    }
    
    if (success && autoDeposit && toToken.symbol === 'USDC') {
      setShowDepositModal(true);
    }
  };

  // Handle retry
  const handleRetry = async () => {
    await retry();
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
  const statusMessage: StatusMessage = useMemo(() => {
    if (!isConnected) return null;
    
    // Show last error with action
    if (lastError && executionStatus.status === 'failed') {
      return {
        type: 'error',
        title: lastError.title,
        message: lastError.message,
        action: lastError.action,
        canRetry: canRetry,
      };
    }
    
    if (!hasSufficientBalance && amount && parseFloat(amount) > 0) {
      const needed = parseFloat(amount);
      const have = balance ? parseFloat(balance.formatted) : 0;
      return {
        type: 'error',
        message: `You need ${formatAmount(needed.toString(), 4)} ${fromToken?.symbol} but only have ${formatAmount(have.toString(), 4)}`,
      };
    }
    if (routeError) {
      return {
        type: 'error',
        message: routeError.message || 'Failed to find a route. Try a different amount or token.',
      };
    }
    if (isRoutesFetched && (!routes || routes.length === 0) && !isLoadingRoutes && amount && parseFloat(amount) > 0 && hasSufficientBalance) {
      return {
        type: 'warning',
        message: 'No bridge route found for this pair. Try a larger amount or different token.',
      };
    }
    if (isWrongNetwork && fromChainId) {
      return {
        type: 'info',
        message: 'You need to switch networks to bridge from this chain.',
      };
    }
    // Show transaction status when polling
    if (isPolling && txStatus) {
      return {
        type: 'info',
        message: getStatusMessage(txStatus),
      };
    }
    return null;
  }, [isConnected, hasSufficientBalance, amount, balance, fromToken, routeError, isRoutesFetched, routes, isLoadingRoutes, isWrongNetwork, fromChainId, lastError, executionStatus.status, canRetry, isPolling, txStatus]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4 px-4 sm:px-0">
      {/* Main Bridge Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5 sm:p-6"
      >
        <div className="space-y-5">
          {/* Header with Privacy Toggle and Slippage Settings */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/50">From</span>
              {privacyEnabled && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded-full">
                  <Shield className="w-3 h-3 text-purple-400" />
                  <span className="text-xs font-medium text-purple-400">Private</span>
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
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
              <PrivacyToggle
                enabled={privacyEnabled}
                onToggle={setPrivacyEnabled}
                disabled={isExecuting}
              />
              <SlippageSettings slippage={slippage} onSlippageChange={setSlippage} />
            </div>
          </div>
          
          {/* Chain & Token Selection */}
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
              <div className="flex-1">
                <span className="text-sm text-white/90">Auto-deposit to trading</span>
                <p className="text-[11px] text-white/40 mt-0.5">
                  {autoDeposit 
                    ? 'USDC will be ready to trade immediately'
                    : 'You can deposit manually after bridging'}
                </p>
              </div>
              <button
                onClick={() => setAutoDeposit(!autoDeposit)}
                className={cn(
                  'relative w-10 h-5 rounded-full transition-colors duration-200 ml-3',
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
                  'p-3 rounded-xl text-sm',
                  statusMessage.type === 'error' && 'bg-red-500/10 border border-red-500/20',
                  statusMessage.type === 'warning' && 'bg-yellow-500/10 border border-yellow-500/20',
                  statusMessage.type === 'info' && 'bg-blue-500/10 border border-blue-500/20'
                )}
              >
                <div className="flex items-start gap-2">
                  {statusMessage.type === 'error' && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />}
                  {statusMessage.type === 'warning' && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />}
                  {statusMessage.type === 'info' && <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />}
                  <div className="flex-1">
                    {statusMessage.title && (
                      <p className={cn(
                        'font-medium mb-0.5',
                        {
                          'text-red-400': statusMessage.type === 'error',
                          'text-yellow-400': statusMessage.type === 'warning',
                          'text-blue-400': statusMessage.type === 'info',
                        }
                      )}>
                        {statusMessage.title}
                      </p>
                    )}
                    <p className={cn({
                      'text-red-400/80': statusMessage.type === 'error',
                      'text-yellow-400/80': statusMessage.type === 'warning',
                      'text-blue-400/80': statusMessage.type === 'info',
                    })}>
                      {statusMessage.message}
                    </p>
                    {statusMessage.action && (
                      <p className="text-white/50 mt-1 text-xs">
                        {statusMessage.action}
                      </p>
                    )}
                  </div>
                </div>
                {statusMessage.canRetry && (
                  <button
                    onClick={handleRetry}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Retry ({retryCount}/{maxRetries})
                  </button>
                )}
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

      {/* Route Options - Shows multiple routes for comparison */}
      {(isLoadingRoutes || (routes && routes.length > 0)) && (
        <RouteOptions
          routes={routes || []}
          selectedRoute={selectedRoute}
          onSelectRoute={setSelectedRoute}
          isLoading={isLoadingRoutes}
        />
      )}

      {/* Quote Display - Shows selected route details */}
      {selectedRoute && !isLoadingRoutes && (
        <QuoteCard
          quote={selectedRoute}
          isLoading={false}
          error={undefined}
        />
      )}

      {/* Execution Progress - Standard */}
      {!privacyEnabled && (
        <ExecutionProgress
          status={executionStatus}
          steps={selectedRoute?.steps}
          stepStatuses={stepExecutions}
          onClose={() => {
            resetExecution();
            if (executionStatus.status === 'completed') {
              setAmount('');
              setSelectedRoute(null);
              refetchRoutes();
            }
          }}
          onRetry={canRetry ? handleRetry : undefined}
        />
      )}

      {/* Execution Progress - Privacy */}
      {privacyEnabled && privacyExecutionState.status !== 'idle' && (
        <PrivacyProgress
          executionState={privacyExecutionState}
          onClose={() => {
            resetPrivacyExecution();
            if (privacyExecutionState.status === 'completed') {
              setAmount('');
              setSelectedRoute(null);
              refetchRoutes();
            }
          }}
          onRetry={privacyExecutionState.status === 'failed' ? () => {
            if (selectedRoute && isPrivacyRoute(selectedRoute)) {
              executePrivacyRoute(selectedRoute as PrivacyRouteQuote);
            }
          } : undefined}
        />
      )}

      {/* Network Switch Modal */}
      <NetworkSwitchModal
        isOpen={showNetworkSwitchModal}
        onClose={() => setShowNetworkSwitchModal(false)}
        onSwitch={handleNetworkSwitch}
        fromChainName={fromChainName || 'Unknown Chain'}
        fromChainLogo={fromChainLogo}
        currentChainName={currentChainName}
      />

      {/* Deposit Modal */}
      {showDepositModal && selectedRoute && (
        <DepositToHyperliquid
          amount={formatAmount(Number(selectedRoute.toAmount) / Math.pow(10, selectedRoute.toToken.decimals), 2)}
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
