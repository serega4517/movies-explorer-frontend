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
      <Header loggedIn={ true } />
      <main className="main">
        <section className="saved-movies">
          <SearchForm />
          <MoviesCardList movies={ savedMovies }
                          isSavedFilmsPage={ true }
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
