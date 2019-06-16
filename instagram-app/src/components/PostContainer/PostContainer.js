import React from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import LikesSection from './LikesSection/LikesSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramComments: props.instagramData.comments,
      text: ''
    }
  }
  
  addCommentHandler = e => {
    e.preventDefault();
    const newComment = {username: 'Developer', text: this.state.text}; // set name for now.
    const comments = this.state.instagramComments.slice(); // turning state of comments into an array.
    comments.push(newComment); // push new comment onto end of comment section.
    this.setState({ instagramComments: comments});
  }
  
  commentChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="ig-post">
        <div className="ig-header">
          <img
            className="ig-post-thumbnail"
            src={this.props.instagramData.thumbnailUrl}
            alt={this.props.instagramData.username}
          />
          <h2 className="ig-post-username">{this.props.instagramData.username}</h2>
        </div>
        <div className="ig-photo">
          <img className="ig-photo" src={this.props.instagramData.imageUrl} alt="" />
        </div>
        <div className="ig-interact-section">
         <LikesSection instagramData={this.props.instagramData}/>
          <div className="ig-comments">
            <CommentContainer 
                instagramComments={this.state.instagramComments}
                addCommentHandler={this.addCommentHandler}
                commentChange={this.commentChange}
                commentValue={this.commentValue}
            />
          </div>
        </div>
      </div>
    ); 
  }  
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
