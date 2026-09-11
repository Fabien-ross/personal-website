import { useState } from "react";

import Menu from "../Menu/Menu"

import "./SideMenu.css";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >☰</button>

      <Menu className={`sidemenu ${isOpen ? "show" : ""}`} 
            onNavigate={() => setIsOpen(false)} />
      
      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}