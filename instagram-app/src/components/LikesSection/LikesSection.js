import React from 'react';
import './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const commentIcon = <FontAwesomeIcon icon={faComment} size='2x' />;

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
        <div className='far ig-comment'>{commentIcon}</div>
      </div>
      <div className='ig-likes' key='likes-container'>
        <span className='ig-increasing-likes'>{props.likes}</span> likes
      </div>
    </div>
  );
};
export default LikesSection;
