import React from "react";
import { Note } from "../../components";

const NoteView = props => {
  return (
    <section>
      <Note {...props.note} />
    </section>
  );
};

export default NoteView;
