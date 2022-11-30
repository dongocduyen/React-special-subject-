import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

export class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      usersData: response.data.items,
    });
  };

  clearUsers = () => {
    this.setState({
      usersData: [],
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Search}>
                <Search
                  clearUsers={this.clearUsers}
                  searchUsers={this.searchUsers}
                />
                <Users usersData={this.state.usersData} />
              </Route>
            </Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
