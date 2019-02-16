import React from "react";
import { NoteWrapper } from "../../styles";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      title: "",
      textBody: "",
      tags: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
    // this.setState({ note: this.props.note });
  }

  /*
    I needed to have this life cycle method
    because on component did mount i was changing props
    But the set state in component did mount 
    was firing before the props actually changed
    because fetch note was asynchronous
  */
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.note !== prevProps.note) {
      this.setState({ ...this.props.note });
    }
  }

  render() {
    return (
      <NoteWrapper>
        <p>{this.state.textBody}</p>
      </NoteWrapper>
    );
  }
}
export default Note;
