import React from "react";
import { connect } from "react-redux";
import { exportNotesToCSV } from "../../actions";
import { Link } from "react-router-dom";
import { Button } from "../index";
import { StyledNav } from "../../styles";

const SideBar = props => {
  return (
    <StyledNav>
      <h1>Lambda Notes</h1>
      <Link to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link to="/create">
        <Button>+ Create New Note</Button>
      </Link>
      <Button onClick={props.exportNotesToCSV}>Export To CSV</Button>
    </StyledNav>
  );
};

export default connect(
  null,
  { exportNotesToCSV }
)(SideBar);
