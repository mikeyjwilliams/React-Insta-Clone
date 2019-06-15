import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

const ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="2x" />;
class NewComment extends React.Component {
  constructor() {
    super();
    this.state ={
      id: 4,
      names: "Developer",
      text: '',
      userComments: []      
    };
  }

 
eventHandler = e => {
  e.preventDefault();

}

textEvent = e => {
  this.setState({
    text: e.target.value
  })
  console.log(e.target.value);
} 


  render() {
    return (
      <div className="new-comment">
        <form onSubmit={this.eventHandler}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="add-comment"
            onChange={this.textEvent}
            value={this.state.text}
          />
        </form>
        <div>{ellipsis}</div>
      </div>
    );
  }
};
export default NewComment;
