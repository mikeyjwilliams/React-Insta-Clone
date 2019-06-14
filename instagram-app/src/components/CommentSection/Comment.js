import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="user-comments">
      <h4 className="username">{props.comment.username}</h4>
      <p className="comment">{props.comment.text}</p>
    </div>
  );
};
export default Comment;
