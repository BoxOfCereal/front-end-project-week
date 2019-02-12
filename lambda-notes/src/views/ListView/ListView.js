import React from "react";
import { NoteList } from "../../components/index";

const ListView = props => {
  return (
    <section>
      <h2>Your Notes:</h2>
      <NoteList notes={props.notes} />
    </section>
  );
};

export default ListView;
