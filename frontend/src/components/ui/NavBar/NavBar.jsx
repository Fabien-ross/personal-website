import "./NavBar.css";
import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <nav className="navbar">
      <NavLink to={`/${lang}`}>
        {t("navbar.home")}
      </NavLink>

      <NavLink to={`/${lang}/essays`}>
        {t("navbar.essays")}
      </NavLink>

      <NavLink to={`/${lang}/novels`}>
        {t("navbar.novels")}
      </NavLink>

      <NavLink to={`/${lang}/poems`}>
        {t("navbar.poems")}
      </NavLink>

      <NavLink to={`/${lang}/quotes`}>
        {t("navbar.quotes")}
      </NavLink>

      <NavLink to={`/${lang}/music`}>
        {t("navbar.music")}
      </NavLink>

      <NavLink to={`/${lang}/graphic`}>
        {t("navbar.graphic")}
      </NavLink>

      <NavLink to={`/${lang}/comments`}>
        {t("navbar.comments")}
      </NavLink>
    </nav>
  );
}

export default Navbar;