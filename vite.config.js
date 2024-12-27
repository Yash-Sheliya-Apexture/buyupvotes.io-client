import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set correctly for your deployment
  build: {
    outDir: 'dist', // Output directory for production build
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]', // Prevent hash in asset filenames
      },
    },
  },
  server: {
    port: 5173, // Development server port
  },
  // Proxy configuration
  proxy: {
    '/api': {
      target: process.env.NODE_ENV === 'production'
        ? 'https://buyupvotes-io-server.onrender.com'  // Production backend URL (Render)
        : 'http://localhost:5000', // Local development backend URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path to remove '/api'
    },
  },
  // Handle image assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'], // Ensures Vite can include these assets
});
