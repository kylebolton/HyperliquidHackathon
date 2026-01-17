import { type WalletClient, type PublicClient, parseUnits } from 'viem';
import { hyperEVM } from '../config/chains';

// Hyperliquid Bridge contract address on HyperEVM
// This is the bridge contract that allows depositing to L1 trading
const HYPERLIQUID_BRIDGE_ADDRESS = '0x2Df1c51E09aECF9cacB7bc98cB1742757f163dF7' as const;

// USDC address on HyperEVM
const USDC_HYPEREVM_ADDRESS = '0xeb62eee3685fc4c43992febcd9e75443aef550ab' as const;

// ERC20 ABI for approval
const ERC20_ABI = [
  {
    name: 'approve',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    name: 'allowance',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    name: 'balanceOf',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
] as const;

// Hyperliquid Bridge ABI for deposits
const BRIDGE_ABI = [
  {
    name: 'depositUsdc',
    type: 'function',
    inputs: [
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [],
  },
] as const;

export interface DepositResult {
  success: boolean;
  txHash?: string;
  error?: string;
}

/**
 * Check USDC balance on HyperEVM
 */
export async function checkUSDCBalance(
  publicClient: PublicClient,
  userAddress: `0x${string}`
): Promise<bigint> {
  try {
    const balance = await publicClient.readContract({
      address: USDC_HYPEREVM_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'balanceOf',
      args: [userAddress],
    });
    return balance as bigint;
  } catch (error) {
    console.error('Error checking USDC balance:', error);
    return BigInt(0);
  }
}

/**
 * Check if approval is needed for the bridge contract
 */
export async function checkAllowance(
  publicClient: PublicClient,
  userAddress: `0x${string}`,
  amount: bigint
): Promise<boolean> {
  try {
    const allowance = await publicClient.readContract({
      address: USDC_HYPEREVM_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'allowance',
      args: [userAddress, HYPERLIQUID_BRIDGE_ADDRESS],
    });
    return (allowance as bigint) >= amount;
  } catch (error) {
    console.error('Error checking allowance:', error);
    return false;
  }
}

/**
 * Approve USDC spending for the bridge contract
 */
export async function approveUSDC(
  walletClient: WalletClient,
  publicClient: PublicClient,
  amount: bigint
): Promise<DepositResult> {
  try {
    const [account] = await walletClient.getAddresses();
    
    const hash = await walletClient.writeContract({
      address: USDC_HYPEREVM_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [HYPERLIQUID_BRIDGE_ADDRESS, amount],
      account,
      chain: hyperEVM,
    });

    // Wait for transaction confirmation
    await publicClient.waitForTransactionReceipt({ hash });

    return { success: true, txHash: hash };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Approval failed';
    console.error('Error approving USDC:', error);
    return { success: false, error: errorMessage };
  }
}

/**
 * Deposit USDC to Hyperliquid L1 trading account
 * This bridges USDC from HyperEVM to the Hyperliquid L1 for trading
 */
export async function depositToHyperliquid(
  walletClient: WalletClient,
  publicClient: PublicClient,
  amountUSD: string,
  onStatusUpdate?: (status: 'checking' | 'approving' | 'depositing' | 'completed' | 'failed', message?: string) => void
): Promise<DepositResult> {
  try {
    const [account] = await walletClient.getAddresses();
    const amount = parseUnits(amountUSD, 6); // USDC has 6 decimals

    // Step 1: Check balance
    onStatusUpdate?.('checking', 'Checking USDC balance...');
    const balance = await checkUSDCBalance(publicClient, account);
    
    if (balance < amount) {
      return { 
        success: false, 
        error: `Insufficient USDC balance. Have: ${Number(balance) / 1e6}, Need: ${amountUSD}` 
      };
    }

    // Step 2: Check and handle approval
    onStatusUpdate?.('checking', 'Checking approval...');
    const hasAllowance = await checkAllowance(publicClient, account, amount);
    
    if (!hasAllowance) {
      onStatusUpdate?.('approving', 'Approving USDC...');
      const approvalResult = await approveUSDC(walletClient, publicClient, amount);
      
      if (!approvalResult.success) {
        return approvalResult;
      }
    }

    // Step 3: Execute deposit
    onStatusUpdate?.('depositing', 'Depositing to Hyperliquid...');
    
    const hash = await walletClient.writeContract({
      address: HYPERLIQUID_BRIDGE_ADDRESS,
      abi: BRIDGE_ABI,
      functionName: 'depositUsdc',
      args: [amount],
      account,
      chain: hyperEVM,
    });

    // Wait for confirmation
    await publicClient.waitForTransactionReceipt({ hash });

    onStatusUpdate?.('completed', 'Deposit successful!');
    return { success: true, txHash: hash };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Deposit failed';
    console.error('Error depositing to Hyperliquid:', error);
    onStatusUpdate?.('failed', errorMessage);
    return { success: false, error: errorMessage };
  }
}

/**
 * Estimate gas for deposit
 */
export async function estimateDepositGas(
  publicClient: PublicClient,
  userAddress: `0x${string}`,
  amountUSD: string
): Promise<bigint | null> {
  try {
    const amount = parseUnits(amountUSD, 6);
    
    const gas = await publicClient.estimateContractGas({
      address: HYPERLIQUID_BRIDGE_ADDRESS,
      abi: BRIDGE_ABI,
      functionName: 'depositUsdc',
      args: [amount],
      account: userAddress,
    });

    return gas;
  } catch (error) {
    console.error('Error estimating gas:', error);
    return null;
  }
}
