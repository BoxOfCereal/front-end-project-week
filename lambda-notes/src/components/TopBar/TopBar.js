import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { displayDeleteModal, logout } from "../../actions";

import { TopBarTitle } from "../index";
import { TopBarWrapper, ButtonThatLooksLikeALink } from "../../styles";

// This is a mess but I can't deal with it rn
const routes = [
  {
    path: "/",
    exact: true,
    TopBarContent: () => <h2>Your Notes:</h2>
  },
  {
    path: "/create",
    TopBarContent: () => <h2>Create New Note:</h2>
  },
  {
    path: "/note/:id",
    exact: true,
    TopBarContent: withRouter(props => {
      return (
        <div>
          {props.location.pathname.split("/")[3] === "edit" ? null : (
            <>
              <Link to={`/note/${props.match.params.id}/edit`}>edit</Link>
              <ButtonThatLooksLikeALink onClick={props.displayDeleteModal}>
                delete
              </ButtonThatLooksLikeALink>
            </>
          )}
        </div>
      );
    })
  },
  {
    path: "/note/:id/edit",
    TopBarContent: () => <h2>Edit Note:</h2>
  }
];

//https://reacttraining.com/react-router/web/example/sidebar
const TopBar = props => {
  return (
    <TopBarWrapper>
      <Route
        path={`/note/:id`}
        render={_ => <TopBarTitle title={`test`} {..._} />}
      />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={_ => <route.TopBarContent {...props} />}
        />
      ))}
      <div>
        <ButtonThatLooksLikeALink onClick={props.logout}>
          logout
        </ButtonThatLooksLikeALink>
      </div>
    </TopBarWrapper>
  );
};

export default withRouter(
  connect(
    null,
    {
      displayDeleteModal,
      logout
    }
  )(TopBar)
);
