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
              src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
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
