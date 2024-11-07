import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const {dados, estado, mensagem} = useFetch("http://localhost:5173/json/database.json");

  return (
    <AppContext.Provider value={{ dados, estado, mensagem }}>
      {children}
    </AppContext.Provider>
  );
};
