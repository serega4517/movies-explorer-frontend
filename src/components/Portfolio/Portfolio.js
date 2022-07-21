import React from "react";

import './Portfolio.css';

import linkIcon from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project-item">
            <a className="portfolio__project-link" href="https://serega4517.github.io/how-to-learn/" target="_blank">
              Статичный сайт
              <img className="portfolio__project-link-icon" src={linkIcon}/>
            </a>
          </li>
          <li className="portfolio__project-item">
            <a className="portfolio__project-link" href="https://serega4517.github.io/how-to-learn/" target="_blank">
              Адаптивный сайт
              <img className="portfolio__project-link-icon" src={linkIcon}/>
            </a>
          </li>
          <li className="portfolio__project-item">
            <a className="portfolio__project-link" href="https://serega4517.github.io/how-to-learn/" target="_blank">
              Одностраничное приложение
              <img className="portfolio__project-link-icon" src={linkIcon}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
