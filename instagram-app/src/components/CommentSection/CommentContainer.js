import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment';



class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {props.igData.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <NewComment 
          commentSubmit={props.commentSubmit}
          commentChange={props.commentChange}
          commentValue={props.commentValue}
        />
      </div> 
    );
  }
  
};
export default CommentContainer;
