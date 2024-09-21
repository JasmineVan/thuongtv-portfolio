import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/ThuongTV_Portfolio/',
  base: "",
  plugins: [react()],
})
