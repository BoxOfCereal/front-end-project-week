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
      _id: "",
      tagInput: ""
    };
  }

  // tagInput: ["testificate", "important"].join(",") is to simulate tags working
  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    if (this.props.notes.length < 1) {
      this.props.fetchNote(id);
      this.setState({
        ...this.props.note,
        tagInput: ["testificate", "important"].join(",")
      });
    } else {
      const note = this.props.notes.find(note => note._id === id);
      this.setState({
        ...note,
        tagInput: ["testificate", "important"].join(",")
      });
    }
  }

  /* This needs to be here because if I go directly to this URL
    then I have to fetch the note. This is asynchronous and most likely
    will never happen by the time that component did mount
    would need to set the state.
    so this checks that if the props have been changed because of the action,
    and I need to update my state with that new note
  */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.note.title !== this.props.note.title) {
      //check for when new data is passed into this component from its parent / container...
      this.setState({
        ...this.props.note,
        tagInput: ["testificate", "important"].join(",")
      });
    }
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //  splits the tags by comma and trims whitespace
  formatTags = tagString =>
    tagString
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

  editNote = e => {
    e.preventDefault();
    const { tagInput, ...note } = this.state;
    note.tags = [...this.formatTags(tagInput)];
    console.log(note);
    this.props.editNote(this.state._id, { ...this.state }, this.props.history);
    this.setState({ title: "", textBody: "", tags: [] });
  };

  render() {
    console.log(this.props);
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
          <StyledInput
            name="tagInput"
            type="text"
            placeholder="Tags, Separated, By, Comma"
            onChange={this.inputChange}
            value={this.state.tagInput}
          />
          <Button type="submit">Update</Button>
        </StyledForm>
      </div>
    );
  }
}

const mstp = ({ notesReducer: state }) => {
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
