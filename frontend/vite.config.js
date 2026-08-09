import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": { //path api will redirect to the server port (dev)
        target: "http://server:8000",
        changeOrigin: true,
      },
      "/media": { //path media will redirect to the server port (dev)
        target: "http://server:8000",
        changeOrigin: true,
      },
    },
  },
});