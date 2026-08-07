import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LINKS } from "../../../app/routes"

import "./Menu.css";

export default function Menu({ className = "" }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
      <nav className={className}>
        {LINKS                          // mapping on all the enabled links provided in the file route.js
        .filter(link => link.enabled)
        .map(({ key, path }) => (
          <NavLink
            key={key}
            to={path(lang)}
            onClick={() => setIsOpen(false)}
          >
            {t(`navbar.${key}`)}
          </NavLink>
        ))}
      </nav>
  );
}