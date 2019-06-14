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

//1. import dummy data
//2. iterate over data => pass individual object = {prop} instanceOf {PostContainer}
//3. {PostContainer} => PASS array comments => {prop} instanceOf {CommentSection}
//4. {CommentSection} RECIEVE {array} => COMMENTS = {props} && RENDER {CommentComponent} w/ =>
// { username=>poster, post=>text} (!input box can be added will be incremented tomorrow though not needed now!)
//5. check TYPES of? DATA passing around as {props} in COMPONENTS
//6. (not sure yet) Linked to {CommentComponent} =>THAT {CommentSection} will RENDER to-WHERE? {PostComponent} container will RENDER
//7. FREE TO USE Reactstrap for themeing and styling
//8. add own styles for theming and styling.
