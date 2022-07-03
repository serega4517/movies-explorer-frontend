import React from 'react';
import { Link } from 'react-router-dom';

import '../Register/Register.css';
import './Login.css';
import logo from '../../images/logo.svg';

const Login = () => {
  return (
    <section className="reg">
      <img className="reg__logo" src={logo} alt="Logo" />
      <h1 className="reg__title">Рады видеть!</h1>
      <form className="reg__form">
        <label className="reg__label">
          <h3 className="label__text">E-mail</h3>
          <input className="reg__input"
                 type="email"
                 autoComplete="off"
                 required
          />
        </label>
        <label className="reg__label">
          <h3 className="label__text">Пароль</h3>
          <input className="reg__input"
                 type="password"
                 autoComplete="off"
                 required
          />
        </label>
        <button className="reg__button_type_login" type="submit">Войти</button>
      </form>
      <p className="reg__text">Еще не зарегистрированы?&nbsp;
        <Link to="/signup" className="reg__text reg__link">Регистрация</Link>
      </p>
    </section>
  )
};

export default Login;
