import React from 'react';
import './LikesSection.css';
import { PropTypes } from 'prop-types';

const LikesSection = props => {
  return (
    <div>
      <div className='ig-likes-section'>
        <button
          type='button'
          className='far ig-heart'
          key='ig-heart-icon-wrapper'
          onClick={props.increaseLikes}
        >
          <i className='far fa-heart fa-2x' />
        </button>
        <div className='far ig-comment'>
          <i class='far fa-comment fa-2x' />
        </div>
      </div>
      <div className='ig-likes' key='likes-container'>
        <span className='ig-increasing-likes'>{props.likes}</span> likes
      </div>
    </div>
  );
};
export default LikesSection;
