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
  
  render() {
    return (
      <div className="ig-layout">
        <SearchBar />
        {this.state.instagramData.map( (instagramData) => {
          return <PostContainer 
            key={instagramData.id} 
            instagramData={instagramData}
        />;
        })}
      </div>
    );
  }
};
export default App;
