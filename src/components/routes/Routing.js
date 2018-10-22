import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Artists from "../Artists";
import Contact from "../Contact";
import Error from "../Error";

import "../styles/Navbar.css";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <div>
            <Route path="/home" component={Home} exact />
            <Route path="/artists" component={Artists} />
            <Route path="/contact" component={Contact} />
          </div>
          <Route component={Error} exact />
        </Switch>
      </div>
    );
  }
}
