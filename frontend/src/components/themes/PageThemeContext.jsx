import { createContext, useContext, useState, useEffect } from "react";

const PageThemeContext = createContext();

export default function PageThemeProvider({ children }) {
  const [alternateSlug, setAlternateSlug] = useState(null); // To share the alternate slug to the Header
  const [pageTheme, setPageTheme] = useState({ // To share the theme to the Header
    dark: false,
    reverse: false,
  });

  useEffect(() => {
    const { dark } = pageTheme;

    document.documentElement.style.setProperty(
      "--app-background",
      dark ? "#1a1a1a" : "white"
    );

    document.body.style.color = dark
      ? "white"
      : "#1a1a1a";

  }, [pageTheme]);

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