import React from "react";
import { connect } from "react-redux";
import { NoteCard } from "../index";
import { NoteCardsWrapper } from "../../styles";

//here is where I wanna filter my notes by the search term

const NoteList = props => {
  console.log(props);
  const re = new RegExp(props.searchTerm, "i");
  return (
    <NoteCardsWrapper>
      {props.notes
        .filter(n => {
          return n.title.match(re);
        })
        .map(note => (
          <NoteCard key={note._id} {...note} />
        ))}
    </NoteCardsWrapper>
  );
};

const mstp = ({ notesReducer: state }) => {
  return { searchTerm: state.searchTerm };
};

export default connect(
  mstp,
  {}
)(NoteList);
