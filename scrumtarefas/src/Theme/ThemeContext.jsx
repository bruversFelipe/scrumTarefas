import React, { useState } from "react";
import themeDefault from "./default";
import combineThemes from "./combineThemes";

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [themes, setTheme] = useState(themeDefault);

  const toggleTheme = keyTheme => {
    setTheme(combineThemes[keyTheme]);
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };

export default ThemeContext;
