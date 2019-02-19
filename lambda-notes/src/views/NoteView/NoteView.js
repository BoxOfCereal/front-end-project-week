import React from "react";
import { Note, DeleteModal } from "../../components";

const NoteView = props => {
  return (
    <section>
      <Note {...props} />
      <DeleteModal />
    </section>
  );
};

export default NoteView;
