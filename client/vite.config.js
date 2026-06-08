import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Forward API calls from the browser to the Express server
      '/api': 'http://localhost:5000',
    },
  },
});

