import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // En kritik satır budur! Dosyaların yolunu göreceli hale getirir.
})