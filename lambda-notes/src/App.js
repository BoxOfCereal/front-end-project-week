import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { SideBar } from "./components";
import { ListView } from "./views";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      error: ""
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(({ data }) => this.setState({ notes: data }))
      .catch(error => this.setState({ error: error }));
  };

  render() {
    return (
      <div className="App">
        <Route path="/" component={SideBar} />
        <Route
          path="/"
          render={props => <ListView notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
