import React from "react";
import { NoteList } from "../../components/index";

const ListView = props => {
  return (
    <section>
      <NoteList notes={props.notes} />
    </section>
  );
};

export default ListView;
