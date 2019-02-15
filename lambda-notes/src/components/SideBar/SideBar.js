import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../index";

const SideBar = props => {
  return (
    <nav>
      <h1>Lambda Notes</h1>
      <Link to="/">
        <Button text={`View Your Notes`} />
      </Link>
      <Link to="/create">
        <Button text={`+ Create New Note`} />
      </Link>
    </nav>
  );
};

export default SideBar;
