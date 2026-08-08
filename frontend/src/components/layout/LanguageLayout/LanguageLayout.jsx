import Header from "../../ui/Header/Header.jsx";
import PageThemeProvider from "../../themes/PageThemeContext.jsx";
import { useEffect } from "react";
import { useParams, Outlet, useMatches } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LanguageLayout() {
  const { lang } = useParams(); // Get the language parameter from the URL
  const { i18n } = useTranslation(); // Access the i18n instance from react-i18next
  const matches = useMatches(); // Get the current route matches to check for the crossHeader property
  const crossHeader = matches.some(
    (match) => match.handle?.crossHeader
  );

  useEffect(() => { // Change the language when the lang parameter changes
    if (lang === "fr" || lang === "en") {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <PageThemeProvider >
      <Header crossHeader={crossHeader} />
      <Outlet />
    </PageThemeProvider>
  );
}

export default LanguageLayout;