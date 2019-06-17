import React from 'react';

import dummyData from './dummy-data';
import './App.css';


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
      <h1>hello</h1>
      </div>
    );
  }
};
export default App;
