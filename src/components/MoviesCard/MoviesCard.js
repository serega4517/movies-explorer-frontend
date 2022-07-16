import React from "react";
import { useState } from "react";

import './MoviesCard.css';

const MoviesCard = ({ title, duration, image }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="movies-card"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => !isSaved && setIsVisible(false)}
    >
      <img className="movies-card__image" src={ image } alt="" />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{ title }</h2>
        <span className="movies-card__duration">{ duration }</span>
        { isVisible && (
          <button className={`movies-card__button ${isSaved ? "movies-card__button_checked" : "movies-card__button_unchecked"}`}
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
          />
        ) }
      </div>
    </div>
  )
}

export default MoviesCard;
