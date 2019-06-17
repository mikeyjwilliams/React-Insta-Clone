import React from 'react';
import './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const heartIcon = <FontAwesomeIcon icon={faHeart} size="2x" />
const commentIcon = <FontAwesomeIcon icon={faComment} size="2x" />


const LikesSection = props => {
    return (
        <div>
            <div className="ig-likes-section">
                
                <button 
                    type="button" 
                    className="far ig-heart" 
                    key="ig-heart-icon-wrapper"
                    onClick={props.heartLikesHandler}
                >
                        {heartIcon}
                </button>
                <div 
                    className="far ig-comment">
                        {commentIcon}
                </div>
            </div>
            <div 
                className="ig-likes">
                    
                   <span 
                        className="ig-increasing-likes"
                    >
                        {props.likes}
                    </span> likes
            </div>
        </div> 
    );
};
export default LikesSection;