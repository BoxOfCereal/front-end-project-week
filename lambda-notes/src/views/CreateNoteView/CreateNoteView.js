import React from "react";
import { NoteForm } from "../../components";

const CreateNoteView = props => {
  return (
    <section>
      <h2>Create New Note:</h2>
      <NoteForm />
    </section>
  );
};

export default CreateNoteView;
