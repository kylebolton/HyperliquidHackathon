import { motion } from 'motion/react';
import { Clock, Fuel, Zap, Trophy, ArrowRight, Check, Loader2, Shield } from 'lucide-react';
import { cn, formatAmount, formatDuration } from '../../lib/utils';
import type { Quote, PrivacyRouteQuote } from '../../types';
import { isPrivacyRoute } from '../../hooks/usePrivacyRoute';

interface RouteOptionsProps {
  routes: Quote[];
  selectedRoute: Quote | null;
  onSelectRoute: (route: Quote) => void;
  isLoading: boolean;
}

// Categorize routes by their best attribute
function categorizeRoutes(routes: Quote[]): {
  recommended: Quote | null;
  fastest: Quote | null;
  cheapest: Quote | null;
} {
  if (routes.length === 0) return { recommended: null, fastest: null, cheapest: null };

  const recommended = routes[0]; // First route from API is recommended
  
  const fastest = [...routes].sort((a, b) => a.estimatedTime - b.estimatedTime)[0];
  
  const cheapest = [...routes].sort((a, b) => {
    const aGas = parseFloat(a.gasCostUSD || '0');
    const bGas = parseFloat(b.gasCostUSD || '0');
    return aGas - bGas;
  })[0];

  return { recommended, fastest, cheapest };
}

function RouteTag({ type }: { type: 'recommended' | 'fastest' | 'cheapest' | 'private' }) {
  const config = {
    recommended: { icon: Trophy, label: 'Best', color: 'text-accent bg-accent/10' },
    fastest: { icon: Zap, label: 'Fastest', color: 'text-yellow-400 bg-yellow-400/10' },
    cheapest: { icon: Fuel, label: 'Cheapest', color: 'text-blue-400 bg-blue-400/10' },
    private: { icon: Shield, label: 'Private', color: 'text-purple-400 bg-purple-400/10' },
  };

  const { icon: Icon, label, color } = config[type];

  return (
    <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium', color)}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}

function RouteCard({
  route,
  isSelected,
  onSelect,
  tags,
}: {
  route: Quote;
  isSelected: boolean;
  onSelect: () => void;
  tags: ('recommended' | 'fastest' | 'cheapest' | 'private')[];
}) {
  const isPrivate = isPrivacyRoute(route);
  const privacyQuote = isPrivate ? (route as PrivacyRouteQuote) : null;
  // Get bridge/DEX tools being used
  const tools = route.steps.map(step => ({
    name: step.tool,
    logo: step.toolLogo,
    type: step.type,
  }));

  const outputAmount = parseFloat(route.toAmount) / Math.pow(10, route.toToken.decimals);
  const inputAmount = parseFloat(route.fromAmount) / Math.pow(10, route.fromToken.decimals);

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      className={cn(
        'w-full p-4 rounded-xl border transition-all duration-200 text-left',
        isSelected
          ? isPrivate
            ? 'bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/5'
            : 'bg-accent/10 border-accent/40 shadow-lg shadow-accent/5'
          : isPrivate
            ? 'bg-dark-700/50 border-purple-500/20 hover:border-purple-500/40'
            : 'bg-dark-700/50 border-dark-400/30 hover:border-dark-300/50'
      )}
    >
      {/* Tags Row */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <RouteTag key={tag} type={tag} />
          ))}
        </div>
      )}

      {/* Main Route Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={route.fromToken.logo}
            alt={route.fromToken.symbol}
            className="w-6 h-6 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24';
            }}
          />
          <span className="font-medium text-white">
            {formatAmount(inputAmount)} {route.fromToken.symbol}
          </span>
          <ArrowRight className="w-4 h-4 text-white/40" />
          <img
            src={route.toToken.logo}
            alt={route.toToken.symbol}
            className="w-6 h-6 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24';
            }}
          />
          <span className="font-semibold text-accent">
            {formatAmount(outputAmount)} {route.toToken.symbol}
          </span>
        </div>
        {isSelected && <Check className="w-5 h-5 text-accent" />}
      </div>

      {/* Route Details */}
      <div className="flex items-center gap-4 text-sm text-white/50">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{formatDuration(route.estimatedTime)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Fuel className="w-3.5 h-3.5" />
          <span>${formatAmount(parseFloat(route.gasCostUSD || '0'), 2)} gas</span>
        </div>
        {isPrivate && privacyQuote && (
          <div className="flex items-center gap-1.5 text-purple-400/70">
            <Shield className="w-3.5 h-3.5" />
            <span>via {privacyQuote.privacyChainName}</span>
          </div>
        )}
      </div>

      {/* Tools/Protocols Used */}
      <div className="mt-3 pt-3 border-t border-dark-400/20">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-white/30">Via:</span>
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-1.5 px-2 py-1 bg-dark-600/50 rounded-lg">
              {tool.logo && (
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-4 h-4 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <span className="text-xs text-white/70">{tool.name}</span>
              <span className={cn(
                'text-[10px] px-1 rounded',
                tool.type === 'swap' ? 'bg-blue-500/20 text-blue-300' :
                tool.type === 'bridge' ? 'bg-purple-500/20 text-purple-300' :
                'bg-accent/20 text-accent'
              )}>
                {tool.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export function RouteOptions({ routes, selectedRoute, onSelectRoute, isLoading }: RouteOptionsProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-6"
      >
        <div className="flex items-center justify-center gap-3 text-white/50">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Finding best routes...</span>
        </div>
      </motion.div>
    );
  }

  if (routes.length === 0) {
    return null;
  }

  const { recommended, fastest, cheapest } = categorizeRoutes(routes);

  // Build tag mapping
  const getRouteTags = (route: Quote): ('recommended' | 'fastest' | 'cheapest' | 'private')[] => {
    const tags: ('recommended' | 'fastest' | 'cheapest' | 'private')[] = [];
    if (isPrivacyRoute(route)) tags.push('private');
    if (route.id === recommended?.id) tags.push('recommended');
    if (route.id === fastest?.id && fastest?.id !== recommended?.id) tags.push('fastest');
    if (route.id === cheapest?.id && cheapest?.id !== recommended?.id && cheapest?.id !== fastest?.id) tags.push('cheapest');
    return tags;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white/70">
          {routes.length} Route{routes.length !== 1 ? 's' : ''} Found
        </h3>
        <span className="text-xs text-white/40">
          Select the best route for you
        </span>
      </div>

      <div className="space-y-3">
        {routes.slice(0, 5).map((route) => (
          <RouteCard
            key={route.id}
            route={route}
            isSelected={selectedRoute?.id === route.id}
            onSelect={() => onSelectRoute(route)}
            tags={getRouteTags(route)}
          />
        ))}
      </div>

      {routes.length > 5 && (
        <p className="text-center text-xs text-white/30 mt-3">
          + {routes.length - 5} more routes available
        </p>
      )}
    </motion.div>
  );
}
