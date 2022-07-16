import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';

const Register = () => {
  return (
    <section className="reg">
      <Link to="/">
        <img className="reg__logo" src={ logo } alt="Логотип"/>
      </Link>
      <h1 className="reg__title">Добро пожаловать!</h1>
      <form className="reg__form">
        <label className="reg__label">
          <h3 className="label__text">Имя</h3>
          <input className="reg__input"
                 type="text"
                 autoComplete="off"
                 required
          />
        </label>
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
        <button className="reg__button" type="submit">Зарегистрироваться</button>
      </form>
      <p className="reg__text">Уже зарегистрированы?&nbsp;
        <Link to="/signin" className="reg__text reg__link">Войти</Link>
      </p>
    </section>
  )
};

export default Register;
