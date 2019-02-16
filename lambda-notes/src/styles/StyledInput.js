import styled from "styled-components";

const StyledInput = styled.input`
  height: 40px;
  width: 400px;
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  padding-left: 5px;
  &:not(:focus) {
    background-color: lightgray;
  }
`;
export default StyledInput;
