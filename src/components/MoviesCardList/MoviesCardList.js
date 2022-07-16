import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

import movie1 from '../../images/movie-1.png';
import movie2 from '../../images/movie-2.png';
import movie3 from '../../images/movie-3.png';
import movie4 from '../../images/movie-4.png';
import movie5 from '../../images/movie-5.png';
import movie6 from '../../images/movie-6.png';
import movie7 from '../../images/movie-7.png';
import movie8 from '../../images/movie-8.png';
import movie9 from '../../images/movie-9.png';
import movie10 from '../../images/movie-10.png';
import movie11 from '../../images/movie-11.png';
import movie12 from '../../images/movie-12.png';


const MoviesCardList = () => {
  return (
    <section className="movies-cards">
      <div className="movies-cards__container">
        <ul className="movies-cards__list">
          <li className="movies-card__item">
            <MoviesCard title="33 слова о дизайне"
                          duration="1ч 17м"
                          image={ movie1 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Киноальманах «100 лет дизайна»"
                          duration="1ч 17м"
                          image={ movie2 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="В погоне за Бенкси"
                          duration="1ч 17м"
                          image={ movie3 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Баския: Взрыв реальности"
                        duration="1ч 17м"
                        image={ movie4 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Бег это свобода"
                        duration="1ч 17м"
                        image={ movie5 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Книготорговцы"
                          duration="1ч 17м"
                          image={ movie6 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Когда я думаю о Германии ночью"
                          duration="1ч 17м"
                          image={ movie7 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Gimme Danger: История Игги и The Stooges"
                          duration="1ч 17м"
                          image={ movie8 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Дженис: Маленькая девочка грустит"
                          duration="1ч 17м"
                          image={ movie9 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Соберись перед прыжком"
                        duration="1ч 17м"
                        image={ movie10 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="Пи Джей Харви: A dog called money"
                        duration="1ч 17м"
                        image={ movie11 }
            />
          </li>
          <li className="movies-card__item">
            <MoviesCard title="По волнам: Искусство звука в кино"
                        duration="1ч 17м"
                        image={ movie12 }
            />
          </li>
        </ul>
      </div>

      <div className="movies-cards__button-wrapper">
        <button className="movies-cards__button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
