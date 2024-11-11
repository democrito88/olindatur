import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const urlBase = "https://democrito88.github.io/olindatur/";
  const {dados, estado, mensagem} = useFetch(`${urlBase}json/database.json`);

  return (
    <AppContext.Provider value={{ dados, estado, mensagem, urlBase }}>
      {children}
    </AppContext.Provider>
  );
};
