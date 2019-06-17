import React from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: []
    };
  }

  componentDidMount() {
    this.setState({
      instagramData: dummyData
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="ig-layout">
        {this.state.instagramData.map((posts, index) => {
          return <PostContainer instagramData={this.state.instagramData} />;
        })}
      </div>
    );
  }
}
export default App;
