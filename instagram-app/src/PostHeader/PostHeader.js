import React from 'react';
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="ig-header">
          <img
            className="ig-post-thumbnail"
            src={this.props.instagramData.thumbnailUrl}
            alt={this.props.instagramData.username}
          />
          <h2 className="ig-post-username">{this.props.instagramData.username}</h2>
        </div>
    );
}
export default PostHeader;