import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { NoteCardWrapper } from "../../styles";

const NoteCardWrapperTall = styled(NoteCardWrapper)`
  grid-area: auto/ auto/ span 2 / auto;
`;

function clipText(text, maxLength) {
  return text.slice(0, maxLength).concat("...");
}

const NoteCard = ({ _id, title, textBody }) => {
  const len = textBody && textBody.length;
  const maxLen = 230;
  return (
    <NoteCardWrapper>
      <Link to={`/note/${_id}`}>
        <div>
          <h3>{title}</h3>
          <hr />
          <p>{len > maxLen ? clipText(textBody, maxLen) : textBody}</p>
        </div>
      </Link>
    </NoteCardWrapper>
  );
};

export default NoteCard;
