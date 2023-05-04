import React from "react";
import "../header/header.css";
import Logo from "../../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";

const header = () => {
  return (
    <nav className="header">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="Logo Kasa" />
      </NavLink>

      <NavLink to="/" className="accueil">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about" className="a_propos">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
};

export default header;
