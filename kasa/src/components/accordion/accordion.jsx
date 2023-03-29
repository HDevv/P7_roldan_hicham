import React from "react";
import { useState } from "react";
import chevron from "../../assets/Chevron.png";
import PropTypes from "prop-types";
import "../accordion/accordion.css";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <div className="accordeon">
      <div className="accordeon_header" onClick={() => setIsActive(false)}>
        <h2>{title}</h2>
        <img src={chevron} className="icone_ouverte" alt="arrow open" />
      </div>
      <div className="accordeon_content">
        <ul aria-hidden="false">{content}</ul>
      </div>
    </div>
  ) : (
    <div className="accordeon">
      <div className="accordeon_header" onClick={() => setIsActive(true)}>
        <h2>{title}</h2>
        <img src={chevron} className="icone" alt="arrow closed" />
      </div>
      <div className="accordeon_content_hidden" aria-hidden="true">
        <ul aria-hidden="true">{content}</ul>
      </div>
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};
