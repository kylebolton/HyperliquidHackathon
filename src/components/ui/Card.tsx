import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'bordered' | 'interactive';
  children: React.ReactNode;
}

// Spring configuration for smooth interactions
const springConfig = {
  hover: { type: 'spring' as const, stiffness: 300, damping: 25 },
  layout: { type: 'spring' as const, stiffness: 350, damping: 30 },
};

export function Card({
  variant = 'default',
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-dark-800/80 border border-dark-400/30',
    bordered: 'bg-dark-800/50 border border-accent/20',
    interactive: 'bg-dark-800/80 border border-dark-400/30 cursor-pointer',
  };

  const isInteractive = variant === 'interactive';

  return (
    <motion.div
      layout
      layoutId={props.layoutId}
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={springConfig.layout}
      whileHover={isInteractive ? {
        scale: 1.01,
        boxShadow: '0 0 30px rgba(74, 222, 128, 0.1)',
        borderColor: 'rgba(74, 222, 128, 0.3)',
      } : undefined}
      whileTap={isInteractive ? { scale: 0.99 } : undefined}
      className={cn(
        'rounded-2xl p-5 sm:p-6',
        'backdrop-blur-sm',
        variants[variant],
        isInteractive && 'transition-colors',
        className
      )}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(74, 222, 128, 0.03) 0%, transparent 50%)',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

// Animated card that responds to hover with a glow effect
interface GlowCardProps extends CardProps {
  glowColor?: string;
}

export function GlowCard({
  glowColor = 'rgba(74, 222, 128, 0.15)',
  className,
  children,
  ...props
}: GlowCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={springConfig.layout}
      whileHover={{
        boxShadow: `0 0 40px ${glowColor}`,
        scale: 1.01,
      }}
      className={cn(
        'relative rounded-2xl p-5 sm:p-6',
        'bg-dark-800/80 border border-dark-400/30',
        'backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(135deg, ${glowColor} 0%, transparent 50%, ${glowColor} 100%)`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
        }}
      />
      
      {children}
    </motion.div>
  );
}
