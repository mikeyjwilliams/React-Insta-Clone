import React from 'react';

import Comment from './Comment';
import './Comment.css';
import NewComment from './NewComment';



class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
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
          onSubmit={this.props.commentsubmit}
          onChange={this.props.changecomment}
          value={this.props.changevalue}
        />
      </div> 
    );
  }
  
};
export default CommentContainer;
