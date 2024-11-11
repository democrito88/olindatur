import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const urlBase = "http://localhost:5173/olindatur/";
  const {dados, estado, mensagem} = useFetch(`../src/assets/json/database.json`);
  
  return (
    <AppContext.Provider value={{ dados, estado, mensagem }}>
      {children}
    </AppContext.Provider>
  );
};
