import styled from "styled-components";

//  Wraps Each Individual Card, used in NoteCard Component
const NoteCardWrapper = styled.div`
  /* DANG this solves the problem of 
    super long strings breaking the layout perfectly!
    ref: https://codepen.io/anon/pen/MPQZGB
   */
  word-wrap: break-word;

  border: 1px solid black;
  padding: 10px;
  min-height: 200px;
  overflow: hidden;

  & h3 {
    font-weight: bolder;
  }
  & p {
    font-size: 0.9rem;
  }
`;

export default NoteCardWrapper;
