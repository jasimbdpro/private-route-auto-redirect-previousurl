import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/private-route-auto-redirect-previousurl/',
  plugins: [react()],
})
