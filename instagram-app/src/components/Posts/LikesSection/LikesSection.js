import React from 'react';
import './LikesSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LikesSection = props => {
    return(
        <div>
            <div className="ig-likes-section">

                <div className="far ig-heart"><FontAwesomeIcon className="far" icon="heart" /></div>
                <div className="far ig-comment"><FontAwesomeIcon icon="comment" /></div>
            </div>
            <div className="ig-likes">{props.instagramData.likes} likes</div>
        </div>
        
    );
};
export default LikesSection;