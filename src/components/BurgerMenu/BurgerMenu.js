import React from "react";
import { Link } from "react-router-dom";

import './BurgerMenu.css';
import profileIcon from "../../images/icon__profile.svg";

const BurgerMenu = () => {
  return (
    <>
      <button className="burger-menu__button"
              type="button"
      />
      <div className="burger-menu">
        <button className="burger-menu__close-button"
                type="button"
        />
        <div className="burger-menu__container">
          <ul className="burger-menu__links">
            <li className="burger-menu__link-item">
              <Link className="burger-menu__link" to="/">Главная</Link>
            </li>
            <li className="burger-menu__link-item">
              <Link className="burger-menu__link" to="/movies">Фильмы</Link>
            </li>
            <li className="burger-menu__link-item">
              <Link className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
            </li>
          </ul>
          <Link className="burger-menu__link burger-menu__link_type_profile" to="/profile">
            Аккаунт
            <img className="burger-menu__profile-icon" src={profileIcon} alt=""/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu;
