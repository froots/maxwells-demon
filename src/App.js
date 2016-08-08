import React, { Component } from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barrier: false
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (e.code === 'Space') {
      this.setState({ barrier: true });
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.code === 'Space') {
      this.setState({ barrier: false });
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
  }

  render() {
    return (
      <div className="App">
        <Game width={500} height={500} barrier={this.state.barrier} />
      </div>
    );
  }
}

export default App;
