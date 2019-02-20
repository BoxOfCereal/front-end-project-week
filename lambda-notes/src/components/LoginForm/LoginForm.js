import React from "react";

import { connect } from "react-redux";
import { login } from "../../actions";
import { withRouter } from "react-router-dom";
import { Button } from "../index";
import { StyledForm, StyledInput, FullScreenOverlay } from "../../styles/index";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    this.props.login({ ...this.state }, this.props.history);
  };

  render() {
    return (
      <FullScreenOverlay>
        <StyledForm action="submit" onSubmit={this.login}>
          <StyledInput
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={this.inputChange}
            value={this.state.username}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.inputChange}
            value={this.state.password}
          />
          <Button type="submit">Login</Button>
        </StyledForm>
      </FullScreenOverlay>
    );
  }
}

export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
);
