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

  // a `GET` request to this route will return a list of all the notes.
  fetchNotes = () => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ notes: data });
      })
      .catch(error => this.setState({ error: error }));
  };

  // a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.
  fetchNote = _id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${_id}`)
      .then(({ data }) => this.setState({ notes: [data] }))
      .catch(error => this.setState({ error: error }));
  };

  // a `POST` request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.
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
