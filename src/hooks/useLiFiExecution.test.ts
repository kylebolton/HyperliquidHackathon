import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLiFiExecution } from './useLiFiExecution';
import type { Quote, RouteStep } from '../types';
import type { LiFiRoute } from '../services/lifi-api';

const mockToken = {
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  symbol: 'USDC',
  name: 'USD Coin',
  decimals: 6,
  logo: 'https://example.com/usdc.png',
  chainId: 1,
};

const mockStep: RouteStep = {
  type: 'bridge',
  tool: 'across',
  fromChain: 1,
  toChain: 999,
  fromToken: mockToken,
  toToken: { ...mockToken, chainId: 999 },
  fromAmount: '1000000000',
  toAmount: '998000000',
  estimatedTime: 300,
};

// Mock raw LI.FI route for the _rawRoute property
const mockRawRoute: LiFiRoute = {
  id: 'test-route-123',
  fromChainId: 1,
  fromAmount: '1000000000',
  fromToken: {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    chainId: 1,
    name: 'USD Coin',
  },
  fromAddress: '0x1234567890123456789012345678901234567890',
  toChainId: 999,
  toAmount: '998000000',
  toAmountMin: '993000000',
  toToken: {
    address: '0xeb62eee3685fc4c43992febcd9e75443aef550ab',
    symbol: 'USDC',
    decimals: 6,
    chainId: 999,
    name: 'USD Coin',
  },
  toAddress: '0x1234567890123456789012345678901234567890',
  steps: [{
    id: 'step-1',
    type: 'cross',
    tool: 'across',
    toolDetails: {
      key: 'across',
      name: 'Across',
      logoURI: 'https://example.com/across.png',
    },
    action: {
      fromChainId: 1,
      fromAmount: '1000000000',
      fromToken: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        symbol: 'USDC',
        decimals: 6,
        chainId: 1,
        name: 'USD Coin',
      },
      toChainId: 999,
      toToken: {
        address: '0xeb62eee3685fc4c43992febcd9e75443aef550ab',
        symbol: 'USDC',
        decimals: 6,
        chainId: 999,
        name: 'USD Coin',
      },
      slippage: 0.01,
      fromAddress: '0x1234567890123456789012345678901234567890',
      toAddress: '0x1234567890123456789012345678901234567890',
    },
    estimate: {
      tool: 'across',
      fromAmount: '1000000000',
      toAmount: '998000000',
      toAmountMin: '993000000',
      approvalAddress: '0xApprovalAddress',
      executionDuration: 300,
    },
  }],
};

// Mock quote with _rawRoute for testing
const mockQuote: Quote & { _rawRoute?: LiFiRoute } = {
  id: 'test-quote-123',
  fromChain: 1,
  toChain: 999,
  fromToken: mockToken,
  toToken: { ...mockToken, chainId: 999 },
  fromAmount: '1000000000',
  toAmount: '998000000',
  estimatedTime: 300,
  gasCost: '0.001',
  gasCostUSD: '2.50',
  slippage: 0.5,
  steps: [mockStep],
  _rawRoute: mockRawRoute,
};

// Quote without _rawRoute for error testing
const mockQuoteNoRoute: Quote = {
  id: 'test-quote-no-route',
  fromChain: 1,
  toChain: 999,
  fromToken: mockToken,
  toToken: { ...mockToken, chainId: 999 },
  fromAmount: '1000000000',
  toAmount: '998000000',
  estimatedTime: 300,
  gasCost: '0.001',
  gasCostUSD: '2.50',
  slippage: 0.5,
  steps: [mockStep],
};

// Mock wagmi
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
    chainId: 1,
  })),
  useWalletClient: vi.fn(() => ({
    data: {
      account: { address: '0x1234567890123456789012345678901234567890' },
      chain: { id: 1 },
      transport: {},
      sendTransaction: vi.fn().mockResolvedValue('0xmocktxhash123456789012345678901234567890123456789012345678901234'),
      writeContract: vi.fn().mockResolvedValue('0xmocktxhash123456789012345678901234567890123456789012345678901234'),
    },
  })),
  usePublicClient: vi.fn(() => ({
    readContract: vi.fn().mockResolvedValue(BigInt(0)),
    waitForTransactionReceipt: vi.fn().mockResolvedValue({ status: 'success' }),
    estimateContractGas: vi.fn().mockResolvedValue(BigInt(21000)),
  })),
}));

// Mock lifi-api service
vi.mock('../services/lifi-api', () => ({
  getQuoteApi: vi.fn(),
  getTransactionStatus: vi.fn(),
}));

