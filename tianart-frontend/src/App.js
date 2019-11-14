import React from 'react';
import Intro from './Intro';

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black"}}>
        <div className="ui container">
          <Intro image="/flora-portrait.jpg" />
        </div>
      </div>
    );
  }
}

export default App;