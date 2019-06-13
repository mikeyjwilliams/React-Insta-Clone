import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';

const ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="2x" />

const NewComment = props => {
    return (
        <div className="new-comment">
            <input 
                type="text" 
                placeholder="Add a comment..."
                className="add-comment"
            />
            <div>
                {ellipsis}
            </div>
        </div>
    );
}
export default NewComment;