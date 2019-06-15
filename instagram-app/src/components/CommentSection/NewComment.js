import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

const ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="2x" />;

const eventHandler = e => {
  e.preventDefault();

}

const textEvent = e => {
  console.log(e.target.value);
}

class NewComment extends React.Component {
  constructor() {
    super();
    this.state ={};
  }
  render() {
    return (
      <div className="new-comment">
        <form onSubmit={eventHandler}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="add-comment"
            onChange={textEvent}
            
          />
        </form>
        <div>{ellipsis}</div>
      </div>
    );
  }
};
export default NewComment;
