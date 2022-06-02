import React, { createContext, useState } from "react";

export const ThemeContextProvider = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContextProvider.Provider
      value={{
        theme: theme,
        isLight: theme === "light",
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};
