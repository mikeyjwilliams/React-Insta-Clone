import React from 'react';
import './Post.css';

const Post = props => {
    console.log('POST DATA', props.instagram);
    return (
        <div className="ig-post">
            <div className="ig-header">
                <span 
                    className="ig-icon">
                        <img 
                            src={props.instagram.thumbnailUrl} 
                            alt=""
                            className="ig-thumbnail"
                        />
                </span>
            </div>
        </div>
    );
}

export default Post;