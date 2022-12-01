import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login.js";
import User from "../users/User";
import PageNotFound from "../pages/PageNotFound";

function Main() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user/:loginId">
          <User />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
