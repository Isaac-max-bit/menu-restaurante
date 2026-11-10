import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/menu-restaurante-main/', // Asegúrate de que coincida con el nombre de tu repositorio
})