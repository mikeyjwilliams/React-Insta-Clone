import React from 'react';
import PropTypes from 'prop-types';
// App.js flows into here

const PostContainer = props => {
  return (
    <div className='post-section'>
      {props.instgramData.map(i => (
        <Post key={i.imageUrl} post={i} />
      ))}
    </div>
  );
};
export default;
