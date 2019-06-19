import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="ig-header">
          <img
            className="ig-post-thumbnail"
            src={props.instagramData.thumbnailUrl}
            alt={props.instagramData.username}
          />
          <h2 className="ig-post-username">{props.instagramData.username}</h2>
        </div>
    );
}
export default PostHeader;