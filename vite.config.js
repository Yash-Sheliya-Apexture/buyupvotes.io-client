import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  base: '/', // Ensure this is set correctly for your deployment
  server: {
    historyApiFallback: true, 
  },
  build: {
    outDir: 'dist', 
  },
  resolve: {
    alias: {
      '@': '/src', // Optional alias for cleaner imports
    },
  },
  // Proxy configuration
  proxy: {
    '/api': {
      target: process.env.NODE_ENV === 'development' 
        ? 'http://localhost:5000'  // Production backend URL
        : 'https://api.redditmarketing.company', // Local development backend URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path to remove '/api'
    },
  },
})


