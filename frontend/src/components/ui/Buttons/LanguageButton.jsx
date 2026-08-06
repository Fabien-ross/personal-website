import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { usePageTheme } from "../../themes/PageThemeContext";

import "flag-icons/css/flag-icons.min.css";
import "./LanguageButton.css";

function LanguageButton() {
  const { i18n } = useTranslation();
  const { lang, slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { alternateSlug } = usePageTheme();

  const switchLanguage = () => {
    const newLanguage = lang === "fr" ? "en" : "fr";

    let newPath = location.pathname;

    if (slug && alternateSlug) {
      newPath = newPath.replace(
        `/${slug}`,
        `/${alternateSlug}`
      );
    }

    newPath = newPath.replace(
      `/${lang}`,
      `/${newLanguage}`
    );

    i18n.changeLanguage(newLanguage);
    window.location.href = newPath;
  };

  return (
    <>
     {!slug && !alternateSlug && (
      < button className="language-button" onClick={switchLanguage}>
        <span className={`fi ${lang === "fr" ? "fi-gb" : "fi-fr"}`} />
      </button>
    )}
    </>
  );
}

export default LanguageButton;