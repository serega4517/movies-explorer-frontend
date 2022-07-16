import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { movies } from "../../utils/movies";

const Movies = () => {
  return (
    <>
      <Header loggedIn={ true } />
      <SearchForm />
      <MoviesCardList movies={ movies } />
      <Footer />
    </>
  )
}

export default Movies;
