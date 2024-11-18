import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/olindatur/',3
  //Adicionar isto para funcionar no docker
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  //fim
  resolve: {
    alias: {
      'react-vlibras': '/node_modules/react-vlibras/dist/index.js'
    }
  },
})
