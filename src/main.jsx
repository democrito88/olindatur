import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VLibras from "react-vlibras";
import { AppProvider } from './context/AppContext.jsx';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <BrowserRouter basename="/olindatur">
        <App />
      </BrowserRouter>
    </AppProvider>
    <VLibras />
  </>,
)
