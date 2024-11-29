import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/olindatur/',
  plugins: [react()],
  /*/Adicionar isto para funcionar no docker
  server: {
    host: true,
    strictPort: true,
    port: 80
  },
  //fim*/
  resolve: {
    alias: {
      'react-vlibras': '/node_modules/react-vlibras/dist/index.js'
    }
  }
})
