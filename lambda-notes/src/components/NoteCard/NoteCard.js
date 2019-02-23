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

const NoteCard = ({ _id, title, textBody, tags }) => {
  const len = textBody && textBody.length;
  const titleLen = title && title.length;
  const tagsLength = tags && tags.length;
  const maxBodyLen = 230;
  const maxTitleLen = 20;
  return (
    <NoteCardWrapper>
      <Link to={`/note/${_id}`}>
        <div>
          <h3>
            {titleLen > maxTitleLen ? clipText(title, maxTitleLen) : title}
          </h3>
          <hr />
          <p>{len > maxBodyLen ? clipText(textBody, maxBodyLen) : textBody}</p>
          {tagsLength > 0 ? <p>{tags.join(",")}</p> : <p>[no tag]</p>}
        </div>
      </Link>
    </NoteCardWrapper>
  );
};

export default NoteCard;
