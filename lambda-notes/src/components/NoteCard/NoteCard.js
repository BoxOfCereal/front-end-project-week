import React from "react";
import { NoteCardWrapper } from "../../styles";

const NoteCard = props => {
  return (
    <NoteCardWrapper>
      <h3>{props.title}</h3>
      <hr />
      <p>{props.textBody}</p>
    </NoteCardWrapper>
  );
};

export default NoteCard;
