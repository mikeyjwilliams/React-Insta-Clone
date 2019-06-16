import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import './Comment.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="2x" />; // elleipsis on end of comment section


const  CommentContainer = props => {
    return (
      <div>
        {props.instagramComments.map( (comment, index) => {
          return <Comment key={index} comment={comment} />
          })
        }
          <div className="new-comment">
              <CommentForm 
                addCommentHandler={props.addCommentHandler}
                commentChange={props.commentChange}
                commentvalue={props.commentValue}
              />
              <div>{ellipsis}</div>
          </div>
      </div> 
    ); 
};
export default CommentContainer;
