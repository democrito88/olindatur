import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { dados, estado, mensagem } = useFetch(`https://mocki.io/v1/7333b063-809d-4c74-8b0a-f8f980923bc5  `);

  const { t, i18n } = useTranslation();

  return (
    <AppContext.Provider
      value={{
        dados,
        estado,
        mensagem,
        t,
        i18n
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
