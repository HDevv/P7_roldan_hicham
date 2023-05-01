import React, { useState } from "react";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.png";
import "../diapo/diapo.css";
import PropTypes from "prop-types";

export default function Slideshow({ slides }) {
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToNext = (length) => {
    setcurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = (length) => {
    setcurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  return (
    <>
      <section className="slider">
        {slides.length > 1 ? (
          <>
            <img
              src={leftArrow}
              alt="previous img"
              className="left_arrow"
              onClick={goToPrevious}
            />
            <img
              src={rightArrow}
              alt="next img"
              className="right_arrow"
              onClick={goToNext}
            />
          </>
        ) : (
          ""
        )}

        <article className="slide active" key={slides}>
          <img src={slides[currentIndex]} className="logementImg" />
        </article>

        <p className="slide_rooms">
          {`${currentIndex + 1}`}/{`${slides.length}`}{" "}
        </p>
      </section>
    </>
  );
}

Slideshow.propTypes = {
  slides: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
