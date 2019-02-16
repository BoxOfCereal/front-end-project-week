import React from "react";
import { Button } from "../index";
import { StyledForm, StyledInput, StyledTextArea } from "../../styles/index";
class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      title: "",
      textBody: "",
      tags: []
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createNote = e => {
    e.preventDefault();
    this.props.createNote({ ...this.state });
    this.setState({ title: "", textBody: "", tags: [] });
  };

  render() {
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
          <Button type="submit">Add A Note!</Button>
        </StyledForm>
      </div>
    );
  }
}

export default NoteForm;
