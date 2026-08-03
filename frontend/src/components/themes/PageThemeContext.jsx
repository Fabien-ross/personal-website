import { createContext, useContext, useState } from "react";

const PageThemeContext = createContext();

export default function PageThemeProvider({ children }) {
  const [pageTheme, setPageTheme] = useState({
    dark: false,
    reverse: false,
  });

  return (
    <PageThemeContext.Provider value={{ pageTheme, setPageTheme }}>
      {children}
    </PageThemeContext.Provider>
  );
}

export function usePageTheme() {
  return useContext(PageThemeContext);
}