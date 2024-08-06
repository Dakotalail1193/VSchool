import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
   watchOptions: {poll: true},
    proxy: {
      '/api': {
        target: 'http://localhost:8500',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});


