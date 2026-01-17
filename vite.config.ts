import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // WASM support must come first
    wasm(),
    topLevelAwait(),
    react(),
    nodePolyfills({
      // Enable specific polyfills needed by RAILGUN SDK
      include: [
        'buffer',
        'crypto',
        'stream',
        'util',
        'process',
        'events',
        'path',
        'os',
        'assert',
        'string_decoder',
        'vm',
      ],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    // Custom plugin to serve WASM files from node_modules
    {
      name: 'serve-wasm-files',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.wasm')) {
            // Check if it's a request for a WASM file in .vite/deps
            if (req.url.includes('.vite/deps/')) {
              const wasmFileName = req.url.split('/').pop();
              
              // Map to actual WASM file locations
              const wasmPaths: Record<string, string> = {
                'poseidon_hash_wasm_bg.wasm': 'node_modules/@railgun-community/poseidon-hash-wasm/pkg-esm/poseidon_hash_wasm_bg.wasm',
                'curve25519_scalarmult_wasm_bg.wasm': 'node_modules/@railgun-community/curve25519-scalarmult-wasm/pkg-esm/curve25519_scalarmult_wasm_bg.wasm',
              };
              
              if (wasmFileName && wasmPaths[wasmFileName]) {
                const wasmPath = path.resolve(process.cwd(), wasmPaths[wasmFileName]);
                if (fs.existsSync(wasmPath)) {
                  res.setHeader('Content-Type', 'application/wasm');
                  fs.createReadStream(wasmPath).pipe(res);
                  return;
                }
              }
            }
          }
          next();
        });
      },
    },
  ],
  define: {
    // Ensure global is defined
    global: 'globalThis',
  },
  optimizeDeps: {
    // Exclude WASM packages from pre-bundling so they can load their WASM files correctly
    exclude: [
      '@railgun-community/poseidon-hash-wasm',
      '@railgun-community/curve25519-scalarmult-wasm',
    ],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  assetsInclude: ['**/*.wasm'],
  worker: {
    format: 'es',
    plugins: () => [wasm(), topLevelAwait()],
  },
  build: {
    target: 'esnext',
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
