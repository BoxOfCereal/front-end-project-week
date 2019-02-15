import styled from "styled-components";

const StyleButton = styled.button`
  border: none;
  color: #ffffff;
  width: 160px;
  height: 40px;
  outline: none;
  background-color: ${props => (props.warning ? `#CA001A` : `#24b8bd`)};
  font-weight: ${props => (props.warning ? `bolder` : `normal`)};

  &:hover {
    cursor: pointer;
  }
`;

export default StyleButton;
