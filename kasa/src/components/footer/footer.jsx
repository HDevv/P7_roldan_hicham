import React from "react";
import { useState } from "react";
import "../footer/footer.css";
import footerLogo from "../../assets/logo-footer.png";

const footer = () => {
  const [isFooterVisible, setFooterVisibility] = useState(true);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const isBottomOfPage = scrollTop + windowHeight >= documentHeight;

    if (!isBottomOfPage) {
      setFooterVisibility(true);
    } else {
      setFooterVisibility(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <footer
      className="footer"
      style={{ display: isFooterVisible ? "flex" : "none" }}
    >
      <img src={footerLogo} alt="Logo du footer" className="footer_logo" />

      <p className="txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default footer;
