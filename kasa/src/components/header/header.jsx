import React from "react";
import "../header/header.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Kasa" className="logo" />
      <nav className="nav">
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <Link to="/about" className="a_propos">
          A propos
        </Link>
      </nav>
    </header>
  );
};

export default header;
