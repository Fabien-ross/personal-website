import { createContext, useContext, useState } from "react";

const PageThemeContext = createContext();

export default function PageThemeProvider({ children }) {
  const [alternateSlug, setAlternateSlug] = useState(null); // To share the alternate slug to the Header
  const [pageTheme, setPageTheme] = useState({ // To share the theme to the Header
    dark: false,
    reverse: false,
  });

  return (
    <PageThemeContext.Provider
      value={{
        pageTheme,
        setPageTheme,
        alternateSlug,
        setAlternateSlug,
      }}
    >
      {children}
    </PageThemeContext.Provider>
  );
}

export function usePageTheme() {
  return useContext(PageThemeContext);
}