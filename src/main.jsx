import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VLibras from "react-vlibras";



createRoot(document.getElementById('root')).render(
  <>
    <App />
    <VLibras />
  </>,
)
