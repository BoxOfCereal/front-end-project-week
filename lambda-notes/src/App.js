import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { SideBar, TopBar, DeleteModal } from "./components";
import { ListView, CreateNoteView, NoteView, EditNoteView } from "./views";
import { ApplicationWrapper } from "./styles/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: "",
      editedNote: "",
      error: "",
      showDeleteModal: false
    };
  }

  componentDidMount() {
    // this.fetchNotes();
    // // this.fetchNote("5c6250dae3d19000159d2587");
  }

  toggleModal = () => {
    this.setState(function(state, props) {
      return {
        showDeleteModal: !state.showDeleteModal
      };
    });
  };

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
      .then(({ data }) => this.setState({ ...this.state.note, note: data }))
      .catch(error => this.setState({ error: error }));
  };

  /* a `POST` request to this route with the title and text in the req.body 
    will create a new note. 
    The response from the server will be the ID of the new note.
  */
  createNote = note => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(({ data: { success: createdNoteId } }) => {
        console.log(createdNoteId);
        //concat new note to state
        this.setState({
          notes: [...this.state.notes, { ...note, _id: createdNoteId }]
        });
        this.props.history.push(`/note/${createdNoteId}`);
      })
      .catch(error => this.setState({ error: error }));
  };

  /*a `PUT` request to this route with the title and text in the 
    req body will edit the note with the specified ID. 
    The response from the server will be the updated note object.
  */
  editNote = (_id, note) => {
    const editedNoteIndex = this.state.notes.findIndex(e => e._id === _id);
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, note)
      .then(({ data }) => {
        this.setState({
          editedNote: data,
          notes: [
            ...this.state.notes.slice(0, editedNoteIndex),
            data,
            ...this.state.notes.slice(editedNoteIndex + 1)
          ]
        });
        this.props.history.push(`/note/${_id}`);
      })
      .catch(error => this.setState({ error: error }));
  };

  deleteNote = _id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
      .then(({ data: { success } }) => {
        this.setState({
          message: success,
          notes: this.state.notes.filter(note => note._id !== _id)
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  render() {
    return (
      <ApplicationWrapper>
        <Route path="/" component={SideBar} />
        <Route
          path="/"
          render={props => (
            <TopBar {...props} {...this.state} toggleModal={this.toggleModal} />
          )}
        />

        <Route path="/" exact render={props => <ListView />} />
        <Route
          path="/create"
          render={props => <CreateNoteView createNote={this.createNote} />}
        />
        <Route
          path="/note/:id"
          exact
          render={props => <NoteView {...props} />}
        />
        <Route
          path="/note/:id/edit"
          render={props => (
            <EditNoteView
              editNote={this.editNote}
              fetchNote={this.fetchNote}
              note={this.state.note}
            />
          )}
        />
        {/* Show modal if true */}
        {this.state.showDeleteModal && (
          <DeleteModal
            deleteNote={this.deleteNote}
            toggleModal={this.toggleModal}
          />
        )}
      </ApplicationWrapper>
    );
  }
}

const mstp = state => {
  return {};
};

//react-router-v4-not-working-with-redux
// https://stackoverflow.com/a/45056258
//TLDR you need to wrap connect() with withRouter() `withRouter(connect()());`
export default withRouter(
  connect(
    mstp,
    {}
  )(App)
);
