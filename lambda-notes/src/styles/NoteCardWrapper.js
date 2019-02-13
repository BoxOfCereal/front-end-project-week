import styled from "styled-components";

//  Wraps Each Individual Card, used in NoteCard Component
const NoteCardWrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
  min-height: 200px;

  & h3 {
    font-weight: bolder;
  }
  & p {
    font-size: 0.9rem;
  }
`;

export default NoteCardWrapper;
