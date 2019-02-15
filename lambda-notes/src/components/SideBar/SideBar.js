import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../index";

const SideBar = props => {
  return (
    <nav>
      <h1>Lambda Notes</h1>
      <Link to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link to="/create">
        <Button>+ Create New Note</Button>
      </Link>
    </nav>
  );
};

export default SideBar;
