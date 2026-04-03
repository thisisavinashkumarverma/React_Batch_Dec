import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log("Vite configuration loaded.");
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
