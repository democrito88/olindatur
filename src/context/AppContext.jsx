import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const {dados, estado, mensagem} = useFetch(`../src/assets/json/database.json`);
  const { t, i18n } = useTranslation();
  
  return (
    <AppContext.Provider value={{ dados, estado, mensagem, t, i18n }}>
      {children}
    </AppContext.Provider>
  );
};
