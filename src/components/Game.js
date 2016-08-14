import React, { PropTypes } from 'react'
import Atom from './Atom'
import './Game.css'

const Game = ({ width, height, barrier, atoms }) => (
  <svg width={width} height={height} viewBox="0 0 1 1" className="Game">
    <g>
      { atoms.map((atom) => <Atom key={atom.id} {...atom} />) }
    </g>
  </svg>
)

Game.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barrier: PropTypes.bool.isRequired,
  atoms: PropTypes.array.isRequired
}

export default Game
