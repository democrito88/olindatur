import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { lightTheme, darkTheme } from "../themes";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { dados, estado, mensagem } = useFetch(`../src/assets/json/database.json`);
  const { t, i18n } = useTranslation();

  // Inicializa o tema com base no localStorage ou padrão como "light"
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false; // Padrão: false (tema claro)
  });

  // Salvar estado do tema no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

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
