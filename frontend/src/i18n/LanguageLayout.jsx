import Header from "../components/ui/Header/Header.jsx";
import PageThemeProvider from "../components/themes/PageThemeContext.jsx";
import { useEffect } from "react";
import { useParams, Outlet, useMatches } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LanguageLayout() {
  const { lang } = useParams(); // Get the language parameter from the URL
  const { i18n } = useTranslation(); // Access the i18n instance from react-i18next
  const matches = useMatches(); // Get the current route matches to check for the hideHeader property
  const hideHeader = matches.some(
    (match) => match.handle?.hideHeader
  );

  useEffect(() => { // Change the language when the lang parameter changes
    if (lang === "fr" || lang === "en") {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <PageThemeProvider >
      {!hideHeader && <Header />}
      <Outlet />
    </PageThemeProvider>
  );
}

export default LanguageLayout;