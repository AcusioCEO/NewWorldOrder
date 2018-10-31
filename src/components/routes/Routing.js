import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
// import About from "../About";
import Artists from "../Artists";
import Contact from "../Contact";
import Error from "../Error";

import "../styles/Navbar.css";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/artists" component={Artists} />
          <Route path="/contact" component={Contact} />

          <Route component={Error} exact />
        </Switch>
      </div>
    );
  }
}
