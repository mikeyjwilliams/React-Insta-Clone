import React from 'react';

import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: [],
    };
  }

  componentDidMount() {
      this.setState({
        instagramData: dummyData
      });
  }
  
  render() {
    console.log(this.state.instagramData);
    return (
      <div className="ig-layout">
        {this.state.instagramData.map( (instagram, index) => {
           return <Post 
                    key={index}
                    instagram={instagram}
                />
          })
      }
      </div>
    );
  }
};
export default App;
