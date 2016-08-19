import React, { Component } from 'react'
import Game from './Game'
import { create as createAtom, update as updateAtom } from '../types/Atom'
import Region from '../lib/Region'
import { ADD_ATOM_INTERVAL, MAX_ATOMS, GAME_SIZE } from '../config.json'
import './App.css'

class App extends Component {
  state = {
    barrier: false,
    atoms: [],
    previousUpdate: 0
  }

  render() {
    const { barrier, atoms } = this.state
    return (
      <div className="App">
        <Game
          width={GAME_SIZE}
          height={GAME_SIZE}
          barrier={barrier}
          atoms={atoms} />
      </div>
    )
  }

  componentWillMount() {
    this.region = new Region(0, 0, 1, 1)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.addAtom = this.addAtom.bind(this)
    this.update = this.update.bind(this)

    document.addEventListener('keydown', this.handleKeyDown, false)
    document.addEventListener('keyp', this.handleKeyUp, false)

    this.addAtom()
    this.addAtomInterval = window.setInterval(this.addAtom, ADD_ATOM_INTERVAL)
    this.animationFrame = window.requestAnimationFrame(this.update)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false)
    document.removeEventListener('keyup', this.handleKeyUp, false)
    window.clearInterval(this.addAtomInterval)
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(this.animationFrame)
    }
  }

  addAtom() {
    if (this.state.atoms.length >= MAX_ATOMS) {
      return
    }
    this.setState({
      atoms: [...this.state.atoms, createAtom(this.region)]
    })
  }

  handleKeyDown(e) {
    if (e.code === 'Space') {
      e.preventDefault()
      this.setState({ barrier: true })
    }
  }

  handleKeyUp(e) {
    if (e.code === 'Space') {
      e.preventDefault()
      this.setState({ barrier: false })
    }
  }

  update(timestamp) {
    const timediff = timestamp - this.state.previousUpdate
    const region = this.region
    const atoms = this.state.atoms.map((atom) => updateAtom(atom, timediff, region))
    this.setState({
      previousUpdate: timestamp,
      atoms
    })
    this.animationFrame = window.requestAnimationFrame(this.update)
  }
}

export default App
