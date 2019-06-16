import React from 'react';
import './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const igHeart = <FontAwesomeIcon size="2x" icon={faHeart} />;
const igComment = <FontAwesomeIcon size="2x" icon={faComment} />;

const LikesSection = props => {
    return(
        <div>
            <div className="ig-interaction">
                <div className="far ig-heart">{igHeart}</div>
                <div className="far ig-comment">{igComment}</div>
            </div>
            <div className="ig-likes">{props.instagramData.likes} likes</div>
        </div>
        
    );
};
export default LikesSection;