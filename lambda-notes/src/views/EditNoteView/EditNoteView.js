import React from "react";
import { EditNoteForm } from "../../components";

const EditNoteView = props => {
  return (
    <section>
      <EditNoteForm {...props} />
    </section>
  );
};

export default EditNoteView;
