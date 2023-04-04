import { useState } from "react";
import { Link } from "react-router-dom";
import Logements from "../../data/data.json";
import "../cards/cards.css";

function Card() {
  const [lodgings] = useState(Logements);

  return (
    <div className="cards_bg">
      {lodgings.map((lodging) => (
        <Link to={`/logements/${lodging.id}`} key={lodging.id}>
          <div key={lodging.id} className="card">
            <img src={lodging.cover} alt={lodging.title} className="card_img" />
            <div className="title">{lodging.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
