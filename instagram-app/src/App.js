import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/Posts/PostContainer';
import './App.css';

// import {
//   IconLookup,
//   IconDefinition,
//   findIconDefinition
// } from '@fortawesome/fontawesome-svg-core'
 

//import { library } from '@fortawesome/fontawesome-svg-core';
// import {faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

// library.add(faComment, faHeart);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
    };
  }


  componentDidMount() {
      this.setState({instagramData: dummyData})
  }
  
  render() {
    return (
      <div className="ig-layout">
        <SearchBar />
        {this.state.instagramData.length > 0 ? 
           this.state.instagramData.map( (instagramData) => {
              return <PostContainer 
                        key={instagramData.id} 
                        instagramData={instagramData}
                      />;
              }
            )
          
        : <h1>Loading...</h1>
        }
      </div>
    );
  }
};
export default App;
