import styled from "styled-components";

//  Wraps Each Individual Card, used in NoteCard Component
const NoteCardWrapper = styled.div`
  /* DANG this solves the problem of 
    super long strings breaking the layout perfectly!
    ref: https://codepen.io/anon/pen/MPQZGB
   */
  word-wrap: break-word;
  overflow: hidden;
  grid-area: auto/ auto/span 2 / auto;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  :hover {
    animation-name: scaleUp;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  & div {
    border: 1px solid whitesmoke;
    border-radius: 2px;
    padding: 10px;
    min-height: 200px;
    background-color: whitesmoke;
  }

  & h3 {
    font-weight: bolder;
  }
  & p {
    font-size: 0.9rem;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  @keyframes scaleUp {
    from {
      transform: scale(1);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    }
    to {
      transform: scale(1.02);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.28);
    }
  }
`;

export default NoteCardWrapper;
