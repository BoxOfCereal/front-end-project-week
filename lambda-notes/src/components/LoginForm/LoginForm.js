import React from "react";

import { connect } from "react-redux";
import {} from "../../actions";
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
  };

  render() {
    return (
      <div>
        <StyledForm action="submit" onSubmit={this.login}>
          <StyledInput
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={this.inputChange}
            value={this.state.username}
          />
          <StyledInput
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={this.inputChange}
            value={this.state.password}
          />
          />
          <Button type="submit">Login</Button>
        </StyledForm>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    {}
  )(LoginForm)
);
