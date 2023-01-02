import React from "react";
import { useState } from "react";
import "../accordeons2/accordeons2.css";

function Equipements({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title" onClick={handleToggle}>
        {title} <span className="accordion__icon"></span>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Equipements;
