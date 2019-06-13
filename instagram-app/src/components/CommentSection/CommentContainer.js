import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment';

const CommentContainer = props => {
    return (
        <div>
             { props.igData.comments.map( (comment) => {
                   return <Comment
                        key={comment.id}
                        comment={comment}
                    />
                })}
                <NewComment />
        </div>
    );
}
export default CommentContainer;