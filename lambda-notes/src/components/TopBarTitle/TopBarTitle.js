import React from "react";
import { connect } from "react-redux";

const TopBarTitle = props => {
  return (
    <>
      {props.location.pathname.split("/")[3] !== "edit" ? (
        <h2>{props.noteTitle ? props.noteTitle : `loading`}</h2>
      ) : null}
    </>
  );
};

const mstp = state => {
  return {
    noteTitle: state.note.title
  };
};

export default connect(
  mstp,
  {}
)(TopBarTitle);
