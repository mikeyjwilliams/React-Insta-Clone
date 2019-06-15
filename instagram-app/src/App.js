import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
    };
  }

  componentDidMount(prevProps) {
      this.setState({instagramData: dummyData})
  }

  addNewComment = (e, index) => {
    e.preventDefault();
  }


  render() {
    return (
      <div className="ig-layout">
        <SearchBar />
        {this.state.instagramData.map( (igData) => {
          return <PostContainer 
            key={igData.id} 
            igData={igData}
        />;
        })}
      </div>
    );
  }
};
export default App;
