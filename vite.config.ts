import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/hackarena2.0/',
  plugins: [react(), tailwindcss()],
  // Enable SPA fallback for client-side routing (legal pages, etc.)
  appType: 'spa',
})
