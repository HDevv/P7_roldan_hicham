import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Equipements from "../../components/equipements/equipements.jsx";

const Home = () => {
  return (
    <div className="Home">
      {/* <Header /> */}
      {/* <Footer /> */}
      <div className="accordions">
        <Equipements title="Titre 1" content="contenu" />
      </div>
    </div>
  );
};

export default Home;
