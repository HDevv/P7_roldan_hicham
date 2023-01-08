import React from "react";
import { useState } from "react";
import chevron from "../../assets/Chevron.png";
import PropTypes from "prop-types";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <div className="accordeon">
      <div className="accordeon_header" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <img src={down_arrow_icon} className="icone_ouverte" alt="arrow open" />
      </div>
      <div className="accordeon_content">
        <ul aria-hidden="false">{content}</ul>
      </div>
    </div>
  ) : (
    <div className="accordeon">
      <div className="accordeon_header" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <img src={down_arrow_icon} className="icone" alt="arrow closed" />
      </div>
      <div className="accordeon_content_hidden" aria-hidden="true">
        <ul aria-hidden="true">{content}</ul>
      </div>
    </div>
  );
}

export default Accordion;
