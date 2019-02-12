import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SideBar} />
      </div>
    );
  }
}

export default App;
