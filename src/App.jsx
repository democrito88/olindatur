// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Igrejas from './pages/Igrejas';
import Igreja from './pages/Igreja';
import Fortes from './pages/Fortes';
import Museus from './pages/Museus';
import Monumentos from './pages/Monumentos';
import NotFound from './pages/NotFound';
import Rodape from './components/Rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Teste from './pages/Teste';



function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Igrejas />} path="/igrejas" />
          <Route element={<Igreja />} path="/igreja/:id" />
          <Route element={<Fortes />} path="/fortes" />
          <Route element={<Museus />} path="/museus" />
          <Route element={<Monumentos />} path="/monumentos" />
          <Route element={<Teste />} path="/teste" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
      <Rodape />
      
    </>
  );
}

export default App;
