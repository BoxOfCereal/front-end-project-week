import React from "react";
import { connect } from "react-redux";

const TopBarTitle = props => {
  console.log(props);
  return (
    <>
      {props.location.pathname.split("/")[3] !== "edit" ? (
        <h2>{props.fetchingNotes ? `LOADING` : props.noteTitle}</h2>
      ) : null}
    </>
  );
};

const mstp = state => {
  return {
    noteTitle: state.note.title,
    fetchingNote: state.fetchingNotes
  };
};

export default connect(
  mstp,
  {}
)(TopBarTitle);
