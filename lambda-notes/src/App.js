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
    // this.fetchNote("5c6250dae3d19000159d2587");
  }

  fetchNotes = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ notes: data });
      })
      .catch(error => this.setState({ error: error }));
  };

  fetchNote = _id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${_id}`)
      .then(({ data }) => this.setState({ notes: [data] }))
      .catch(error => this.setState({ error: error }));
  };

  createNote = note => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
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
