import React from "react";

import './SavedMovies.css';

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { savedMovies } from "../../utils/movies";

const SavedMovies = () => {
  return (
    <>
      <section className="saved-movies">
        <Header loggedIn={ true } />
        <SearchForm />
        <MoviesCardList movies={ savedMovies }
                        isSavedFilmsPage={ true }
        />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;
