import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/live-clock-app/', // ⚠️ this MUST match repo name
  plugins: [react()],
})
