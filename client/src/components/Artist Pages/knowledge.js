import React, { Component } from "react";
import "../styles/lilstar.css";
import "../styles/Artists.css";

// import "../styles/Card.css";

export default class knowledge extends Component {
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
              src="https://pbs.twimg.com/profile_images/1050298812370018304/HMEGMTxt_400x400.jpg"
              alt="Knowledge Avatar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="footie">
            <h1>Knowledge</h1>
            <b class="title">Artist</b>
            {/* <p>Harvard University</p> */}
          </div>

          <div className="footie-green">
            <a
              href="https://itunes.apple.com/us/album/the-heros-project/1437575638"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-apple apple" />
            </a>
            <a
              href="https://open.spotify.com/artist/3oVGUKgY2tGbDEagj3t887"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-spotify spotify" />
            </a>
            <a
              href="https://www.youtube.com/user/Mora98ML/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-youtube youtube" />
            </a>
            <a
              href="https://soundcloud.com/knowledge626"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-soundcloud soundcloud" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
