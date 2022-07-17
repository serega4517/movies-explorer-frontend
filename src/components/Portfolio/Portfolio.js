import React from "react";

import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project-item">
            <p className="portfolio__project">Статичный сайт</p>
            <a className="portfolio__project-link" href="https://serega4517.github.io/how-to-learn/" target="_blank" />
          </li>
          <li className="portfolio__project-item">
            <p className="portfolio__project">Адаптивный сайт</p>
            <a className="portfolio__project-link" href="https://serega4517.github.io/russian-travel/" target="_blank" />
          </li>
          <li className="portfolio__project-item">
            <p className="portfolio__project">Одностраничное приложение</p>
            <a className="portfolio__project-link" href="https://serega4517.github.io/mesto/" target="_blank" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
