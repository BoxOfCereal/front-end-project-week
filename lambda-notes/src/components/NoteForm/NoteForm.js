import React from "react";
import { connect } from "react-redux";
import { createNote } from "../../actions";
import { withRouter } from "react-router-dom";
import { Button } from "../index";
import { StyledForm, StyledInput, StyledTextArea } from "../../styles/index";
class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: "",
      textBody: "",
      tags: [],
      tagInput: ""
    };
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

  createNote = e => {
    e.preventDefault();
    const { tagInput, ...note } = this.state;
    note.tags = [...this.formatTags(tagInput)];
    this.props.createNote({ ...note }, this.props.history);
    this.setState({ title: "", textBody: "", tags: [], tagInput: "" });
  };

  render() {
    console.log(this.state.tagInput);
    console.log(this.formatTags(this.state.tagInput));
    return (
      <div>
        <StyledForm action="submit" onSubmit={this.createNote}>
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
          <Button type="submit">Add A Note!</Button>
        </StyledForm>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    {
      createNote
    }
  )(NoteForm)
);
