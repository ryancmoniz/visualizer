import React, { Component } from 'react';
import ArrayVisualizer from './ArrayVisualizer/ArrayVisualizer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ArrayVisualizer />;
  }
}

export default App;
