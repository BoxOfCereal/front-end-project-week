import React from "react";
import { NoteCard } from "../index";
import { NoteCardsWrapper } from "../../styles";

//here is where I wanna filter my notes by the search term

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
