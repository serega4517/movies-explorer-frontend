import React from "react";
import { Link } from "react-router-dom";

import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Logo"/>
        <nav className="header__nav">
          <ul className="header__links">
            <li className="header__link-item">
              <Link className="header__link" to="/signup">Регистрация</Link>
              <Link className="header__link header__link_type_login" to="/signin">Войти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
