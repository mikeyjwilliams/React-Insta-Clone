import React from 'react';

//import Post from '../PostContainer/Post';
import './Comment.css';

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
export default Comment;
