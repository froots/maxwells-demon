import React, { Component } from 'react';
import Game from './Game';
import { createAtom, updateAtom } from './Atom';
import './App.css';

const ADD_ATOM_INTERVAL = 5000;
const MAX_ATOMS = 10;
const GAME_SIZE = 500;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barrier: false,
      atoms: [],
      previousUpdate: 0
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.addAtom = this.addAtom.bind(this);
    this.update = this.update.bind(this);
  }

  addAtom() {
    if (this.state.atoms.length >= MAX_ATOMS) return;
    this.setState({
      atoms: [...this.state.atoms, createAtom()]
    });
  }

  handleKeyDown(e) {
    if (e.code === 'Space') {
      e.preventDefault();
      this.setState({ barrier: true });
    }
  }

  handleKeyUp(e) {
    if (e.code === 'Space') {
      e.preventDefault();
      this.setState({ barrier: false });
    }
  }

  update(timestamp) {
    const timediff = timestamp - this.state.previousUpdate;
    const barrier = this.state.barrier;
    const atoms = this.state.atoms.map((atom) => {
      return updateAtom(atom, barrier, timediff)
    });
    this.setState({
      previousUpdate: timestamp,
      atoms
    });
    this.animationFrame = window.requestAnimationFrame(this.update);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
    document.addEventListener('keyup', this.handleKeyUp, false);
    this.addAtom();
    this.addAtomInterval = window.setInterval(this.addAtom, ADD_ATOM_INTERVAL);
    this.animationFrame = window.requestAnimationFrame(this.update);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
    document.removeEventListener('keyup', this.handleKeyUp, false);
    window.clearInterval(this.addAtomInterval);
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  render() {
    return (
      <div className="App">
        <Game
          width={GAME_SIZE}
          height={GAME_SIZE}
          barrier={this.state.barrier}
          atoms={this.state.atoms} />
      </div>
    );
  }
}

export default App;
