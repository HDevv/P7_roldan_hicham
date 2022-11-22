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
        <Equipements
          title="Equipements"
          content={
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Home;
