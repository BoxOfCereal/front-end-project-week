import React from "react";
import Note from "../index";

const NoteList = props => {
  return (
    <div>
      {props.notes.map(note => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
