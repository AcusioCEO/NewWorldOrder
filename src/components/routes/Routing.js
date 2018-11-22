import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Artists from "../Artists";

//Artists pages
import lilstar from "../Artist Pages/lilstar";
import kvnino from "../Artist Pages/kvnino";
import isaac from "../Artist Pages/isaac";
import jesseta from "../Artist Pages/jesseta";

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

          {/* Artists Page */}
          <Route path="/lilstar" component={lilstar} />
          <Route path="/kvnino" component={kvnino} />
          <Route path="/isaac" component={isaac} />
          <Route path="/jesseta" component={jesseta} />

          <Route component={Error} exact />
        </Switch>
      </div>
    );
  }
}
