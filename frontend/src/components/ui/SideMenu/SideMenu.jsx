import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Menu from "../Menu/Menu"

import "./SideMenu.css";

export default function SideMenu({boolCross}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >☰</button>

      <Menu className={`sidemenu ${isOpen ? "show" : ""}`}onMouseLeave={() => setIsOpen(false)}/>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}