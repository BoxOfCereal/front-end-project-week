import React from "react";

const Note = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <br />
      <p>{props.note}</p>
    </div>
  );
};

export default Note;
