import React from "react";

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
          <input
            type="text"
            name="title"
            onChange={this.inputChange}
            value={this.state.title}
          />
          <input
            type="textarea"
            name="textBody"
            onChange={this.inputChange}
            value={this.state.textBody}
          />
          <button type="submit">Add A Note!</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
