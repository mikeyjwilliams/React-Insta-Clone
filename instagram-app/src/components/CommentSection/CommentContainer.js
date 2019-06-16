import React from 'react';

import Comment from './Comment';
import './Comment.css';
import CommentForm from './CommentForm'; 


const  CommentContainer = props => {
    return (
      <div>
        {props.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm 
          addCommentHandler={props.addCommentHandler}
          commentChange={props.commentChange}
          commentvalue={props.commentValue}

        />
      </div> 
    ); 
};
export default CommentContainer;
