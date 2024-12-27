// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/', // Ensure this is set correctly for your deployment
//   build: {
//     outDir: 'dist', // Output directory for production build
//     rollupOptions: {
//       output: {
//         assetFileNames: 'assets/[name][extname]', // Prevent hash in asset filenames
//       },
//     },
//   },
//   server: {
//     port: 5173, // Development server port
//   },
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
//   resolve: {
//     alias: {
//       '@assets': '/src/assets', // Optional: Simplify paths
//     },
//   },
//   // Handle image assets
//   assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'], // Ensure these assets are included
// });



// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   // Load environment variables based on the mode (development/production)
//   const env = loadEnv(mode, process.cwd());

//   // Determine if it's production mode
//   const isProduction = mode === 'production';

//   return {
//     plugins: [react()],

//     base: '/', // Adjust for your deployment needs

//     build: {
//       outDir: 'dist', // Output directory for production build
//       rollupOptions: {
//         output: {
//           // Prevent hash in asset filenames
//           assetFileNames: 'assets/[name][extname]',
//         },
//       },
//       assetsInlineLimit: 0, // Disable inlining small assets
//     },

//     server: {
//       port: 5173, // Local development server port
//     },

//     proxy: {
//       '/api': {
//         target: env.VITE_API_BASE_URL, // Use the environment variable
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
//       },
//     },

//     resolve: {
//       alias: {
//         '@assets': '/src/assets',
//         '@components': '/src/components',
//       },
//     },

//     assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.ico', '**/*.webp'],

//     define: {
//       'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
//       'process.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL), // Pass API URL to the app
//     },
//   };
// });



// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   // Load environment variables based on the mode (development/production)
//   const env = loadEnv(mode, process.cwd());

//   // Determine if it's production mode
//   const isProduction = mode === 'production';

//   return {
//     plugins: [react()],

//     // Adjust the base path for deployment
//     base: isProduction ? '/buyupvotes-io-client/' : '/',

//     build: {
//       outDir: 'dist', // Output directory for production build
//       rollupOptions: {
//         output: {
//           // Prevent hash in asset filenames (good for caching)
//           assetFileNames: 'assets/[name][extname]',
//         },
//       },
//       assetsInlineLimit: 0, // Disable inlining small assets for better control
//     },

//     server: {
//       port: 5173, // Local development server port
//     },

//     proxy: {
//       '/api': {
//         target: env.VITE_API_BASE_URL, // Use the environment variable for the API base URL
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite '/api' to match backend API paths
//       },
//     },

//     resolve: {
//       alias: {
//         '@assets': '/src/assets',
//         '@components': '/src/components',
//       },
//     },

//     assetsInclude: [
//       '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.ico', '**/*.webp'
//     ], // Include additional asset types

//     define: {
//       'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
//       'process.env.VITE_API_BASE_URL': JSON.stringify(env.VITE_API_BASE_URL), // Pass API URL to the app
//     },
//   };
// });


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
})