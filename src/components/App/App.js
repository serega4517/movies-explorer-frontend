import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
  <div className="page">
    <Switch>
      <Route exact path="/">
        <Header loggedIn={ false } />
        <Main />
      </Route>

      <Route path="/movies">
        <Header loggedIn={ true } />
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </div>
  )
}

export default App;
