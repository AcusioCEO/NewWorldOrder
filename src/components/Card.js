import React, { Component } from "react";
import "./styles/Card.css";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="container">
            <img
              className="deleted"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    );
  }
}
