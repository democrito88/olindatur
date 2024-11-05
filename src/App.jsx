// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Rodape from './components/Rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Categoria from './pages/Categoria';
import PontoTuristico from './pages/PontoTuristico';
import Navegacao from './components/Navegacao';

function App() {
  return (
    <>
      <Navegacao />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Categoria/>} path='/:pagina' />
          <Route element={<PontoTuristico/>} path='/:pagina/:id' />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
      <Rodape />
      
    </>
  );
}

export default App;
