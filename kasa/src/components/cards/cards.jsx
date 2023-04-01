import { useState } from "react";
import { Link } from "react-router-dom";
import Lodgings from "../../data/data.json";
import "../cards/cards.css";

function Card() {
  const [lodgings] = useState(Lodgings);

  return (
    <div className="cards_BG">
      {lodgings.map((lodging) => (
        <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>
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
