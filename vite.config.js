// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './', // Ensures the app works properly in subdirectories
//   // Proxy configuration
//   proxy: {
//     '/api': {
//       target: process.env.NODE_ENV === 'production' 
//         ? 'https://buyupvotes-io-server.onrender.com'  // Production backend URL (Render)
//         : 'http://localhost:5000', // Local development backend URL
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path to remove '/api'
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine the target URL based on the environment
const targetUrl = process.env.VITE_API_URL || 'http://localhost:5000'; // Default to localhost if not set in env

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures the app works properly in subdirectories
  // Proxy configuration
  proxy: {
    '/api': {
      target: targetUrl, // Using the conditionally set target URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path to remove '/api'
    },
  },
});