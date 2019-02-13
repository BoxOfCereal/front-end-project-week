import styled from "styled-components";

const ApplicationWrapper = styled.div`
  /*sidebar  */
  > div {
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
  > section {
    margin-left: 180px;
    padding: 55px 20px 0 20px;
    background-color: #f2f1f2;

    & h2 {
      font-size: 1.2rem;
    }
  }
`;

export default ApplicationWrapper;
