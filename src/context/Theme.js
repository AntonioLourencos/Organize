import React, { createContext, useContext, useEffect, useState } from "react";

import DarkTheme_Blue from "../styles/theme/DarkTheme_Blue";
import DarkTheme_Red from "../styles/theme/DarkTheme_Red";
import DarkTheme_Green from "../styles/theme/DarkTheme_Green";

const ThemeHookContext = createContext({});

export const ThemeHookProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DarkTheme_Blue);

  const [list, setList] = useState([
    DarkTheme_Blue,
    DarkTheme_Red,
    DarkTheme_Green,
  ]);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme !== null) {
      setCurrentTheme(JSON.parse(getTheme));
    }
  }, []);

  return (
    <ThemeHookContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        list,
        setList,
      }}
    >
      {children}
    </ThemeHookContext.Provider>
  );
};

export const useHookTheme = () => {
  const context = useContext(ThemeHookContext);
  const { currentTheme, setCurrentTheme, list, setList } = context;
  return { currentTheme, setCurrentTheme, list, setList };
};
