import React, { useEffect } from "react";
import { NoteList } from "../../components/index";

import { connect } from "react-redux";
import { fetchNotes } from "../../actions";

const ListView = props => {
  // https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
  //TLDR passing an empty array tells useEffect it doesn't rely on anything in the component
  //and to only fire on mount
  useEffect(() => {
    console.log("testificate");
    props.fetchNotes();
  }, []);

  return (
    <section>
      <NoteList notes={props.notes} />
    </section>
  );
};

const mstp = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mstp,
  { fetchNotes }
)(ListView);
