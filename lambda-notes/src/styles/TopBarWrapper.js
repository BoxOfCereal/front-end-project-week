import styled from "styled-components";

const TopBarWrapper = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  background: #f2f1f2;
  margin-left: 180px;
  height: 74px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-end;

  & h2 {
    font-size: 1.2rem;
    margin-top: auto;
    margin-left: 20px;
  }

  & a {
    padding: 1px 6px;
  }

  & div:last-of-type {
    margin-right: 200px;
    margin-left: auto;
    align-self: flex-start;
  }
`;

export default TopBarWrapper;
