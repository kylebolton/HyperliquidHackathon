export interface ParsedError {
  code: ErrorCode;
  title: string;
  message: string;
  action: string;
  isRetryable: boolean;
}

export type ErrorCode =
  | 'INSUFFICIENT_FUNDS'
  | 'INSUFFICIENT_GAS'
  | 'USER_REJECTED'
  | 'SLIPPAGE_TOO_HIGH'
  | 'NETWORK_ERROR'
  | 'RPC_ERROR'
  | 'TIMEOUT'
  | 'ROUTE_NOT_FOUND'
  | 'BRIDGE_ERROR'
  | 'APPROVAL_FAILED'
  | 'TRANSACTION_FAILED'
  | 'WALLET_NOT_CONNECTED'
  | 'UNKNOWN';

// Error patterns to match against error messages
const ERROR_PATTERNS: Array<{
  patterns: RegExp[];
  code: ErrorCode;
  title: string;
  message: string;
  action: string;
  isRetryable: boolean;
}> = [
  {
    patterns: [
      /insufficient funds/i,
      /insufficient balance/i,
      /not enough balance/i,
      /balance too low/i,
    ],
    code: 'INSUFFICIENT_FUNDS',
    title: 'Insufficient Balance',
    message: "You don't have enough tokens for this transaction.",
    action: 'Try a smaller amount or add funds to your wallet.',
    isRetryable: false,
  },
  {
    patterns: [
      /insufficient.*gas/i,
      /gas required exceeds/i,
      /out of gas/i,
      /intrinsic gas too low/i,
    ],
    code: 'INSUFFICIENT_GAS',
    title: 'Not Enough Gas',
    message: "You don't have enough native tokens to pay for gas.",
    action: 'Add more ETH/native tokens to your wallet for gas fees.',
    isRetryable: false,
  },
  {
    patterns: [
      /user rejected/i,
      /user denied/i,
      /user cancelled/i,
      /rejected by user/i,
      /action_rejected/i,
      /canceled/i,
    ],
    code: 'USER_REJECTED',
    title: 'Transaction Cancelled',
    message: 'You rejected the transaction in your wallet.',
    action: "Click 'Bridge' again when you're ready to proceed.",
    isRetryable: false,
  },
  {
    patterns: [
      /slippage/i,
      /price impact too high/i,
      /price changed/i,
      /swap failed.*price/i,
      /min amount/i,
    ],
    code: 'SLIPPAGE_TOO_HIGH',
    title: 'Price Changed',
    message: 'The price moved too much during the transaction.',
    action: 'Try again or increase your slippage tolerance in settings.',
    isRetryable: true,
  },
  {
    patterns: [
      /network error/i,
      /connection.*failed/i,
      /network request failed/i,
      /fetch failed/i,
      /econnreset/i,
      /socket hang up/i,
    ],
    code: 'NETWORK_ERROR',
    title: 'Network Issue',
    message: 'Could not connect to the network.',
    action: 'Check your internet connection and try again.',
    isRetryable: true,
  },
  {
    patterns: [
      /rpc.*error/i,
      /rpc.*failed/i,
      /provider error/i,
      /internal json-rpc error/i,
      /execution reverted/i,
    ],
    code: 'RPC_ERROR',
    title: 'RPC Error',
    message: 'The blockchain node returned an error.',
    action: 'Wait a moment and try again. The network may be congested.',
    isRetryable: true,
  },
  {
    patterns: [
      /timeout/i,
      /timed out/i,
      /request timeout/i,
      /deadline exceeded/i,
    ],
    code: 'TIMEOUT',
    title: 'Request Timeout',
    message: 'The request took too long to complete.',
    action: 'Try again. If it persists, the network may be congested.',
    isRetryable: true,
  },
  {
    patterns: [
      /hyperliquid.*not.*supported/i,
      /not.*supported.*li\.?fi/i,
      /toChainId must be equal/i,
      /destination chain.*not supported/i,
      /chain.*not.*allowed/i,
    ],
    code: 'ROUTE_NOT_FOUND',
    title: 'Hyperliquid Not Supported',
    message: 'LI.FI does not currently support Hyperliquid as a destination chain.',
    action: 'Check back later as LI.FI continues to add new chains.',
    isRetryable: false,
  },
  {
    patterns: [
      /no route/i,
      /route not found/i,
      /no path/i,
      /cannot find route/i,
      /no quotes/i,
      /no available routes/i,
    ],
    code: 'ROUTE_NOT_FOUND',
    title: 'No Route Available',
    message: 'No bridge route found for this token pair.',
    action: 'Try a different token, amount, or source chain.',
    isRetryable: false,
  },
  {
    patterns: [
      /bridge.*error/i,
      /bridge.*failed/i,
      /bridging failed/i,
      /cross-chain.*failed/i,
    ],
    code: 'BRIDGE_ERROR',
    title: 'Bridge Error',
    message: 'The bridge transaction failed.',
    action: 'Try again or select a different route.',
    isRetryable: true,
  },
  {
    patterns: [
      /approval.*failed/i,
      /approve.*failed/i,
      /allowance/i,
      /permit/i,
    ],
    code: 'APPROVAL_FAILED',
    title: 'Approval Failed',
    message: 'Token approval transaction failed.',
    action: 'Try approving the token again.',
    isRetryable: true,
  },
  {
    patterns: [
      /transaction.*failed/i,
      /tx.*failed/i,
      /execution failed/i,
      /call exception/i,
      /revert/i,
    ],
    code: 'TRANSACTION_FAILED',
    title: 'Transaction Failed',
    message: 'The transaction could not be completed.',
    action: 'Check your token balance and try again.',
    isRetryable: true,
  },
  {
    patterns: [
      /wallet not connected/i,
      /no wallet/i,
      /connect wallet/i,
      /not connected/i,
    ],
    code: 'WALLET_NOT_CONNECTED',
    title: 'Wallet Not Connected',
    message: 'Your wallet is not connected.',
    action: 'Connect your wallet to continue.',
    isRetryable: false,
  },
];

