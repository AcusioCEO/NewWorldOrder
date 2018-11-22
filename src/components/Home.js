import React, { Component } from "react";
import Layout from "./Layout";
import Artists from "./Artists";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Artists />
      </div>
    );
  }
}
