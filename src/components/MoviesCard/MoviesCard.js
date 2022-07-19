import React from "react";
import { useState } from "react";

import './MoviesCard.css';

const MoviesCard = ({ title, duration, image, isSavedFilmsPage }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;

    return `${ hours }ч ${ minutes }м`;
  }

  // С кнопкой сохранения фильмов и удаления с сохраненных получился какой-то костыль, как мне кажется :)
  // Но пока другого варианта не придумал как это реализовать
  const toggleButton = (page) => {
    if (!page) {
      return `movies-card__button ${isSaved ? "movies-card__button_checked" : "movies-card__button_unchecked"}`
    } else {
      return "movies-card__button movies-card__button_delete"
    }
  }

  return (
    <div className="movies-card"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => !isSaved && setIsVisible(false)}
    >
      <img className="movies-card__image" src={ image } alt="Обложка фильма" />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{ title }</h2>
        <span className="movies-card__duration">{ getTimeFromMins(duration) }</span>
        { isVisible && (
          <button className={toggleButton(isSavedFilmsPage)}
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
          />
        )}
      </div>
    </div>
  )
}

export default MoviesCard;
