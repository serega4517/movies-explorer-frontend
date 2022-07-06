import React from 'react';

import promoImg from '../../images/promo-img.svg';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info-wrapper">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
          <a className="promo__button" href="#about-project">Узнать больше</a>
        </div>
        <img className="promo__img" src={promoImg} alt="Planet" />
      </div>
    </section>
  )
};

export default Promo;
