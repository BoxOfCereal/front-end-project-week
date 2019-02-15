import React from "react";
import { NoteForm } from "../../components";

const CreateNoteView = props => {
  return (
    <section>
      <NoteForm {...props} />
    </section>
  );
};

export default CreateNoteView;
