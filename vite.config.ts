import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Enable specific polyfills needed by RAILGUN SDK
      include: ['buffer', 'crypto', 'stream', 'util', 'process'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  define: {
    // Ensure global is defined
    global: 'globalThis',
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    rollupOptions: {
      // Ensure proper handling of CommonJS modules
      output: {
        manualChunks: {
          // Split RAILGUN into its own chunk for better caching
          railgun: [
            '@railgun-community/engine',
            '@railgun-community/wallet',
            '@railgun-community/shared-models',
          ],
        },
      },
    },
  },
})
