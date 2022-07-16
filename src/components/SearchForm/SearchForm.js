import React from "react";

import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form" name="search-form">
      <div className="search-form__input-container">
        <input className="search-form__input" type="text" placeholder="Фильм"/>
        <a className="search-form__button" href="#" />
      </div>
      <div className="search-form__checkbox-container">
        <input className="search-form__checkbox" type="checkbox" id="switch"/>
        <label className="search-form__checkbox_type_toggle" htmlFor="switch" />
        <p className="search-form__checkbox-name">Короткометражки</p>
      </div>
    </form>
  )
}

export default SearchForm;
