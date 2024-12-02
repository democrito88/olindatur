import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { dados, estado, mensagem } = useFetch(`https://mocki.io/v1/20fd5315-a1e0-486f-a1e7-5863c915e72c`);

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
