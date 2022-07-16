import React from "react";
import { Link } from "react-router-dom";

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  return (
    <>
    { loggedIn ? (
      <header className="header header_theme_black">
        <div className="header__container">
          <Navigation />
        </div>
      </header>
      ) : (
        <header className="header header_theme_dark-blue">
          <div className="header__container">
            <Link to="/">
              <img className="header__logo" src={ logo } alt="Логотип"/>
            </Link>
            <nav className="header__links">
              <ul className="navigation__links">
                <li className="header__link-item">
                  <Link className="header__link" to="/signup">Регистрация</Link>
                </li>
                <li className="header__link-item">
                  <Link className="header__link header__link_type_login" to="/signin">Войти</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  )
}

export default Header;
