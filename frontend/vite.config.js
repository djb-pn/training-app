import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changing to './' allows the app to load from any directory or domain
  base: './', 
})
