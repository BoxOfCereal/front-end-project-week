import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { editNote, fetchNote } from "../../actions";

import { Button } from "../index";
import { StyledForm, StyledInput, StyledTextArea } from "../../styles/index";
class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: "",
      textBody: "",
      tags: [],
      _id: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.notes.length < 1) {
      this.props.fetchNote(id);
      this.setState({ ...this.props.note });
    } else {
      const note = this.props.notes.find(note => note._id === id);
      this.setState({ ...note });
    }
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editNote = e => {
    e.preventDefault();
    this.props.editNote(this.state._id, { ...this.state }, this.props.history);
    this.setState({ title: "", textBody: "", tags: [] });
  };

  render() {
    return (
      <div>
        <StyledForm action="submit" onSubmit={this.editNote}>
          <StyledInput
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.inputChange}
            value={this.state.title}
          />
          <StyledTextArea
            name="textBody"
            placeholder="Note Content"
            onChange={this.inputChange}
            value={this.state.textBody}
          />
          <Button type="submit">Update</Button>
        </StyledForm>
      </div>
    );
  }
}

const mstp = state => {
  return {
    notes: state.notes,
    note: state.note
  };
};

export default withRouter(
  connect(
    mstp,
    {
      editNote,
      fetchNote
    }
  )(EditNoteForm)
);
