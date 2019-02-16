import React from "react";
import { NoteCard } from "../index";
import { NoteCardsWrapper } from "../../styles";

const NoteList = props => {
  return (
    <NoteCardsWrapper>
      {props.notes.map(note => (
        <NoteCard key={note._id} {...note} />
      ))}
    </NoteCardsWrapper>
  );
};

export default NoteList;
