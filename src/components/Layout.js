import "./styles/Layout.css";

import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div className="body-piece">
        <div class="grid-container">
          <div class="item1">Header</div>
          <div class="item2">Menu</div>
          <div class="item3">Main</div>
          <div class="item4">Right</div>
          <div class="item5">Footer</div>
        </div>
      </div>
    );
  }
}
