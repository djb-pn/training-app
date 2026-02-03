import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Since you are using training.picksgallery.com, 
  // the app lives at the root ('/')
  base: '/', 
})
