import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const { dados, estado, mensagem } = useFetch(`https://mocki.io/v1/88e501fe-8bca-4d9d-b23b-c8515c3a7e09`);

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
