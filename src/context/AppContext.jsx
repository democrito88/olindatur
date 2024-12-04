import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { dados, estado, mensagem } = useFetch(`https://mocki.io/v1/4be8ca24-1a79-42cd-bde9-fd624b1637e6`);

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
