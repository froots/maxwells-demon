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
    const { hot, cold } = this.getScores(atoms)
    return (
      <div className="App">
        <Game
          width={GAME_SIZE}
          height={GAME_SIZE}
          barrier={barrier}
          atoms={atoms}
          hotScore={hot}
          coldScore={cold} />
      </div>
    )
  }

  componentWillMount() {
    this.region = new Region(0, 0, 100, 100)
    this.hotRegion = new Region(0, 0, 50, 100)
    this.coldRegion = new Region(50, 0, 100, 100)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.addAtom = this.addAtom.bind(this)
    this.update = this.update.bind(this)

    document.addEventListener('keydown', this.handleKeyDown, false)
    document.addEventListener('keyup', this.handleKeyUp, false)

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

  getScores(atoms) {
    const hot = atoms
      .filter((atom) => atom.temperature === 'cold')
      .filter((atom) => this.hotRegion.contains(atom.location))
      .length
    const cold = atoms
      .filter((atom) => atom.temperature === 'hot')
      .filter((atom) => this.coldRegion.contains(atom.location))
      .length

    return {
      hot,
      cold
    }
  }
}

export default App
