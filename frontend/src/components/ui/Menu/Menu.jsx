import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >☰</button>

      <nav className={`menu ${isOpen ? "show" : ""}`}onMouseLeave={() => setIsOpen(false)}>
        <NavLink to={`/${lang}`} onClick={() => setIsOpen(false)}>
          {t("navbar.home")}
        </NavLink>

        <NavLink to={`/${lang}/essays`} onClick={() => setIsOpen(false)}>
          {t("navbar.essays")}
        </NavLink>

        <NavLink to={`/${lang}/novels`} onClick={() => setIsOpen(false)}>
          {t("navbar.novels")}
        </NavLink>

        <NavLink to={`/${lang}/poems`} onClick={() => setIsOpen(false)}>
          {t("navbar.poems")}
        </NavLink>

        <NavLink to={`/${lang}/quotes`} onClick={() => setIsOpen(false)}>
          {t("navbar.quotes")}
        </NavLink>

        <NavLink to={`/${lang}/music`} onClick={() => setIsOpen(false)}>
          {t("navbar.music")}
        </NavLink>

        <NavLink to={`/${lang}/graphic`} onClick={() => setIsOpen(false)}>
          {t("navbar.graphics")}
        </NavLink>

        <NavLink to={`/${lang}/comments`} onClick={() => setIsOpen(false)}>
          {t("navbar.comments")}
        </NavLink>
      </nav>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}