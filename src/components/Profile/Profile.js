import React from "react";
import { Link } from "react-router-dom";

import './Profile.css';

import Header from "../Header/Header";

const Profile = () => {
  return (
    <>
      <Header loggedIn={ true } />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <label className="profile__label">
              <h3 className="profile__label-text">Имя</h3>
              <input className="profile__input"
                     type="text"
                     value="Виталий"
                     readOnly="readonly"
                     autoComplete="off"
                     required
              />
            </label>
            <div className="profile__line" />
            <label className="profile__label">
              <h3 className="profile__label-text">E-mail</h3>
              <input className="profile__input"
                     type="email"
                     value="pochta@yandex.ru"
                     readOnly="readonly"
                     autoComplete="off"
                     required
              />
            </label>
          </form>
          <div className="profile__buttons">
            <button className="profile__edit-button" type="button">Редактировать</button>
            <Link className="profile__logout-button" to="/signin">Выйти из аккаунта</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;
