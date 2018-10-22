import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomeBody />

        {/* <h1>New World Order Records ✪</h1> */}
      </div>
    );
  }
}

export default App;
