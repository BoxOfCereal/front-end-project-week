import React from "react";
import axios from "axios";

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
      <div>
        <h3>{this.state.title}</h3>
        <p>{this.state.textBody}</p>
      </div>
    );
  }
}
export default Note;
