import React, { useState } from "react";
import "../header/header.css";
import Logo from "../../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";

const header = () => {
  const [underlined, setUnderlined] = useState(false);

  const handleClick = () => {
    setUnderlined(true);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav className="nav">
        <NavLink
          to="/"
          className={underlined ? "accueil" : ""}
          onClick={handleClick}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={underlined ? "a_propos" : ""}
          onClick={handleClick}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default header;
