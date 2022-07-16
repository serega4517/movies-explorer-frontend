import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { savedMovies } from "../../utils/movies";

const SavedMovies = () => {
  return (
    <>
      <Header loggedIn={ true } />
      <SearchForm />
      <MoviesCardList movies={ savedMovies } />
      <Footer />
    </>
  )
}

export default SavedMovies;
