import React from "react";
import { useState } from "react";
import chevron from "../../assets/Chevron.png";
import PropTypes from "prop-types";
import "../accordion2/accordion2.css";

function Accordion2({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <div className="acc_cont">
      <div className="accordeon2">
        <div className="accordeon2_header" onClick={() => setIsActive(false)}>
          <h3>{title}</h3>
          <img src={chevron} className="icone2_ouverte" alt="arrow open" />
        </div>
        <div className="accordeon2_content">
          <ul aria-hidden="false">{content}</ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="acc_cont">
      <div className="accordeon2">
        <div className="accordeon2_header" onClick={() => setIsActive(true)}>
          <h3>{title}</h3>
          <img src={chevron} className="icone2" alt="arrow closed" />
        </div>
        <div className="accordeon2_content_hidden" aria-hidden="true">
          <ul aria-hidden="true">{content}</ul>
        </div>
      </div>
    </div>
  );
}

export default Accordion2;

Accordion2.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};
