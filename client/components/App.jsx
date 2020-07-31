import React, { Component } from 'react';
import BubbleSort from './BubbleSort/bubbleSort';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <BubbleSort />;
  }
}

export default App;
