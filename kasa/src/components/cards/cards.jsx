import React from "react";
import { useState } from "react";
import Data from "../../donnees.json";

const cards = () => {
  const [data, setData] = useState([]);

  return;
  <div className="card">
    <div className="data">
        {data.map((data) => (
            <Data 
            key={data.recipe}
        ))}
    </div>
  </div>;
};

export default cards;
