"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    seondaray: string;
  };
};

type Props = {
  children: React.ReactNode;
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    seondaray: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
