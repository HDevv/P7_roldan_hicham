import React from "react";
import { useState } from "react";
import "../footer/footer.css";
import footerLogo from "../../assets/logo-footer.png";

const footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="Logo du footer" className="footer_logo" />

      <p className="txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default footer;
