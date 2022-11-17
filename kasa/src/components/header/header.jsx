import React from "react";
import "../header/header.css";
import Group from "../../assets/Group.svg";
import Vector_a from "../../assets/Vector_a.svg";
import Vector_k from "../../assets/Vector_k.svg";
import Vector_s from "../../assets/Vector_s.svg";

const header = () => {
  return (
    <nav className="header">
      <h1>
        <div className="kasa">
          <img className="vector_k" src={Vector_k} alt="" />
          <img className="group" src={Group} alt="" />
          <img className="vector_s" src={Vector_s} alt="" />
          <img className="vector_a" src={Vector_a} alt="" />
        </div>
      </h1>
      <ul>
        <li className="accueil">Accueil</li>
        <li className="a_propos">A propos</li>
      </ul>
    </nav>
  );
};

export default header;
