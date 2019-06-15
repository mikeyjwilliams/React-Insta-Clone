import React from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import LikesSection from './LikesSection/LikesSection';
import './PostContainer.css';



class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramComments: props.igData.comments
    }
  }
  render() {
    console.log(this.state.instagramComments);
    return (
      <div className="ig-post">
        <div className="ig-header">
          <img
            className="ig-post-thumbnail"
            src={this.props.igData.thumbnailUrl}
            alt={this.props.igData.username}
          />
          <h2 className="ig-post-username">{this.props.igData.username}</h2>
        </div>
        <div className="ig-photo">
          <img className="ig-photo" src={this.props.igData.imageUrl} alt="" />
        </div>
        <div className="ig-interact-section">
         <LikesSection igData={this.props.igData}/>
          <div className="ig-comments">
            <CommentContainer 
                igData={this.props.igData}
                addNewComment={this.props.addNewComment}
                changeComment={this.props.changeComment}
                commentValue={this.props.commentValue}
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
