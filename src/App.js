import axios from "axios";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import GithubState from "./context/github/githubState";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";


const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <Main />
          {/* <Footer /> */}
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
