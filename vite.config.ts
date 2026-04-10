import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chatbot-app-deploy/',
  server: {
    proxy: {
      '/api/generate': {
        target: 'http://localhost:11434',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
