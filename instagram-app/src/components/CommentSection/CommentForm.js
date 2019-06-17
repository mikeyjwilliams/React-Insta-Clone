import React from 'react';
import './Comment.css';

const textHandler = e => {
  console.log(e.target.value);
};

const CommentForm = props => {
  return (
    <form className="comment-form">
      <input
        type="text"
        name="new-comment"
        onChange={textHandler}
        placeholder="Add a Comment..."
        className="ig-comment-input"
      />
      <span>elipsis</span>
    </form>
  );
};
export default CommentForm;
