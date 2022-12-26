import { Link } from "react-router-dom";
import "../error/error.css";

import React from "react";

const error = () => {
  return (
    <div className="err">
      <h1 className="notfound">404</h1>
      <div className="txt">Oups! La page que vous demendez n'existe pas.</div>
      <Link to="/" className="go_back">
        Reourner sur la page d'acceuil
      </Link>
    </div>
  );
};

export default error;
