import React from 'react';

//import Post from '../PostContainer/Post';
import './Comment.css';
import { PropTypes } from 'prop-types';

const Comment = props => {
  console.log('props.COMMENTS ', props.comment);
  return (
    <div className="ig-comments">
      {/* <LikeContainer /> */}
      <div className="user-comments">
        <span className="ig-user">{props.comment.username}</span>
        <span className="ig-comment-text">{props.comment.text}</span>
      </div>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
