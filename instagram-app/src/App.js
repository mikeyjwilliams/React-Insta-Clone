import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

function App() {
  return (
    <div className="ig-layout">
      <SearchBar />
      {dummyData.map(igData => {
        return <PostContainer key={igData.id} igData={igData} />;
      })}
    </div>
  );
}
export default App;
