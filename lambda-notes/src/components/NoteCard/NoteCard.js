import React from "react";
import { Link } from "react-router-dom";
import { NoteCardWrapper } from "../../styles";

const NoteCard = props => {
  return (
    <NoteCardWrapper>
      <Link to={`/note/${props._id}`}>
        <div>
          <h3>{props.title}</h3>
          <hr />
          <p>{props.textBody}</p>
        </div>
      </Link>
    </NoteCardWrapper>
  );
};

export default NoteCard;
