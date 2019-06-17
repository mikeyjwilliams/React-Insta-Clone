import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../CommentSection/Comment';
import './Post.css';
import CommentForm from '../CommentSection/CommentForm';

const Post = props => {
  console.log('POST DATA', props.instagram);
  return (
    <div className="ig-post">
      <div className="ig-header">
        <span className="ig-icon">
          <img
            src={props.instagram.thumbnailUrl}
            alt=""
            className="ig-thumbnail"
          />
        </span>
        <span className="ig-user">{props.instagram.username}</span>
      </div>
      <div className="ig-image">
        <img src={props.instagram.imageUrl} alt="" />
      </div>
      <div class="ig-comment-section">
        {props.instagram.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </div>
      <CommentForm />
    </div>
  );
};

Post.prototypes = {
  instagram: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
