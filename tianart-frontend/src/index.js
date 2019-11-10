import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import faker from 'faker';

class App extends React.Component {
  render() {
    return (
      <Intro image={faker.image.fashion()} />
    );
  }

}

ReactDOM.render(<App />, document.querySelector('#root'));
