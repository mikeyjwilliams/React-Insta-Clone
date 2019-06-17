import React from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import PostHeader from '../../PostHeader/PostHeader';
import LikesSection from './LikesSection/LikesSection';
import './PostContainer.css';
import dummyData from '../../dummy-data';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       instagramComments: [],
    //   text: '',
    //   likes: props.instagramData.likes,
    //   like: 0,

    }
  }

  componentDidMount() {
    this.setState({
      instagramComments: dummyData
    })
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

  likeIncrease = e => {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>

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
