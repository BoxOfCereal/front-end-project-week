import styled from "styled-components";

const DeleteModalBox = styled.div`
  margin: 0 auto;
  height: 200px;
  width: 650px;
  padding: 25px;
  border: 1px solid black;

  display: grid;
  grid-template-areas:
    "p p"
    "deleteButton  noButton";
  grid-gap: 25px;

  background-color: #fbfafb;
  & p {
    grid-area: p;
    /* centers text */
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
  }

  & button:first-of-type {
    justify-self: end;
  }
`;

export default DeleteModalBox;
