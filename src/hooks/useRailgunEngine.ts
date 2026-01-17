/**
 * RAILGUN Engine React Hook
 * 
 * This hook manages the RAILGUN engine lifecycle and provides reactive state updates.
 * The engine must be initialized before any privacy operations can be performed.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  initializeRailgunEngine,
  subscribeToEngineState,
  getEngineState,
  type EngineState,
  type RailgunEngineConfig,
} from '../services/railgun';

interface UseRailgunEngineReturn {
  /** Current engine state */
  state: EngineState;
  /** Whether the engine is ready for operations */
  isReady: boolean;
  /** Whether the engine is currently initializing */
  isInitializing: boolean;
  /** Whether there was an initialization error */
  hasError: boolean;
  /** Error message if any */
  error: string | undefined;
  /** Manually trigger engine initialization */
  initialize: () => Promise<boolean>;
}

/**
 * Hook for managing the RAILGUN engine lifecycle
 * 
 * @param autoInitialize - Whether to automatically initialize on mount (default: true)
 * @param config - Optional engine configuration
 * @returns Engine state and control functions
 * 
 * @example
 * ```tsx
 * function App() {
 *   const { isReady, isInitializing, error, initialize } = useRailgunEngine();
 * 
 *   if (isInitializing) return <Loading />;
 *   if (error) return <Error message={error} onRetry={initialize} />;
 *   if (!isReady) return <button onClick={initialize}>Initialize Privacy</button>;
 * 
 *   return <PrivacyFeatures />;
 * }
 * ```
 */
export function useRailgunEngine(
  autoInitialize: boolean = true,
  config?: Partial<RailgunEngineConfig>
): UseRailgunEngineReturn {
  const [state, setState] = useState<EngineState>(getEngineState);
  const initAttempted = useRef(false);

  // Subscribe to engine state changes
  useEffect(() => {
    const unsubscribe = subscribeToEngineState((newState) => {
      setState(newState);
    });

    return unsubscribe;
  }, []);

  // Initialize function
  const initialize = useCallback(async () => {
    return initializeRailgunEngine(config);
  }, [config]);

  // Auto-initialize on mount if enabled
  useEffect(() => {
    if (autoInitialize && !initAttempted.current && state.status === 'uninitialized') {
      initAttempted.current = true;
      initialize();
    }
  }, [autoInitialize, initialize, state.status]);

  return {
    state,
    isReady: state.status === 'ready',
    isInitializing: state.status === 'initializing' || state.status === 'downloading_artifacts',
    hasError: state.status === 'error',
    error: state.error,
    initialize,
  };
}

/**
 * Simplified hook that just tracks engine ready state
 */
export function useIsEngineReady(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToEngineState((state) => {
      setIsReady(state.status === 'ready');
    });

    return unsubscribe;
  }, []);

  return isReady;
}
