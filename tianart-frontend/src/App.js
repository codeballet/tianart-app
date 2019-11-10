import React from 'react';
import Intro from './Intro';
import faker from 'faker';

class App extends React.Component {
  render() {
    return (
      <Intro image={faker.image.fashion()} />
    );
  }
}

export default App;