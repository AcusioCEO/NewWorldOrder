import "./styles/Layout.css";

import React, { Component } from "react";

import Typed from "react-typed";

export default class Layout extends Component {
  render() {
    return (
      <div className="about">
        <Typed
          strings={[
            "N.W.O. is a collective of individuals looking to redefine mainstream media."
          ]}
          typeSpeed={40}
          loop
        />
        <hr />
        <b>
          Our goal is to dominate the industry and catalyze the New World Order
          into effect.
          <br />
          <br />
          Since its inception in 2018, we have worked with the likes of Lil
          Star, Jess ETA, KV Nino, Isaac, 4Causal, & Knowledge The
          Extraordinary.
        </b>
      </div>
    );
  }
}
