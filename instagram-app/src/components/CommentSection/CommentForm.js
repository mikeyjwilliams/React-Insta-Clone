import React from 'react';
import './Comment.css';

const CommentForm = props => {
  return (
    <form className="comment-form" onSubmit={props.commentSubmit}>
      <input
        type="text"
        name="new-comment"
        onChange={props.textHandler}
        value={props.commentValue}
        placeholder="Add a Comment..."
        className="ig-comment-input"
      />
      <span>elipsis</span>
    </form>
  );
};
export default CommentForm;
