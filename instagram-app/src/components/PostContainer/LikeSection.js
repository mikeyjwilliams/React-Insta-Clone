import React from 'react';

const LikeSection = props => {
  return (
    <div className="like-section">
      <div
        key="likes-icon-heart"
        onClick={props.increaseLikes}
        className="like-items"
      >
        <i className="far fa-heart" />
      </div>
      <div className="like-items">
        <i className="far fa-comment" />
      </div>

      <div className="likes-count" key="likes-holder">
        <div className="likes-wrap">{props.likes}</div>
      </div>
    </div>
  );
};
export default LikeSection;
