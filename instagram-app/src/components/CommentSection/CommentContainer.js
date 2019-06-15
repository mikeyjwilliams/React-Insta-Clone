import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment'; 



class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.igData.comments,
      comment: ''
    }
  }

  

  commentSubmit = e => {
    e.preventDefault();
    const text = e.target.value;
    console.log(text);
  }
  
  commentValue = e => {
    this.setState({
      text: e.target.value
    })
    console.log(e.target.value);
  }

  
  render() {
    return (
      <div>
        {this.props.igData.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <NewComment 
          addNewComment={this.props.addNewComment}
          changeComment={this.props.changeComment}
          commentValue={this.props.commentvalue}
        />
      </div> 
    );
  }
  
};
export default CommentContainer;
