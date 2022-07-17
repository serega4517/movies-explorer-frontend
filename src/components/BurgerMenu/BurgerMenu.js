import React from "react";
import { Link } from "react-router-dom";

import './BurgerMenu.css';
import profileIcon from "../../images/icon__profile.svg";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <input id="menu__toggle" type="checkbox" className="burger-menu__checkbox"/>
      <label className="burger-menu__button" htmlFor="menu__toggle">
        <span className="burger-menu__button-line" />
      </label>

      <ul className="burger-menu__box">
        <li className="burger-menu__item"><Link className="burger-menu__link" to="/">Главная</Link></li>
        <li className="burger-menu__item"><Link className="burger-menu__link" to="/movies">Фильмы</Link></li>
        <li className="burger-menu__item"><Link className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</Link></li>
        <li className="burger-menu__item burger-menu__item_type_profile">
          <Link className="burger-menu__link burger-menu__link_type_profile" to="/profile">
            Аккаунт
            <img className="burger-menu__profile-icon" src={ profileIcon } alt="Иконка профиля"/>
          </Link></li>
      </ul>
      <div className="overlay" />
    </div>
  )
}

export default BurgerMenu;
