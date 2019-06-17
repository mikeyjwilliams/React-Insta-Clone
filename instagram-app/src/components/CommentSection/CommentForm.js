import React from 'react';
import './Comment.css';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  commentSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  textHandler = e => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.commentSubmit}>
        <input
          type="text"
          name="new-comment"
          onChange={this.textHandler}
          value={this.state.text}
          placeholder="Add a Comment..."
          className="ig-comment-input"
        />
        <span>elipsis</span>
      </form>
    );
  }
}
export default CommentForm;
