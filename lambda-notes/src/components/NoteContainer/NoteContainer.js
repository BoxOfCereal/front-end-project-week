import React from "react";
import { NotesList } from "../index";

const NoteContainer = props => {
  return (
    <section>
      <h2>your notes:</h2>
      <NotesList notes={props.notes} />
    </section>
  );
};

export default NoteContainer;
