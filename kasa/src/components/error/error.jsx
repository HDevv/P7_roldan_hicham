import { Link } from "react-router-dom";
import "../error/error.css";

import React from "react";

const error = () => {
  return (
    <div className="err">
      <h2 className="notfound">404</h2>
      <div className="txt2">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="go_back">
        Retourner sur la page d'acceuil
      </Link>
    </div>
  );
};

export default error;
