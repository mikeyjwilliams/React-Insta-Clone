import React from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import PostHeader from '../../PostHeader/PostHeader';
import LikesSection from './LikesSection/LikesSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramComments: props.instagramData.comments,
      text: '',
      likes: props.instagramData.likes

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

  heartLikesHandler = e => {

  }

  render() {
    return (
      <div className="ig-post">
        <PostHeader instagramData={this.props.instagramData} />
        <div className="ig-photo">
          <img className="ig-photo" src={this.props.instagramData.imageUrl} alt="" />
        </div>
        <div className="ig-interact-section">
         <LikesSection 
            instagramData={this.props.instagramData}
            heartLikes={this.heartLikesHandler}
          />
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
