import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  padding-left: 5px;
  width: 100%;
  height: 400px;
  resize: none;
  outline-color: #24b8bd;

  /* Fades in and out*/
  &:not(:focus) {
    background-color: lightgray;
    animation-name: dim;
    animation-duration: 0.14s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }
  :focus {
    animation-name: brighten;
    animation-duration: 0.14s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  @keyframes brighten {
    from {
      background-color: lightgray;
    }
    to {
      background-color: whitesmoke;
    }
  }
  @keyframes dim {
    from {
      background-color: whitesmoke;
    }
    to {
      background-color: lightgray;
    }
  }
`;

export default StyledTextArea;
