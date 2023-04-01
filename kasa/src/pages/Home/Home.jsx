import React from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/cards/cards";
import BannerHomeImg from "../../assets/Bg_banner_home.png";

const Home = () => {
  return (
    <div className="Home">
      <Banner src={BannerHomeImg} title={"Chez vous, partout et ailleurs"} />
      <Card />
    </div>
  );
};

export default Home;
