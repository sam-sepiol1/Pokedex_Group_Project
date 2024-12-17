import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    hmr: true, // Explicitly enable HMR
    port:5173,
    watch: {
      usePolling: true
    },
  },
});

