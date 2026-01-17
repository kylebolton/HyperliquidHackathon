import { motion, AnimatePresence, type Variants } from 'motion/react';
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

// Animation variants for staggered list
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 28,
    },
  },
  exit: { 
    opacity: 0, 
    y: -10,
    scale: 0.95,
    filter: 'blur(4px)',
    transition: {
      duration: 0.2,
    },
  },
};

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
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium', color)}
    >
      <Icon className="w-3 h-3" />
      {label}
    </motion.span>
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
      layout
      layoutId={`route-${route.id}`}
      variants={itemVariants}
      whileHover={{ 
        scale: 1.015,
        boxShadow: isSelected 
          ? isPrivate
            ? '0 0 30px rgba(168, 85, 247, 0.2)'
            : '0 0 30px rgba(74, 222, 128, 0.2)'
          : '0 0 20px rgba(255, 255, 255, 0.05)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 25,
        layout: { type: 'spring', stiffness: 300, damping: 30 },
      }}
      onClick={onSelect}
      className={cn(
        'w-full p-4 rounded-xl border text-left',
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
      <AnimatePresence mode="popLayout">
        {tags.length > 0 && (
          <motion.div 
            layout
            className="flex flex-wrap gap-1.5 mb-3"
          >
            {tags.map((tag) => (
              <RouteTag key={tag} type={tag} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Route Info */}
      <motion.div layout className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.img
            src={route.fromToken.logo}
            alt={route.fromToken.symbol}
            className="w-6 h-6 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24';
            }}
            whileHover={{ scale: 1.1 }}
          />
          <span className="font-medium text-white">
            {formatAmount(inputAmount)} {route.fromToken.symbol}
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-4 h-4 text-white/40" />
          </motion.div>
          <motion.img
            src={route.toToken.logo}
            alt={route.toToken.symbol}
            className="w-6 h-6 rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/24';
            }}
            whileHover={{ scale: 1.1 }}
          />
          <span className="font-semibold text-accent">
            {formatAmount(outputAmount)} {route.toToken.symbol}
          </span>
        </div>
        <AnimatePresence mode="wait">
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check className="w-5 h-5 text-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Route Details */}
      <motion.div layout className="flex items-center gap-4 text-sm text-white/50">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{formatDuration(route.estimatedTime)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Fuel className="w-3.5 h-3.5" />
          <span>${formatAmount(parseFloat(route.gasCostUSD || '0'), 2)} gas</span>
        </div>
        {isPrivate && privacyQuote && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 text-purple-400/70"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>via {privacyQuote.privacyChainName}</span>
          </motion.div>
        )}
      </motion.div>

      {/* Tools/Protocols Used */}
      <motion.div layout className="mt-3 pt-3 border-t border-dark-400/20">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-white/30">Via:</span>
          {tools.map((tool, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-1.5 px-2 py-1 bg-dark-600/50 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.button>
  );
}

export function RouteOptions({ routes, selectedRoute, onSelectRoute, isLoading }: RouteOptionsProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-6"
      >
        <div className="flex items-center justify-center gap-3 text-white/50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Loader2 className="w-5 h-5" />
          </motion.div>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Finding best routes...
          </motion.span>
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
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5 overflow-hidden"
    >
      <motion.div 
        layout
        className="flex items-center justify-between mb-4"
      >
        <motion.h3 
          key={routes.length}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium text-white/70"
        >
          {routes.length} Route{routes.length !== 1 ? 's' : ''} Found
        </motion.h3>
        <span className="text-xs text-white/40">
          Select the best route for you
        </span>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="space-y-3"
      >
        <AnimatePresence mode="popLayout">
          {routes.slice(0, 5).map((route) => (
            <RouteCard
              key={route.id}
              route={route}
              isSelected={selectedRoute?.id === route.id}
              onSelect={() => onSelectRoute(route)}
              tags={getRouteTags(route)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {routes.length > 5 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs text-white/30 mt-3"
          >
            + {routes.length - 5} more routes available
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
