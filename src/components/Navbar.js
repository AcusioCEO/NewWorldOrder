import "./styles/Navbar.css";

import React, { Component } from "react";

function collapse(e) {
  e.preventDefault();
  console.log("The link was clicked.");

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

class Navbar extends Component {
  render() {
    return (
      <div class="topnav" id="myTopnav">
        <a href="/home" className="active">
          New World Order Records ✪
        </a>
        <a href="/news">News</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/" className="icon" onClick={collapse}>
          <i class="fa fa-bars" />
        </a>
      </div>
    );
  }
}
export default Navbar;