describe('useLiFiExecution', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with idle status', () => {
    const { result } = renderHook(() => useLiFiExecution());

    expect(result.current.status.status).toBe('idle');
    expect(result.current.status.currentStep).toBe(0);
    expect(result.current.status.totalSteps).toBe(0);
    expect(result.current.isExecuting).toBe(false);
  });

  it('should fail if no _rawRoute is available', async () => {
    const { result } = renderHook(() => useLiFiExecution());

    let success: boolean = true;
    await act(async () => {
      success = await result.current.execute(mockQuoteNoRoute);
    });

    expect(success).toBe(false);
    expect(result.current.status.status).toBe('failed');
    expect(result.current.status.error).toContain('No route data available');
  });

  it('should execute route successfully with native token', async () => {
    const lifiApi = await import('../services/lifi-api');
    vi.mocked(lifiApi.getQuoteApi).mockResolvedValue({
      id: 'quote-1',
      type: 'cross',
      tool: 'across',
      action: mockRawRoute.steps[0].action,
      estimate: {
        ...mockRawRoute.steps[0].estimate,
        approvalAddress: '0xApprovalAddress',
      },
      transactionRequest: {
        to: '0xBridgeContract',
        from: '0x1234567890123456789012345678901234567890',
        data: '0xabcdef',
        value: '1000000000',
        gasLimit: '100000',
        chainId: 1,
      },
    });
    vi.mocked(lifiApi.getTransactionStatus).mockResolvedValue({
      transactionId: 'tx-1',
      sending: {
        txHash: '0xmocktxhash',
        txLink: 'https://example.com/tx',
        amount: '1000000000',
        token: mockRawRoute.fromToken,
        chainId: 1,
      },
      status: 'DONE',
    });

    // Create a mock with native token
    const nativeQuote = {
      ...mockQuote,
      fromToken: { ...mockToken, address: '0x0000000000000000000000000000000000000000' },
      _rawRoute: {
        ...mockRawRoute,
        fromToken: { ...mockRawRoute.fromToken, address: '0x0000000000000000000000000000000000000000' },
        steps: [{
          ...mockRawRoute.steps[0],
          action: {
            ...mockRawRoute.steps[0].action,
            fromToken: { ...mockRawRoute.steps[0].action.fromToken, address: '0x0000000000000000000000000000000000000000' },
          },
        }],
      },
    };

    const { result } = renderHook(() => useLiFiExecution());

    let success: boolean = false;
    await act(async () => {
      success = await result.current.execute(nativeQuote);
    });

    expect(success).toBe(true);
    expect(result.current.status.status).toBe('completed');
  });

  it('should handle quote API errors', async () => {
    const lifiApi = await import('../services/lifi-api');
    vi.mocked(lifiApi.getQuoteApi).mockRejectedValue(new Error('API rate limit exceeded'));

    const { result } = renderHook(() => useLiFiExecution());

    await act(async () => {
      await result.current.execute(mockQuote);
    });

    expect(result.current.status.status).toBe('failed');
    expect(result.current.status.error).toBe('API rate limit exceeded');
  });

  it('should reset status correctly', async () => {
    const lifiApi = await import('../services/lifi-api');
    vi.mocked(lifiApi.getQuoteApi).mockRejectedValue(new Error('Error'));

    const { result } = renderHook(() => useLiFiExecution());

    await act(async () => {
      await result.current.execute(mockQuote);
    });

    expect(result.current.status.status).toBe('failed');

    act(() => {
      result.current.reset();
    });

    expect(result.current.status.status).toBe('idle');
    expect(result.current.status.currentStep).toBe(0);
    expect(result.current.status.totalSteps).toBe(0);
  });

  it('should track isExecuting correctly during execution', async () => {
    const lifiApi = await import('../services/lifi-api');
    
    // Create a promise we can control
    let resolveQuote: (value: any) => void;
    const quotePromise = new Promise((resolve) => {
      resolveQuote = resolve;
    });
    
    vi.mocked(lifiApi.getQuoteApi).mockReturnValue(quotePromise as any);

    const { result } = renderHook(() => useLiFiExecution());

    expect(result.current.isExecuting).toBe(false);

    // Start execution but don't await
    let executePromise: Promise<boolean>;
    act(() => {
      executePromise = result.current.execute(mockQuote);
    });

    // Should be executing now
    expect(result.current.isExecuting).toBe(true);

    // Resolve the quote with an error (missing transactionRequest)
    await act(async () => {
      resolveQuote!({
        id: 'quote-1',
        type: 'cross',
        tool: 'across',
        action: mockRawRoute.steps[0].action,
        estimate: mockRawRoute.steps[0].estimate,
        // No transactionRequest - will cause failure
      });
      await executePromise!;
    });

    // Should no longer be executing
    expect(result.current.isExecuting).toBe(false);
  });
});
