import React, { Component } from "react";
import "../styles/lilstar.css";
import "../styles/Artists.css";

// import "../styles/Card.css";

export default class lilstar extends Component {
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
        <div />
        <div className="card">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1049793469575774208/Zu9XzKfq_400x400.jpg"
              alt="Lil Star Avatar"
              style={{ width: "100%" }}
            />
          </div>

          <div className="footie">
            <h1>KV Nino</h1>
            <b class="title">Artist</b>
            {/* <p>Harvard University</p> */}
          </div>

          <div className="footie-green">
            <a
              href="https://www.youtube.com/channel/UCXR9e82HM7iCoTd137fvyzg?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-youtube youtube" />
            </a>
            <a
              href="https://soundcloud.com/roxstar888"
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
