import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, isSavedFilmsPage }) => {
  return (
    <section className="movies-cards">
      <div className="movies-cards__container">
        <ul className="movies-cards__list">
          {movies.map((movie) => (
            <li className="movies-card__item"
                key={ movie.movieId }
            >
              <MoviesCard title={ movie.nameRU }
                          duration={ movie.duration }
                          image={ movie.image }
                          isSavedFilmsPage={ isSavedFilmsPage }
            />
          </li>
          ))}
        </ul>
      </div>
      { !isSavedFilmsPage && (
        <div className="movies-cards__button-wrapper">
          <button className="movies-cards__button">Ещё</button>
        </div>
      )}
    </section>
  )
}

export default MoviesCardList;
