import React from "react";
import NoteCard from "../index";

const NoteList = props => {
  return (
    <div>
      {props.notes.map(note => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
