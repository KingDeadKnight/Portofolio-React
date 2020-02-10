import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "./HomePage";

const { Navbar } = require("react-materialize");

const MyNavBar = () => {
  return (
    <Router>
      <Navbar alignLinks="left" className="grey darken-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

function Home() {
  return <HomePage />;
}

function About() {
  return <h2>About</h2>;
}

export default MyNavBar;
