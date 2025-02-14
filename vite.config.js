import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass' 

export default defineConfig({
  plugins: [react()],
  
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
    },
    },
  },

  server: {
    hmr: true,
    port: 5173,
    watch: {
      usePolling: true
    },
  },
});