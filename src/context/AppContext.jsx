import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const {dados, estado, mensagem} = useFetch("https://democrito88.github.io/olindatur/json/database.json");

  return (
    <AppContext.Provider value={{ dados, estado, mensagem }}>
      {children}
    </AppContext.Provider>
  );
};
