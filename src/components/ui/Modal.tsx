import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Bottom Sheet for Mobile, Centered Modal for Desktop */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'fixed z-50',
              // Mobile: bottom sheet
              'inset-x-0 bottom-0 sm:inset-auto',
              // Desktop: centered
              'sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2',
              'w-full sm:max-w-md',
              'bg-dark-800 border-t sm:border border-dark-400/30',
              'rounded-t-3xl sm:rounded-2xl',
              'max-h-[85vh] sm:max-h-[80vh]',
              'overflow-hidden',
              className
            )}
          >
            {/* Drag Handle (Mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 bg-dark-400 rounded-full" />
            </div>

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-5 py-3 sm:py-4 border-b border-dark-400/30">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-lg hover:bg-dark-600 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>
            )}
            
            {/* Content */}
            <div className="p-5 overflow-y-auto max-h-[calc(85vh-80px)] sm:max-h-[calc(80vh-80px)] no-scrollbar safe-bottom">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
