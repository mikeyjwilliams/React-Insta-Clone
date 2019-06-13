import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div>
            {props.comment.comments}
        </div>
    );
}
export default Comment;