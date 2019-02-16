import styled from "styled-components";

//  wraps the whole application this goes in App.js
const ApplicationWrapper = styled.div`
  /*sidebar  */
  min-height: 100%;
  height: 100%;
  > nav {
    background: red;
    position: fixed;
    height: 100%;
    width: 180px;
    padding: 10px;
    background-color: #d3d2d3;

    display: flex;
    flex-direction: column;

    & h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 25px;
    }
  }
  /*  main content */
  & section {
    margin-left: 180px;
    padding: 99px 20px 0 20px;
    background-color: #f2f1f2;
    /* height: 100%; */
    min-height: 100%;
  }
`;

export default ApplicationWrapper;
