import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const {dados, estado, mensagem} = useFetch(`https://mocki.io/v1/ccc7dce3-1372-4969-97d7-7f9bcfb3d184`);
  const { t, i18n } = useTranslation();
  
  return (
    <AppContext.Provider value={{ dados, estado, mensagem, t, i18n }}>
      {children}
    </AppContext.Provider>
  );
};
