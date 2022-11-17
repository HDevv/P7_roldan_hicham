import React from "react";
import "../footer/footer.css";
import Group from "../../assets/Group.svg";
import Vector_a from "../../assets/Vector_a.svg";
import Vector_k from "../../assets/Vector_k.svg";
import Vector_s from "../../assets/Vector_s.svg";

const footer = () => {
  return (
    <div className="footer">
      <h1>
        <div className="kasa">
          <img className="vector_k2" src={Vector_k} alt="" />
          <img className="group2" src={Group} alt="" />
          <img className="vector_s2" src={Vector_s} alt="" />
          <img className="vector_a2" src={Vector_a} alt="" />
        </div>
      </h1>

      <div className="text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default footer;
