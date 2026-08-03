import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";
import "./LanguageButton.css";

function LanguageButton() {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = () => {
    const newLanguage = lang === "fr" ? "en" : "fr";

    const newPath = location.pathname.replace(
      `/${lang}`,
      `/${newLanguage}`
    );

    i18n.changeLanguage(newLanguage);
    navigate(newPath);
  };

  return (
    <button className="language-button" onClick={switchLanguage}>
      <span className={`fi ${lang === "fr" ? "fi-gb" : "fi-fr"}`} />
    </button>
  );
}

export default LanguageButton;