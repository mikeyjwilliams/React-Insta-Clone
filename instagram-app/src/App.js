import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: dummyData
    };
  }

  render() {
    return (
      <div className="ig-layout">
        <SearchBar />
        {this.state.instagramData.map(igData => {
          return <PostContainer 
            key={igData.id} 
            igData={igData}
            changeSubmit={this.changeSubmit}
            commentSubmit={this.commentSubmit}
            commentValue={this.commentValue} 
        />;
        })}
      </div>
    );
  }
};
export default App;
