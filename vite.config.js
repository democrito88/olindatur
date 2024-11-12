import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  // base: '/olindatur/',
=======
  //base: '/olindatur/',
>>>>>>> e7cf1c43688a1ed03907531bb136c85efab5e739
  plugins: [react()],
  resolve: {
    alias: {
      'react-vlibras': '/node_modules/react-vlibras/dist/index.js'
    }
  }
})
