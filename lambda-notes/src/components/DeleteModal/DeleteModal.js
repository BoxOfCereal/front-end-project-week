import React from "react";

const DeleteModal = props => {
  console.log(props);
  return (
    <div>
      <p>Are you sure you want to delete this?</p>
      <button
        onClick={() => {
          props.deleteNote(props.match.params.id);
        }}
      >
        Delete
      </button>
      <button>No</button>
    </div>
  );
};

export default DeleteModal;
