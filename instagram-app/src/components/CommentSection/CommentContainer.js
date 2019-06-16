import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment'; 


const  CommentContainer = props => {
    return (
      <div>
        {props.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <NewComment 
          addCommentHandler={props.addCommentHandler}
          commentChange={props.commentChange}
          commentvalue={props.commentValue}

        />
      </div> 
    ); 
};
export default CommentContainer;
