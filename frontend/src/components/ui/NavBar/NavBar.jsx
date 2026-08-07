import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";

import Menu from "../Menu/Menu"

import "./NavBar.css";

function Navbar() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <Menu className="navbar"/>
  );
}

export default Navbar;