// Default error for unknown cases
const DEFAULT_ERROR: Omit<ParsedError, 'code'> = {
  title: 'Something Went Wrong',
  message: 'An unexpected error occurred.',
  action: 'Please try again. If the problem persists, contact support.',
  isRetryable: true,
};

/**
 * Parse an error message and return user-friendly error info
 */
export function parseErrorMessage(errorMessage: string): ParsedError {
  // Try to match against known patterns
  for (const errorConfig of ERROR_PATTERNS) {
    for (const pattern of errorConfig.patterns) {
      if (pattern.test(errorMessage)) {
        return {
          code: errorConfig.code,
          title: errorConfig.title,
          message: errorConfig.message,
          action: errorConfig.action,
          isRetryable: errorConfig.isRetryable,
        };
      }
    }
  }

  // Return unknown error with original message
  return {
    code: 'UNKNOWN',
    title: DEFAULT_ERROR.title,
    message: errorMessage || DEFAULT_ERROR.message,
    action: DEFAULT_ERROR.action,
    isRetryable: DEFAULT_ERROR.isRetryable,
  };
}

/**
 * Get error by code (useful for testing or direct lookup)
 */
export function getErrorByCode(code: ErrorCode): ParsedError {
  const config = ERROR_PATTERNS.find(e => 
    e.patterns.some(() => e.code === code)
  );
  
  if (config) {
    return {
      code: config.code,
      title: config.title,
      message: config.message,
      action: config.action,
      isRetryable: config.isRetryable,
    };
  }

  return {
    code,
    ...DEFAULT_ERROR,
  };
}

/**
 * Create a user-friendly error message from any error type
 */
export function formatError(error: unknown): ParsedError {
  if (error instanceof Error) {
    return parseErrorMessage(error.message);
  }
  if (typeof error === 'string') {
    return parseErrorMessage(error);
  }
  if (error && typeof error === 'object' && 'message' in error) {
    return parseErrorMessage(String((error as { message: unknown }).message));
  }
  return parseErrorMessage('Unknown error occurred');
}
