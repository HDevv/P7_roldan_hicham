import React from "react";
import { Data } from "../../data/Data";
import { useParams, Navigate } from "react-router-dom";
import Diapo from "../../components/diapo/diapo";
import fullStar from "../../assets/full_star.png";
import emptyStar from "../../assets/empty-star.png";
import Accordion from "../../components/accordion/accordion";
import "../logements/logement.css";

const Logements = () => {
  let { id } = useParams();
  const stars = [1, 2, 3, 4, 5];
  const logement = Data.getOneLodging(id);

  return (
    <>
      {logement ? (
        <div className="container">
          <Diapo key={logement.pictures} slides={logement.pictures} />
          <section key={logement.id} className="cardInfos">
            <article className="logementInfos">
              <div className="locationInfos">
                <h1 key={logement.title}>{logement.title}</h1>
                <p className="city" key={logement.location}>
                  {logement.location}
                </p>
              </div>

              <div>
                <ul className="logementTags">
                  {logement.tags.map((tag) => (
                    <li className="logementTagItem" key={tag + logement.id}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="logementInfos2">
              <div>
                <div className="hostInfos">
                  <p>{logement.host.name}</p>
                  <img
                    src={logement.host.picture}
                    alt="the host"
                    className="hostPicture"
                  />
                </div>
              </div>

              <div>
                <div className="starsList">
                  {stars.map((star, index) => (
                    <img
                      className="star"
                      key={star + logement.id + index}
                      // opérateur conditionnel
                      src={index <= logement.rating ? fullStar : emptyStar}
                      alt={star}
                    />
                  ))}
                </div>
              </div>
            </article>
          </section>

          <div className="accordions accordions_">
            <Accordion
              title="Description"
              key={logement.description}
              content={logement.description}
            />

            <Accordion
              key={logement.equipments + logement.id}
              title="Equipements"
              content={logement.equipments.map((infos, index) => (
                <li key={`${logement.equipments}-${index}`}>{infos}</li>
              ))}
            />
          </div>
        </div>
      ) : (
        <Navigate replace to="/*" />
      )}
    </>
  );
};

export default Logements;
