import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure Vite outputs the build here
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
});
