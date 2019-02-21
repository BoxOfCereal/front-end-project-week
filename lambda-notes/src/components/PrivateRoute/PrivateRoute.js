import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

/**
 *  this component will check to see if a user is logged in
 *  if they are itw ill render the component with all the props
 *  else it will redirect you to the login route
 */
const PrivateRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />;

const mstp = ({ authReducer: state }) => {
  return { loggedIn: state.loggedIn };
};

export default connect(
  mstp,
  {}
)(PrivateRoute);
