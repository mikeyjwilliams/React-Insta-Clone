import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="user-comments">
      <h4 className="username">{props.comment.username}</h4>
      <p className="comment">{props.comment.text}</p>
    </div>
  );
};

Comment.prototypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
