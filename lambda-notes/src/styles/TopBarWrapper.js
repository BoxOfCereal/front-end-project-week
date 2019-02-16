import styled from "styled-components";

const TopBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #f2f1f2;
  margin-left: 180px;
  height: 74px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & h2 {
    font-size: 1.2rem;
    margin-top: auto;
    margin-left: 20px;
  }

  & div {
    margin-right: 200px;
  }
`;

export default TopBarWrapper;
