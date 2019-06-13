import React from 'react';

import Comment from './Comment';
import './Comment.css';

const CommentContainer = props => {
    return (
        <div>
             { props.igData.comments.map( (comment) => {
                   return <Comment
                        key={comment.id}
                        comment={comment}
                    />
                })}
        </div>
    );
}
export default CommentContainer;