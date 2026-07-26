import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),

    // Compress images at build time (lossless for PNG/WebP, lossy for JPEG)
    ViteImageOptimizer({
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
      png: { quality: 85 },
      webp: { quality: 82, lossless: false },
      // Don't optimise SVGs to avoid breaking icon data-URIs
      svg: undefined,
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Raise the inline threshold so tiny assets don't cause extra requests
    assetsInlineLimit: 4096,
    // Enable module preloading for faster subsequent navigations
    modulePreload: { polyfill: true },
    rollupOptions: {
      output: {
        // Split vendor from app code for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router'],
          i18n: ['i18next', 'react-i18next'],
        },
      },
    },
  },
})
