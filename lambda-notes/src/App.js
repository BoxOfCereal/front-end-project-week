import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { SideBar, TopBar } from "./components";
import { ListView, CreateNoteView, NoteView } from "./views";
import { ApplicationWrapper } from "./styles/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      editedNote: "",
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

  /* a `POST` request to this route with the title and text in the req.body 
    will create a new note. 
    The response from the server will be the ID of the new note.
  */
  createNote = note => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(({ data }) => {
        console.log(data);
        //concat new note to state
        this.setState({ newNoteId: data });
      })
      .catch(error => this.setState({ error: error }));
  };

  /*a `PUT` request to this route with the title and text in the 
    req body will edit the note with the specified ID. 
    The response from the server will be the updated note object.
  */
  editNote = (_id, note) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
      .then(({ data }) => {
        this.setState({ editedNote: data });
        console.log(this.state.note);
      })
      .catch(error => this.setState({ error: error }));
  };

  deleteNote = _id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
      .then(({ data: { success } }) => {
        this.setState({ message: success });
        console.log(this.state.message);
      })
      .catch(error => this.setState({ error: error }));
  };

  render() {
    return (
      <ApplicationWrapper>
        <Route path="/" component={SideBar} />
        <Route path="/" component={TopBar} />

        <Route
          path="/"
          exact
          render={props => <ListView notes={this.state.notes} />}
        />
        <Route path="/create" render={props => <CreateNoteView />} />
        <Route path="/note/:id" render={props => <NoteView />} />
        {/* <button
          onClick={() => {
            this.createNote({
              tags: ["tag", "otherTag"],
              title: "Note Title",
              textBody: "Note Body"
            });
          }}
        /> */}
        {/* <button
          onClick={() => {
            this.editNote("5c63735eb3638b00153d4e59", {
              title: "delete all of these",
              textBody: "no really feel free to delete all of these",
              tags: []
            });
          }}
        >
          EDIT
        </button> */}
        {/* <button
          onClick={() => {
            this.deleteNote("5c636979b3638b00153d4e52");
          }}
        >
          Delete
        </button> */}
      </ApplicationWrapper>
    );
  }
}

export default App;
