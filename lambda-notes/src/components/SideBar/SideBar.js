import React from "react";
import { Button } from "../index";

const SideBar = props => {
  return (
    <div>
      <h1>Lambda Notes</h1>
      <Button text={`View Your Notes`} />
      <Button text={`+ Create New Note`} />
    </div>
  );
};

export default SideBar;
