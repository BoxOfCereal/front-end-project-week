import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { NoteWrapper } from "../../styles";
import { fetchNote } from "../../actions";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  /* parent && parent.child && parent.child.grandchild
    Vanilla JavaScript solution for optional training
    a couldn't get Babel  to actually implement the packets 
    and I installed even though I had an A configuration file.

    The whole reason I'm doing this is because render is called
    before component did mount and by API call isn't being hit
    therefore there is no note and there is no text body so I get an error 
    if I try access text body
  */
  render() {
    console.log(this.props);
    return (
      <NoteWrapper>
        <p>
          {this.props && this.props.note && this.props.note.textBody
            ? this.props.note.textBody
            : "Note not found 🤦‍📜"}
        </p>
      </NoteWrapper>
    );
  }
}

const mstp = ({ notesReducer: state }) => {
  return {
    note: state.note
  };
};
export default withRouter(
  connect(
    mstp,
    { fetchNote }
  )(Note)
);
