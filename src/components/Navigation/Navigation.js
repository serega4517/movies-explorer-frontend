import React from "react";
import { Link } from "react-router-dom";

import './Navigation.css';
import profileIcon from '../../images/icon__profile.svg'
import logo from "../../images/logo.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <img className="navigation__logo" src={logo} alt="Logo"/>
      </Link>
      <div className="navigation__movies-wrapper">
        <ul className="navigation__movies">
          <li className="navigation__link-item">
            <Link className="navigation__link" to="/movies">Фильмы</Link>
          </li>
          <li className="navigation__link-item">
            <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
          </li>
        </ul>
      </div>
        <Link className="navigation__link navigation__link_type_profile" to="/profile">
          Аккаунт
          <img className="navigation__profile-icon" src={profileIcon} alt=""/>
        </Link>
    </nav>
  )
}

export default Navigation;
