import React from "react";
import { Note } from "../../components";

const CreateNoteView = props => {
  return (
    <section>
      <h2>Create New Note:</h2>
      <Note {...props.note} />
    </section>
  );
};

export default CreateNoteView;
