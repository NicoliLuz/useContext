// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Defina os temas claro e escuro
const themes = {
  light: {
    background: '#ffffff',
    color: '#000000'
  },
  dark: {
    background: '#000000',
    color: '#ffffff'
  }
};

// Crie o contexto do tema
const ThemeContext = createContext();

// Crie o provedor do tema
function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Crie um hook para usar o contexto do tema
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
