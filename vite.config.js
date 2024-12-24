import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass' // Importer le module sass

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass, // Utiliser l'API moderne de Dart Sass
      },
    },
  },

  server: {
    hmr: true, // Explicitly enable HMR
    port: 5173,
    watch: {
      usePolling: true
    },
  },
});