import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment'; 


const  CommentContainer = props => {
    return (
      <div>
        {this.props.igData.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <NewComment 
          addNewComment={this.props.addNewComment}
          changeComment={this.props.changeComment}
          commentValue={this.props.commentvalue}
        />
      </div> 
    ); 
};
export default CommentContainer;
