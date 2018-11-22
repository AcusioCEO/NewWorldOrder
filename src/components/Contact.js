import React, { Component } from "react";
import "./styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
        }}
      >
        <h3 className="center">For all inquiries: nworecordsMGMT@Gmail.com</h3>
      </div>
    );
  }
}
