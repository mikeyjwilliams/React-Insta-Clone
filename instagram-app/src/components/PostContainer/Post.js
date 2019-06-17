import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
// Comes from PostContainer.
import './Posts.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.instagramdata.likes,
    };
  }
  render() {
    return (
      <div class='border'>
        <PostHeader
          username={this.props.instagramdata.username}
          thumbnailUrl={this.props.instagramdata.thumbnailUrl}
        />
        <div className='img-section'>
          <img
            className='image-post'
            alt='instagram post'
            src={this.props.instagramdata.imageUrl}
          />
        </div>
        <LikeSection
          increaseLikes={this.increaseLikes}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.instagramdata.imageUrl}
          comments={this.props.instagramdata.comments}
        />
      </div>
    );
  }
}
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};
export default Post;
