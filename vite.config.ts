import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use a relative base so built assets load correctly when deployed to Vercel (root)
  base: './',
})
