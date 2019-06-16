import React from 'react';
import './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const heartIcon = <FontAwesomeIcon icon={faHeart} size="2x" />
const commentIcon = <FontAwesomeIcon icon={faComment} size="2x" />


const LikesSection = props => {
    return(
        <div>
            <div className="ig-likes-section">
                
                <div onClick={props.heartLikesHandler} 
                     className="far ig-heart">
                        {heartIcon}
                </div>
                <div 
                    className="far ig-comment">
                        {commentIcon}
                </div>
            </div>
            <div 
                className="ig-likes">
                    {props.instagramData.likes} likes
            </div>
        </div>
        
    );
};
export default LikesSection;