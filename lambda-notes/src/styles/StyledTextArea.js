import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  padding-left: 5px;
  width: 100%;
  height: 500px;
  resize: none;
  &:not(:focus) {
    background-color: lightgray;
  }
`;

export default StyledTextArea;
