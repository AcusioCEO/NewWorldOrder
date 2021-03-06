import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Artists from "../Artists";

//Artists pages
import lilstar from "../Artist Pages/lilstar";
import kvnino from "../Artist Pages/kvnino";
import knowledge from "../Artist Pages/knowledge";

import Contact from "../Contact";
import Error from "../Error";

import "../styles/Navbar.css";
import acausal from "../Artist Pages/acausal";

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
          <Route path="/knowledge" component={knowledge} />
          <Route path="/acausal" component={acausal} />

          <Route component={Error} exact />
        </Switch>
      </div>
    );
  }
}
