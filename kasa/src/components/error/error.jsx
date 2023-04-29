import { Link } from "react-router-dom";
import "../error/error.css";

import React from "react";

const error = () => {
  return (
    <div className="err">
      <h1 className="notfound">404</h1>
      <p className="txt2">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="go_back">
        Reourner sur la page d'acceuil
      </Link>
    </div>
  );
};

export default error;
