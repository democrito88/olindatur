import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rodape from "./components/Rodape";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Categoria from "./pages/Categoria";
import PontoTuristico from "./pages/PontoTuristico";
import Navegacao from "./components/Navegacao";
import Guias from "./pages/Guias";
import { Accessibility } from "accessibility";

var options = {
  labels: {
    resetTitle: 'Redefinir',
    closeTitle: 'Fechar',
    menuTitle: 'Acessibilidade',
    increaseText: 'Aumentar tamanho do texto',
    decreaseText: 'Diminuir tamanho do texto',
    increaseTextSpacing: 'Aumentar espaçamento do texto',
    decreaseTextSpacing: 'Diminuir espaçamento do texto',
    increaseLineHeight: 'Aumentar altura da linha',
    decreaseLineHeight: 'Diminuir altura da linha',
    invertColors: 'Inverter cores',
    grayHues: 'Escala de cinza',
    underlineLinks: 'Sublinhar links',
    bigCursor: 'Cursor grande',
    readingGuide: 'Guia de leitura',
    textToSpeech: 'Texto para fala',
    speechToText: 'Fala para texto',
    disableAnimations: 'Desativar animações',
    hotkeyPrefix: 'Atalho:'
  },
  textToSpeechLang: 'pt-BR', // Configuração para português brasileiro
  speechToTextLang: 'pt-BR' // Configuração para português brasileiro
};

function App() {
  const location = useLocation();

  // Garantir que o scroll vá para o topo ao acessar a página ou ao mudar de rota
  useEffect(() => {
    new Accessibility(options);
    window.scrollTo(0, 0);
  }, [location]); // Dependência no `location` para garantir que o scroll é ajustado em qualquer mudança de rota

  return (
    <>
      <Navegacao />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Categoria />} path="/:pagina" />
        <Route element={<PontoTuristico />} path="/:pagina/:id" />
        <Route element={<Guias />} path="/guias" />
        <Route element={<NotFound />} path="/*" />
      </Routes>
      <Rodape />
    </>
  );
}

export default App;
