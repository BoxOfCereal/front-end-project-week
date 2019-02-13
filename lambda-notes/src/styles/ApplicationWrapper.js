import styled from "styled-components";

//  wraps the whole application this goes in App.js
const ApplicationWrapper = styled.div`
  /*sidebar  */
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

  > div {
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
  }

  /*  main content */
  > section {
    margin-left: 180px;
    padding: 99px 20px 0 20px;
    background-color: #f2f1f2;
  }
`;

export default ApplicationWrapper;
