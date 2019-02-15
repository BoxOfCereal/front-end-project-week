import React from "react";

const TopBarTitle = props => {
  return (
    <>
      {props.location.pathname.split("/")[3] !== "edit" ? (
        <h2>{props.title}</h2>
      ) : null}
    </>
  );
};

export default TopBarTitle;
