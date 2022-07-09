import React from "react";

import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__error not-found__text">404</h1>
      <p className="not-found__error-name not-found__text">Страница не найдена</p>
      <button className="not-found__button">Назад</button>
    </section>
  )
}

export default NotFound;
