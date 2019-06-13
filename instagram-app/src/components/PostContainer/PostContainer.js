import React from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import './PostContainer.css';

const igHeart = <FontAwesomeIcon size="2x" icon={faHeart} />;
const igComment = <FontAwesomeIcon size="2x" icon={faComment} />;

const PostContainer = props => {
    return (
    <div className="ig-post">
        <div className="ig-header">
           <img className="ig-post-thumbnail" src={props.igData.thumbnailUrl} alt={props.igData.username} />
           <h2 className="ig-post-username">{props.igData.username}</h2>
        </div>
        <div className="ig-photo">
            <img className="ig-photo" src={props.igData.imageUrl} alt=""/>
        </div>
        <div className="ig-interact-section">
            <div className="ig-interaction">
                <div className="far ig-heart">
                    {igHeart}
                </div>
                <div className="far ig-comment">
                    {igComment}
                </div>
            </div>
            <div className="ig-likes">
                {props.igData.likes} likes
            </div>
            <div className="ig-comments">
               <CommentContainer igData={props.igData} />
            </div>
        </div>
    </div>
    );
};

PostContainer.prototypes = {
    igData: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default PostContainer;

//1. import dummy data
//2. iterate over data => pass individual object = {prop} instanceOf {PostContainer}
//3. {PostContainer} => PASS array comments => {prop} instanceOf {CommentSection}
//4. {CommentSection} RECIEVE {array} => COMMENTS = {props} && RENDER {CommentComponent} w/ => 
// { username=>poster, post=>text} (!input box can be added will be incremented tomorrow though not needed now!)
//5. check TYPES of? DATA passing around as {props} in COMPONENTS
//6. (not sure yet) Linked to {CommentComponent} =>THAT {CommentSection} will RENDER to-WHERE? {PostComponent} container will RENDER
//7. FREE TO USE Reactstrap for themeing and styling
//8. add own styles for theming and styling.