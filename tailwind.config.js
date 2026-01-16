/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blacks for background (matching liquyn.com)
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#0d0d0d',
          700: '#111111',
          600: '#161616',
          500: '#1a1a1a',
          400: '#222222',
          300: '#2a2a2a',
        },
        // Liquyn green accent
        accent: {
          DEFAULT: '#4ADE80',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ADE80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Secondary muted colors
        muted: {
          DEFAULT: '#71717a',
          foreground: '#a1a1aa',
        },
        // Status colors
        success: '#22c55e',
        error: '#ef4444',
        warning: '#eab308',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(74, 222, 128, 0.15)',
        'glow-lg': '0 0 40px rgba(74, 222, 128, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
