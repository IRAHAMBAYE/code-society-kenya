import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // 👈 1. Make sure this import is here

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 👈 2. Make sure this is added to your plugins list
  ],
  base: './',
})
