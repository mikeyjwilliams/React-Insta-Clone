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

  componetDidMount() {
    this.SetState({
      instagramData: this.state.dummyData
    })
  }
  
  render() {
    return (
      <div className="ig-layout">
        {this.state.instagramData.map( (instagramData, index) => {
          return <CommentSection 
                    key={index}
                    instagramData={this.state.instagramData}
                />
          })
      }
      </div>
    );
  }
};
export default App;
