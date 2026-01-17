import { describe, it, expect } from 'vitest';
import { 
  parseErrorMessage, 
  getErrorByCode, 
  formatError,
  type ErrorCode,
  type ParsedError,
} from './errors';

describe('Error Handling', () => {
  describe('parseErrorMessage', () => {
    describe('Insufficient Funds', () => {
      it('should detect insufficient funds error', () => {
        const result = parseErrorMessage('insufficient funds for gas');
        expect(result.code).toBe('INSUFFICIENT_FUNDS');
        expect(result.title).toBe('Insufficient Balance');
        expect(result.isRetryable).toBe(false);
      });

      it('should detect insufficient balance error', () => {
        const result = parseErrorMessage('User has insufficient balance');
        expect(result.code).toBe('INSUFFICIENT_FUNDS');
      });

      it('should detect balance too low error', () => {
        const result = parseErrorMessage('Your balance too low for this transaction');
        expect(result.code).toBe('INSUFFICIENT_FUNDS');
      });
    });

    describe('Insufficient Gas', () => {
      it('should detect insufficient gas error', () => {
        const result = parseErrorMessage('insufficient gas for transaction');
        expect(result.code).toBe('INSUFFICIENT_GAS');
        expect(result.title).toBe('Not Enough Gas');
        expect(result.isRetryable).toBe(false);
      });

      it('should detect gas required exceeds error', () => {
        const result = parseErrorMessage('gas required exceeds allowance');
        expect(result.code).toBe('INSUFFICIENT_GAS');
      });

      it('should detect intrinsic gas too low error', () => {
        const result = parseErrorMessage('intrinsic gas too low');
        expect(result.code).toBe('INSUFFICIENT_GAS');
      });
    });

    describe('User Rejected', () => {
      it('should detect user rejected error', () => {
        const result = parseErrorMessage('user rejected transaction');
        expect(result.code).toBe('USER_REJECTED');
        expect(result.title).toBe('Transaction Cancelled');
        expect(result.isRetryable).toBe(false);
      });

      it('should detect user denied error', () => {
        const result = parseErrorMessage('User denied the request');
        expect(result.code).toBe('USER_REJECTED');
      });

      it('should detect action_rejected error', () => {
        const result = parseErrorMessage('action_rejected');
        expect(result.code).toBe('USER_REJECTED');
      });

      it('should detect canceled error', () => {
        const result = parseErrorMessage('Transaction was canceled by user');
        expect(result.code).toBe('USER_REJECTED');
      });
    });

    describe('Slippage/Price Issues', () => {
      it('should detect slippage error', () => {
        const result = parseErrorMessage('slippage tolerance exceeded');
        expect(result.code).toBe('SLIPPAGE_TOO_HIGH');
        expect(result.title).toBe('Price Changed');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect price impact error', () => {
        const result = parseErrorMessage('price impact too high');
        expect(result.code).toBe('SLIPPAGE_TOO_HIGH');
      });

      it('should detect min amount error', () => {
        const result = parseErrorMessage('received less than min amount');
        expect(result.code).toBe('SLIPPAGE_TOO_HIGH');
      });
    });

    describe('Network Errors', () => {
      it('should detect network error', () => {
        const result = parseErrorMessage('network error occurred');
        expect(result.code).toBe('NETWORK_ERROR');
        expect(result.title).toBe('Network Issue');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect connection failed error', () => {
        const result = parseErrorMessage('connection to server failed');
        expect(result.code).toBe('NETWORK_ERROR');
      });

      it('should detect fetch failed error', () => {
        const result = parseErrorMessage('fetch failed');
        expect(result.code).toBe('NETWORK_ERROR');
      });

      it('should detect socket hang up error', () => {
        const result = parseErrorMessage('socket hang up');
        expect(result.code).toBe('NETWORK_ERROR');
      });
    });

    describe('RPC Errors', () => {
      it('should detect RPC error', () => {
        const result = parseErrorMessage('RPC error: internal error');
        expect(result.code).toBe('RPC_ERROR');
        expect(result.title).toBe('RPC Error');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect execution reverted error', () => {
        const result = parseErrorMessage('execution reverted');
        expect(result.code).toBe('RPC_ERROR');
      });

      it('should detect internal json-rpc error', () => {
        const result = parseErrorMessage('internal json-rpc error');
        expect(result.code).toBe('RPC_ERROR');
      });
    });

    describe('Timeout Errors', () => {
      it('should detect timeout error', () => {
        const result = parseErrorMessage('request timeout');
        expect(result.code).toBe('TIMEOUT');
        expect(result.title).toBe('Request Timeout');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect timed out error', () => {
        const result = parseErrorMessage('connection timed out');
        expect(result.code).toBe('TIMEOUT');
      });

      it('should detect deadline exceeded error', () => {
        const result = parseErrorMessage('deadline exceeded');
        expect(result.code).toBe('TIMEOUT');
      });
    });

    describe('Route Not Found Errors', () => {
      it('should detect no route error', () => {
        const result = parseErrorMessage('no route found');
        expect(result.code).toBe('ROUTE_NOT_FOUND');
        expect(result.isRetryable).toBe(false);
      });

      it('should detect no quotes error', () => {
        const result = parseErrorMessage('no quotes available');
        expect(result.code).toBe('ROUTE_NOT_FOUND');
      });

      it('should detect hyperliquid not supported error', () => {
        const result = parseErrorMessage('hyperliquid is not supported by li.fi');
        expect(result.code).toBe('ROUTE_NOT_FOUND');
      });

      it('should detect chain not allowed error', () => {
        const result = parseErrorMessage('chain ID 999 not allowed');
        expect(result.code).toBe('ROUTE_NOT_FOUND');
      });
    });

    describe('Bridge Errors', () => {
      it('should detect bridge error', () => {
        const result = parseErrorMessage('bridge transaction error');
        expect(result.code).toBe('BRIDGE_ERROR');
        expect(result.title).toBe('Bridge Error');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect bridging failed error', () => {
        const result = parseErrorMessage('bridging failed');
        expect(result.code).toBe('BRIDGE_ERROR');
      });

      it('should detect cross-chain failed error', () => {
        const result = parseErrorMessage('cross-chain transfer failed');
        expect(result.code).toBe('BRIDGE_ERROR');
      });
    });

    describe('Approval Errors', () => {
      it('should detect approval failed error', () => {
        const result = parseErrorMessage('token approval failed');
        expect(result.code).toBe('APPROVAL_FAILED');
        expect(result.title).toBe('Approval Failed');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect allowance error', () => {
        const result = parseErrorMessage('allowance not sufficient');
        expect(result.code).toBe('APPROVAL_FAILED');
      });
    });

    describe('Transaction Failed Errors', () => {
      it('should detect transaction failed error', () => {
        const result = parseErrorMessage('transaction failed');
        expect(result.code).toBe('TRANSACTION_FAILED');
        expect(result.title).toBe('Transaction Failed');
        expect(result.isRetryable).toBe(true);
      });

      it('should detect revert error', () => {
        const result = parseErrorMessage('transaction revert');
        expect(result.code).toBe('TRANSACTION_FAILED');
      });

      it('should detect call exception error', () => {
        const result = parseErrorMessage('call exception');
        expect(result.code).toBe('TRANSACTION_FAILED');
      });
    });

    describe('Wallet Not Connected', () => {
      it('should detect wallet not connected error', () => {
        const result = parseErrorMessage('wallet not connected');
        expect(result.code).toBe('WALLET_NOT_CONNECTED');
        expect(result.title).toBe('Wallet Not Connected');
        expect(result.isRetryable).toBe(false);
      });

      it('should detect no wallet error', () => {
        const result = parseErrorMessage('no wallet detected');
        expect(result.code).toBe('WALLET_NOT_CONNECTED');
      });
    });

    describe('Unknown Errors', () => {
      it('should return UNKNOWN for unrecognized errors', () => {
        const result = parseErrorMessage('some random error that does not match');
        expect(result.code).toBe('UNKNOWN');
        expect(result.title).toBe('Something Went Wrong');
        expect(result.isRetryable).toBe(true);
      });

      it('should preserve original message for unknown errors', () => {
        const errorMsg = 'A very specific error message';
        const result = parseErrorMessage(errorMsg);
        expect(result.message).toBe(errorMsg);
      });

      it('should handle empty string', () => {
        const result = parseErrorMessage('');
        expect(result.code).toBe('UNKNOWN');
      });
    });
  });

  describe('getErrorByCode', () => {
    it('should return correct error for INSUFFICIENT_FUNDS', () => {
      const result = getErrorByCode('INSUFFICIENT_FUNDS');
      expect(result.code).toBe('INSUFFICIENT_FUNDS');
      expect(result.title).toBe('Insufficient Balance');
    });

    it('should return correct error for USER_REJECTED', () => {
      const result = getErrorByCode('USER_REJECTED');
      expect(result.code).toBe('USER_REJECTED');
    });

    it('should return default error for unmatched code', () => {
      const result = getErrorByCode('UNKNOWN');
      expect(result.code).toBe('UNKNOWN');
      expect(result.title).toBe('Something Went Wrong');
    });
  });

  describe('formatError', () => {
    it('should format Error objects', () => {
      const error = new Error('insufficient funds');
      const result = formatError(error);
      expect(result.code).toBe('INSUFFICIENT_FUNDS');
    });

    it('should format string errors', () => {
      const result = formatError('user rejected');
      expect(result.code).toBe('USER_REJECTED');
    });

    it('should format object with message property', () => {
      const result = formatError({ message: 'network error' });
      expect(result.code).toBe('NETWORK_ERROR');
    });

    it('should handle null', () => {
      const result = formatError(null);
      expect(result.code).toBe('UNKNOWN');
    });

    it('should handle undefined', () => {
      const result = formatError(undefined);
      expect(result.code).toBe('UNKNOWN');
    });

    it('should handle objects without message', () => {
      const result = formatError({ foo: 'bar' });
      expect(result.code).toBe('UNKNOWN');
    });
  });

  describe('Retryable Error Classification', () => {
    it('should mark network errors as retryable', () => {
      expect(parseErrorMessage('network error').isRetryable).toBe(true);
    });

    it('should mark RPC errors as retryable', () => {
      expect(parseErrorMessage('rpc error').isRetryable).toBe(true);
    });

    it('should mark timeout errors as retryable', () => {
      expect(parseErrorMessage('timeout').isRetryable).toBe(true);
    });

    it('should mark slippage errors as retryable', () => {
      expect(parseErrorMessage('slippage').isRetryable).toBe(true);
    });

    it('should mark bridge errors as retryable', () => {
      expect(parseErrorMessage('bridge error').isRetryable).toBe(true);
    });

    it('should NOT mark insufficient funds as retryable', () => {
      expect(parseErrorMessage('insufficient funds').isRetryable).toBe(false);
    });

    it('should NOT mark user rejected as retryable', () => {
      expect(parseErrorMessage('user rejected').isRetryable).toBe(false);
    });

    it('should NOT mark route not found as retryable', () => {
      expect(parseErrorMessage('no route found').isRetryable).toBe(false);
    });

    it('should NOT mark wallet not connected as retryable', () => {
      expect(parseErrorMessage('wallet not connected').isRetryable).toBe(false);
    });
  });

  describe('ParsedError Structure', () => {
    it('should always have required fields', () => {
      const result = parseErrorMessage('any error');
      expect(result).toHaveProperty('code');
      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('message');
      expect(result).toHaveProperty('action');
      expect(result).toHaveProperty('isRetryable');
    });

    it('should have non-empty strings for user-facing fields', () => {
      const result = parseErrorMessage('test error');
      expect(result.title.length).toBeGreaterThan(0);
      expect(result.message.length).toBeGreaterThan(0);
      expect(result.action.length).toBeGreaterThan(0);
    });
  });
});
