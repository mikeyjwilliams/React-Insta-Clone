import React from 'react';

const CommentForm = props => {
  
  return (
        <form onSubmit={props.addCommentHandler}>
          <input
            type="text"
            placeholder="Add a comment..."
            className="add-comment"
            onChange={props.commentChange}
            value={props.commentValue}  
          />
        </form>
    );
  };
export default CommentForm;
