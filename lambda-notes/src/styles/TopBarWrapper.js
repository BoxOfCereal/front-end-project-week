import styled from "styled-components";

const TopBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #f2f1f2;
  margin-left: 180px;
  height: 74px;
  margin-bottom: 25px;

  display: flex;

  & h2 {
    font-size: 1.2rem;
    margin-top: auto;
  }
`;

export default TopBarWrapper;
