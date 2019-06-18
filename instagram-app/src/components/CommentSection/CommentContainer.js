import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import './Comment.css';

const CommentContainer = props => {
  return (
    <div>
      {props.instagramComments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <div className='new-comment'>
        <CommentForm
          addCommentHandler={props.addCommentHandler}
          commentChange={props.commentChange}
          commentvalue={props.commentValue}
        />
        <div>
          <i class='fas fa-ellipsis-h fa-2x' />
        </div>
      </div>
    </div>
  );
};

CommentForm.proptypes = {};
export default CommentContainer;
