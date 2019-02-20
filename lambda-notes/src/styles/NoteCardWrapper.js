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
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & h3 {
    font-weight: bolder;
  }
  & p {
    font-size: 0.9rem;
  }
  & p:last-child {
    margin-top: auto;
    font-style: italic;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & hr {
    border: none;
    border-top: 1px black solid;
    height: 1px;
    width: 100%;
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
