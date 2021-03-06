import React, { Component } from "react";
import "./App.css";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

document.body.style = "background-color: #fff3ea";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
