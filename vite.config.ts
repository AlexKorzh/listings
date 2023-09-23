import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import Copy from 'vite-plugin-copy'

export default defineConfig({
  base: '/listings/',
  plugins: [
    react(),
    Copy({
      targets: [
        { src: '404.html', dest: 'dist' }
      ]
    })
  ],
})
