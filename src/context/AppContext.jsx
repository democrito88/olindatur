import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { lightTheme, darkTheme } from "../themes";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { dados, estado, mensagem } = useFetch(`https://mocki.io/v1/2d83e34e-1469-4cc6-ac31-56420bcfb706`);
  const { t, i18n } = useTranslation();

  // Estado para o tema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Alternar tema
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        dados,
        estado,
        mensagem,
        t,
        i18n,
        theme: isDarkMode ? darkTheme : lightTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
