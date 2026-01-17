/**
 * DepositToHyperliquid Component Tests
 * 
 * Tests the UI component that handles depositing USDC from HyperEVM to Hyperliquid L1.
 * 
 * Key distinction:
 * - This component operates on HyperEVM (chain 999)
 * - It deposits to Hyperliquid L1 (the trading layer)
 * - The visual flow shows: "HyperEVM → L1 Trading"
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DepositToHyperliquid } from './DepositToHyperliquid';

// Mock wagmi hooks
vi.mock('wagmi', () => ({
  useAccount: vi.fn(() => ({
    address: '0x1234567890123456789012345678901234567890',
    isConnected: true,
  })),
}));

// Mock the deposit hook
const mockDeposit = vi.fn();
const mockReset = vi.fn();

vi.mock('../../hooks/useHyperliquidDeposit', () => ({
  useHyperliquidDeposit: vi.fn(() => ({
    status: 'idle',
    statusMessage: '',
    txHash: null,
    error: null,
    deposit: mockDeposit,
    reset: mockReset,
    isDepositing: false,
  })),
}));

// Import after mocking
import { useHyperliquidDeposit } from '../../hooks/useHyperliquidDeposit';
import { useAccount } from 'wagmi';

describe('DepositToHyperliquid Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockDeposit.mockResolvedValue(true);
  });

  describe('Initial Render', () => {
    it('should render with deposit button in idle state', () => {
      render(<DepositToHyperliquid amount="100" inline />);
      
      // There's both a heading and a button with "Deposit to Hyperliquid"
      const elements = screen.getAllByText('Deposit to Hyperliquid');
      expect(elements.length).toBeGreaterThan(0);
      expect(screen.getByRole('button', { name: /deposit to hyperliquid/i })).toBeInTheDocument();
    });

    it('should display the amount to deposit', () => {
      render(<DepositToHyperliquid amount="250.50" inline />);
      
      expect(screen.getByText(/250.50 USDC/)).toBeInTheDocument();
    });

    it('should show the wallet to trading flow visualization', () => {
      render(<DepositToHyperliquid amount="100" inline />);
      
      // Should show Wallet and Trading labels indicating the flow
      expect(screen.getByText('Wallet')).toBeInTheDocument();
      expect(screen.getByText('Trading')).toBeInTheDocument();
    });
  });

  describe('Wallet Connection States', () => {
    it('should show "Connect Wallet First" when not connected', () => {
      vi.mocked(useAccount).mockReturnValue({
        address: undefined,
        isConnected: false,
      } as any);

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByRole('button', { name: /connect wallet first/i })).toBeInTheDocument();
    });

    it('should enable deposit button when connected', () => {
      vi.mocked(useAccount).mockReturnValue({
        address: '0x1234567890123456789012345678901234567890',
        isConnected: true,
      } as any);

      render(<DepositToHyperliquid amount="100" inline />);
      
      const button = screen.getByRole('button', { name: /deposit to hyperliquid/i });
      expect(button).not.toBeDisabled();
    });
  });

  describe('Deposit Flow States', () => {
    it('should show checking state', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'checking',
        statusMessage: 'Checking USDC balance...',
        txHash: null,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: true,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByText('Checking USDC balance...')).toBeInTheDocument();
    });

    it('should show approving state', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'approving',
        statusMessage: 'Approving USDC...',
        txHash: null,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: true,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByText('Approving USDC...')).toBeInTheDocument();
    });

    it('should show depositing state', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'depositing',
        statusMessage: 'Depositing to Hyperliquid...',
        txHash: null,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: true,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByText('Depositing to Hyperliquid...')).toBeInTheDocument();
    });

    it('should show completed state with transaction hash', () => {
      const txHash = '0xabc123def456';
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'completed',
        statusMessage: 'Deposit successful!',
        txHash,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByText('Deposit successful!')).toBeInTheDocument();
      // Should show truncated tx hash
      expect(screen.getByText(/0xabc123/)).toBeInTheDocument();
    });

    it('should show failed state with error message', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'failed',
        statusMessage: 'Insufficient balance',
        txHash: null,
        error: 'Insufficient USDC balance',
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByText('Insufficient USDC balance')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    beforeEach(() => {
      vi.mocked(useAccount).mockReturnValue({
        address: '0x1234567890123456789012345678901234567890',
        isConnected: true,
      } as any);
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'idle',
        statusMessage: '',
        txHash: null,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });
    });

    it('should call deposit with correct amount when button clicked', async () => {
      render(<DepositToHyperliquid amount="100" inline />);
      
      const button = screen.getByRole('button', { name: /deposit to hyperliquid/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockDeposit).toHaveBeenCalledWith('100');
      });
    });

    it('should show Try Again button on failure', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'failed',
        statusMessage: 'Transaction failed',
        txHash: null,
        error: 'Network error',
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    });

    it('should show Done button on success', () => {
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'completed',
        statusMessage: 'Deposit successful!',
        txHash: '0xabc123',
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      expect(screen.getByRole('button', { name: /done/i })).toBeInTheDocument();
    });
  });

  describe('Callbacks', () => {
    it('should call onSuccess when deposit completes', async () => {
      const onSuccess = vi.fn();
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'completed',
        statusMessage: 'Deposit successful!',
        txHash: '0xsuccess123',
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline onSuccess={onSuccess} />);
      
      await waitFor(() => {
        expect(onSuccess).toHaveBeenCalledWith('0xsuccess123');
      });
    });

    it('should call onError when deposit fails', async () => {
      const onError = vi.fn();
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'failed',
        statusMessage: 'Failed',
        txHash: null,
        error: 'Transaction reverted',
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline onError={onError} />);
      
      await waitFor(() => {
        expect(onError).toHaveBeenCalledWith('Transaction reverted');
      });
    });

    it('should call onClose when Done/Close button clicked', () => {
      const onClose = vi.fn();
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'completed',
        statusMessage: 'Deposit successful!',
        txHash: '0xabc123',
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline onClose={onClose} />);
      
      const doneButton = screen.getByRole('button', { name: /done/i });
      fireEvent.click(doneButton);

      expect(mockReset).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('Auto-start Feature', () => {
    it('should auto-start deposit when autoStart is true and connected', async () => {
      vi.mocked(useAccount).mockReturnValue({
        address: '0x1234567890123456789012345678901234567890',
        isConnected: true,
      } as any);
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'idle',
        statusMessage: '',
        txHash: null,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline autoStart />);
      
      await waitFor(() => {
        expect(mockDeposit).toHaveBeenCalledWith('100');
      });
    });

    it('should not auto-start when not connected', () => {
      vi.mocked(useAccount).mockReturnValue({
        address: undefined,
        isConnected: false,
      } as any);

      render(<DepositToHyperliquid amount="100" inline autoStart />);
      
      expect(mockDeposit).not.toHaveBeenCalled();
    });
  });

  describe('Explorer Link', () => {
    it('should link to Hyperliquid explorer for transaction', () => {
      const txHash = '0xabc123def456789';
      vi.mocked(useHyperliquidDeposit).mockReturnValue({
        status: 'completed',
        statusMessage: 'Deposit successful!',
        txHash,
        error: null,
        deposit: mockDeposit,
        reset: mockReset,
        isDepositing: false,
      });

      render(<DepositToHyperliquid amount="100" inline />);
      
      // Find the explorer link
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `https://explorer.hyperliquid.xyz/tx/${txHash}`);
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  describe('Layer Distinction in UI', () => {
    it('should clearly show the wallet to trading transition', () => {
      render(<DepositToHyperliquid amount="100" inline />);
      
      // The UI shows a simple wallet -> trading flow
      // Technical layer details are kept in code comments for developers
      
      // Check for Wallet label (source)
      expect(screen.getByText('Wallet')).toBeInTheDocument();
      
      // Check for Trading label (destination)
      expect(screen.getByText('Trading')).toBeInTheDocument();
    });

    it('should show Hyperliquid branding', () => {
      render(<DepositToHyperliquid amount="100" inline />);
      
      // Should show "Deposit to Hyperliquid" heading
      const elements = screen.getAllByText('Deposit to Hyperliquid');
      expect(elements.length).toBeGreaterThan(0);
    });
  });
});

describe('DepositToHyperliquid Modal Mode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAccount).mockReturnValue({
      address: '0x1234567890123456789012345678901234567890',
      isConnected: true,
    } as any);
    vi.mocked(useHyperliquidDeposit).mockReturnValue({
      status: 'idle',
      statusMessage: '',
      txHash: null,
      error: null,
      deposit: mockDeposit,
      reset: mockReset,
      isDepositing: false,
    });
  });

  it('should render as modal when isOpen is true', () => {
    render(<DepositToHyperliquid amount="100" isOpen={true} />);
    
    // Modal should be visible - there's both a heading and button with this text
    const elements = screen.getAllByText('Deposit to Hyperliquid');
    expect(elements.length).toBeGreaterThan(0);
  });

  it('should not render when isOpen is false', () => {
    render(<DepositToHyperliquid amount="100" isOpen={false} />);
    
    // Modal content should not be visible
    expect(screen.queryByText('Deposit to Hyperliquid')).not.toBeInTheDocument();
  });

  it('should call onClose when modal is closed', () => {
    const onClose = vi.fn();
    vi.mocked(useHyperliquidDeposit).mockReturnValue({
      status: 'completed',
      statusMessage: 'Done!',
      txHash: '0xabc',
      error: null,
      deposit: mockDeposit,
      reset: mockReset,
      isDepositing: false,
    });

    render(<DepositToHyperliquid amount="100" isOpen={true} onClose={onClose} />);
    
    // Click Done button
    const doneButton = screen.getByRole('button', { name: /done/i });
    fireEvent.click(doneButton);

    expect(onClose).toHaveBeenCalled();
  });
});
