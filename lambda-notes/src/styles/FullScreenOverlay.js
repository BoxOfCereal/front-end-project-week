import styled from "styled-components";

const FullScreenOverlay = styled.div`
  position: fixed;
  z-index: 10001;
  height: 100%;
  width: 100%;
  padding-top: 250px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default FullScreenOverlay;
