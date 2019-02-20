import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote, hideDeleteModal } from "../../actions";

import { Button } from "../index";
import { FullScreenOverlay, DeleteModalBox } from "../../styles";

const DeleteModal = props => {
  console.log(props);
  return props.showDeleteModal ? (
    <FullScreenOverlay>
      <DeleteModalBox>
        <p>Are you sure you want to delete this?</p>
        <Button
          warning
          onClick={() => {
            props.deleteNote(props.match.params.id, props.history);
          }}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            props.hideDeleteModal();
          }}
        >
          No
        </Button>
      </DeleteModalBox>
    </FullScreenOverlay>
  ) : null;
};

const mstp = state => {
  return {
    showDeleteModal: state.showDeleteModal
  };
};

export default withRouter(
  connect(
    mstp,
    {
      deleteNote,
      hideDeleteModal
    }
  )(DeleteModal)
);
