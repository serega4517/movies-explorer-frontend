import React from "react";

import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
          <article className="about-project__article">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </article>
          <article className="about-project__article">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </article>
        </div>
        <div className="about-project__time-band">
          <span className="about-project__time-band-weeks about-project__time-band-weeks_green">1 неделя</span>
          <span className="about-project__time-band-weeks about-project__time-band-weeks_grey">4 недели</span>
          <span className="about-project__time-band_type_subtitle">Back-end</span>
          <span className="about-project__time-band_type_subtitle">Front-end</span>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
