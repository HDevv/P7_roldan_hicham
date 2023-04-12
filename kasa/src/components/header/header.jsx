import React from "react";
import "../header/header.css";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Kasa" className="logo" />
      <nav className="nav">
        <NavLink to="/" className="accueil">
          Accueil
        </NavLink>
        <NavLink to="/about" className="a_propos">
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default header;
