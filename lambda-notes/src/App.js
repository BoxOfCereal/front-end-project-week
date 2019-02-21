import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { LoginForm, PrivateRoute, SideBar, TopBar } from "./components";
import { ListView, CreateNoteView, NoteView, EditNoteView } from "./views";
import { ApplicationWrapper } from "./styles";

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
      <>
        <ApplicationWrapper>
          <PrivateRoute
            path="/"
            isAllowed={this.props.loggedIn}
            component={SideBar}
          />
          <PrivateRoute
            path="/"
            isAllowed={this.props.loggedIn}
            render={props => <TopBar />}
          />

          <PrivateRoute
            path="/"
            exact
            isAllowed={this.props.loggedIn}
            render={props => <ListView {...props} />}
          />
          <PrivateRoute
            path="/create"
            isAllowed={this.props.loggedIn}
            render={props => <CreateNoteView {...props} />}
          />
          <PrivateRoute
            path="/note/:id"
            exact
            isAllowed={this.props.loggedIn}
            render={props => <NoteView {...props} />}
          />
          <PrivateRoute
            path="/note/:id/edit"
            isAllowed={this.props.loggedIn}
            render={props => <EditNoteView {...props} />}
          />
          <Route exact path="/login" component={LoginForm} />
        </ApplicationWrapper>
      </>
    );
  }
}

const mstp = state => {
  return { loggedIn: state.loggedIn };
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
