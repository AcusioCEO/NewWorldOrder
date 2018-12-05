import React, { Component } from "react";
import "../styles/lilstar.css";
import "../styles/Artists.css";

// import "../styles/Card.css";

export default class acausal extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
          // backgroundColor: "red"
        }}
      >
        <div className="card">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1044109940896538625/IvomYFrU_400x400.jpg"
              alt="Lil Star Avatar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="footie">
            <h1>4Causal</h1>
            <b class="title">Producer / Recording Artist </b>
            {/* <p>Harvard University</p> */}
          </div>

          <div className="footie-green">
            <a
              href="https://itunes.apple.com/us/album/drippy-feat-4causal-single/1442916161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-apple apple" />
            </a>
            <a
              href="https://open.spotify.com/track/7iKaQwlJ1zp7LTwC8AQzQO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-spotify spotify" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=d-K3f0Si9h4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-youtube youtube" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
