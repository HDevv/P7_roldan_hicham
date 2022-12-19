import { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../data.json";
import "../cards/cards.css";

function Card() {
  const [data] = useState(Data);

  return (
    <div className="cards_BG">
      {data.map((data) => (
        <Link to={`/data/${data.id}`} key={data.id}>
          <div key={data.id} className="card">
            <img src={data.cover} alt={data.title} className="card_img" />
            <div className="title">{data.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
