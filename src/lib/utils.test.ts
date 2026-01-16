import { describe, it, expect } from 'vitest';
import { 
  cn, 
  formatAmount, 
  formatUSD, 
  shortenAddress, 
  formatDuration,
  parseTokenAmount,
  formatTokenAmount 
} from './utils';

describe('cn (classnames utility)', () => {
  it('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle undefined and null values', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });
});

describe('formatAmount', () => {
  it('should format regular numbers with decimals', () => {
    expect(formatAmount(123.456789)).toBe('123.4568');
    expect(formatAmount(123.456789, 2)).toBe('123.46');
  });

  it('should handle string input', () => {
    expect(formatAmount('100.123456')).toBe('100.1235');
  });

  it('should format very small numbers', () => {
    expect(formatAmount(0.00001)).toBe('<0.0001');
  });

  it('should format thousands', () => {
    expect(formatAmount(1500)).toBe('1.50K');
    expect(formatAmount(25000)).toBe('25.00K');
  });

  it('should format millions', () => {
    expect(formatAmount(1500000)).toBe('1.50M');
    expect(formatAmount(25000000)).toBe('25.00M');
  });

  it('should handle zero', () => {
    expect(formatAmount(0)).toBe('0.0000');
  });

  it('should handle invalid input', () => {
    expect(formatAmount('not a number')).toBe('0');
  });
});

describe('formatUSD', () => {
  it('should format USD correctly', () => {
    expect(formatUSD(123.45)).toBe('$123.45');
    expect(formatUSD(1000)).toBe('$1,000.00');
    expect(formatUSD(0.5)).toBe('$0.50');
  });

  it('should handle zero', () => {
    expect(formatUSD(0)).toBe('$0.00');
  });

  it('should handle large numbers', () => {
    expect(formatUSD(1234567.89)).toBe('$1,234,567.89');
  });
});

describe('shortenAddress', () => {
  it('should shorten address correctly', () => {
    const address = '0x1234567890123456789012345678901234567890';
    expect(shortenAddress(address)).toBe('0x1234...7890');
  });

  it('should handle custom char count', () => {
    const address = '0x1234567890123456789012345678901234567890';
    expect(shortenAddress(address, 6)).toBe('0x123456...567890');
  });

  it('should handle empty string', () => {
    expect(shortenAddress('')).toBe('');
  });
});

describe('formatDuration', () => {
  it('should format seconds', () => {
    expect(formatDuration(30)).toBe('30s');
    expect(formatDuration(59)).toBe('59s');
  });

  it('should format minutes', () => {
    expect(formatDuration(60)).toBe('1m');
    expect(formatDuration(300)).toBe('5m');
    expect(formatDuration(3599)).toBe('59m');
  });

  it('should format hours', () => {
    expect(formatDuration(3600)).toBe('1h 0m');
    expect(formatDuration(3660)).toBe('1h 1m');
    expect(formatDuration(7200)).toBe('2h 0m');
  });
});

describe('parseTokenAmount', () => {
  it('should parse whole numbers', () => {
    expect(parseTokenAmount('100', 6)).toBe(100000000n);
    expect(parseTokenAmount('1', 18)).toBe(1000000000000000000n);
  });

  it('should parse decimal numbers', () => {
    expect(parseTokenAmount('100.5', 6)).toBe(100500000n);
    expect(parseTokenAmount('1.123456', 6)).toBe(1123456n);
  });

  it('should handle leading/trailing zeros', () => {
    expect(parseTokenAmount('0.01', 6)).toBe(10000n);
    expect(parseTokenAmount('0.000001', 6)).toBe(1n);
  });
});

describe('formatTokenAmount', () => {
  it('should format whole amounts', () => {
    expect(formatTokenAmount(100000000n, 6)).toBe('100');
    expect(formatTokenAmount(1000000000000000000n, 18)).toBe('1');
  });

  it('should format decimal amounts', () => {
    expect(formatTokenAmount(100500000n, 6)).toBe('100.5');
    expect(formatTokenAmount(1123456n, 6)).toBe('1.123456');
  });

  it('should handle small amounts', () => {
    expect(formatTokenAmount(1n, 6)).toBe('0.000001');
    expect(formatTokenAmount(10000n, 6)).toBe('0.01');
  });

  it('should handle zero', () => {
    expect(formatTokenAmount(0n, 6)).toBe('0');
  });
});
