import React from 'react';
import Post from './Post';
import './Post.css';

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(posts => (
        <Post key={posts.id} posts={posts} />
      ))}
    </div>
  );
};
export default PostContainer;
