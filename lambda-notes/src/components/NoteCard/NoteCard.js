import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { NoteCardWrapper } from "../../styles";

const NoteCardWrapperTall = styled(NoteCardWrapper)`
  grid-area: auto/ auto/ span 2 / auto;
`;

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
