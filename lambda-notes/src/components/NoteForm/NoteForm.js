import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createNote = e => {
    e.preventDefault();
    this.props.saveNote({ ...this.state });
    this.setState({ name: "", age: "", email: "" });
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
            name="note"
            onChange={this.inputChange}
            value={this.state.note}
          />
          <button type="submit">Add A Note!</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
