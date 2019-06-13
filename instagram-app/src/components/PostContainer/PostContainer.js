import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    return (
    <div className="ig-post">
        <div className="ig-header">
           <img className="ig-post-thumbnail" src={props.igData.thumbnailUrl} alt={props.igData.username} />
           <h2 className="ig-post-username">{props.igData.username}</h2>
        </div>
        <div className="ig-photo">
            <img className="ig-photo" src={props.igData.imageUrl} />
        </div>
        <div className=""></div>
    </div>
    );
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