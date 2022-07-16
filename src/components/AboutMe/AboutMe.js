import React from "react";

import './AboutMe.css';
import student from '../../images/student.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__wrapper">
          <div className="about-me__info">
            <h2 className="about-me__name">Виталий</h2>
            <h3 className="about-me__job">Фронтенд-разработчик, 30 лет</h3>
            <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <ul className="about-me__links">
              <li className="about-me__link-item">
                <a className="about-me__link" href="#">Facebook</a>
              </li>
              <li className="about-me__link-item">
                <a className="about-me__link" href="#">Github</a>
              </li>
            </ul>
          </div>
          <img className="about-me__photo" src={ student } alt="Фото студента" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
