import React from "react";
import styled from "styled-components";

import { Button } from "../index";

const FullScreenOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  padding-top: 250px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

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
`;

const DeleteModal = props => {
  console.log(props);
  return (
    <FullScreenOverlay>
      <DeleteModalBox>
        <p>Are you sure you want to delete this?</p>
        <Button
          warning
          onClick={() => {
            props.deleteNote(props.match.params.id);
            props.history.push(`/`);
          }}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            props.history.push(`/note/${props.match.params.id}`);
          }}
        >
          No
        </Button>
      </DeleteModalBox>
    </FullScreenOverlay>
  );
};

export default DeleteModal;
