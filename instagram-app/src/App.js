import React from 'react';

import dummyData from './dummy-data';
import PostContainer from '../components/PostContainer/Postcontainer';
import './App.css';

const testData = [
  {
    id: "a",
    username: "philzcoffee",
    thumbnailUrl:
      "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        id: 1,
        username: "philzcoffee",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        id: 2,
        username: "biancasaurus",
        text: "Looks delicious!"
      },
      {
        id: 3,
        username: "martinseludo",
        text: "Can't wait to try it!"
      }
    ]
  }
]

function App() {
 return ( 
    console.log(dummyData);
    return (
      <div className="ig-layout">
        { this.testData.map( (igData) => {
            <PostContainer
              key={igData.id}
              instagramData={igData}
            />
          })
        }
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