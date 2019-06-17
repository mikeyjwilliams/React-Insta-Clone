import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className="header-post">
      <div className="thubmnail">
        <img
          src={props.thubmnailUrl}
          alt="user thumbnail"
          className="post-thumbnail"
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};
export default PostHeader;
