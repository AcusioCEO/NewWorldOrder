import React, { Component } from "react";
import "./styles/Artists.css";

import "./styles/Card.css";
import { Link } from "react-router-dom";

export default class Artists extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Artists</h1>

        <div className="row">
          <Link to="/lilstar" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1048751501768716288/aXJjBa_U_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Lil Star</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/kvnino" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1050298812370018304/HMEGMTxt_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> Knowledge </b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/isaac" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1049793469575774208/Zu9XzKfq_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b> KV Nino</b>
                  </h4>
                  <p>Orlando, FL</p>
                </div>
              </div>
              <br />
            </div>
          </Link>

          <Link to="/acausal" className="column">
            <div>
              <br />

              <div className="card">
                <div className="container">
                  <img
                    className="deleted"
                    src="https://pbs.twimg.com/profile_images/1044109940896538625/IvomYFrU_400x400.jpg"
                    alt="Avatar"
                  />
                  <h4>
                    <b>4Causal</b>
                  </h4>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
