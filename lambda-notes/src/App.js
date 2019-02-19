import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { SideBar, TopBar } from "./components";
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

  render() {
    return (
      <ApplicationWrapper>
        <Route path="/" component={SideBar} />
        <Route
          path="/"
          render={props => <TopBar {...props} {...this.state} />}
        />

        <Route path="/" exact render={props => <ListView />} />
        <Route path="/create" render={props => <CreateNoteView />} />
        <Route
          path="/note/:id"
          exact
          render={props => <NoteView {...props} />}
        />
        <Route
          path="/note/:id/edit"
          render={props => <EditNoteView note={this.state.note} />}
        />
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
