import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-content">
        <a href="#welcome">
          <img
            src="/images/perfil.jpg"
            className="profile-img"
            alt="Perfil"
            style={{ cursor: "pointer" }}
          />
        </a>
        <nav className="abas">
          <a className="tabComp" href="#experiences">
            Experiências
          </a>
          <a className="tabComp" href="#skills">
            Habilidades
          </a>
          <a className="tabComp" href="#about">
            Sobre
          </a>
          <a className="tabComp" href="#contact">
            Contato
          </a>
        </nav>
        <button
          className="mode-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
