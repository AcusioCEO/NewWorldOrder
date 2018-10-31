import React, { Component } from "react";

//Importing React Router
import { BrowserRouter, NavLink } from "react-router-dom";
import Routing from "./routes/Routing";

//Importing styles for the navbar
import "./styles/Navbar.css";

//Function to handle collapsible navbar
function collapse(e) {
  e.preventDefault();

  //Grabs the navbar element
  var x = document.getElementById("myTopnav");

  //if navbar is
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="topnav" id="myTopnav">
            <NavLink to="/home" className="active">
              New World Order Records
            </NavLink>
            {/* <NavLink to="/about">About </NavLink> */}
            <NavLink to="/artists">Artists </NavLink>
            <NavLink to="/contact">Contact </NavLink>
            <NavLink to="/" className="icon" onClick={collapse}>
              <i className="fa fa-bars" />
            </NavLink>
          </div>
          <Routing />
        </div>
      </BrowserRouter>
    );
  }
}
export default Navbar;
