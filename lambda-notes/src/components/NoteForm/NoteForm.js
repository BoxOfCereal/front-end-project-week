import React from "react";
import { Button } from "../index";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 40px;
  width: 400px;
  border-radius: 2px;
  border: 1px solid black;
  padding-left: 5px;
  &:not(:focus) {
    background-color: lightgray;
  }
`;

const StyledTextArea = styled.textarea`
  border-radius: 2px;
  border: 1px solid black;
  padding-left: 5px;
  width: 100%;
  height: 500px;
  resize: none;
  &:not(:focus) {
    background-color: lightgray;
  }
`;

const StyledForm = styled.form`
  & > * {
    margin-bottom: 20px;
  }
`;

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
        <form action="submit" onSubmit={this.createNote}>
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
        </form>
      </div>
    );
  }
}

export default NoteForm;
