import React from "react";
import Banner from "../../components/banner/banner";
import BgAbout from "../../assets/bg_banner_about.png";

const about = () => {
  return (
    <div>
      <Banner src={BgAbout} alt="Paysage montagnard" />
    </div>
  );
};

export default about;
