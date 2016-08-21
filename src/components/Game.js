import React, { PropTypes } from 'react'
import Atom from './Atom'
import Container from './Container'
import TotalScore from './TotalScore'
import Timer from './Timer'
import './Game.css'

const Game = ({ width, height, barrier, atoms, hotScore, coldScore, totalScore, time }) => {
  const bar = (barrier) ? <rect x={50-0.4} y={0} width={0.8} height={100} fill="#fff" /> : null

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" className="Game">
      <Container x={0} y={0} width={50} height={100} temperature="hot" score={hotScore} />
      <Container x={50} y={0} width={50} height={100} temperature="cold" score={coldScore} />
      <g>
        { atoms.map((atom) => <Atom key={atom.id} {...atom} />) }
      </g>
      {bar}
      <TotalScore x={10} y={80} width={50} height={20} score={totalScore} />
      <Timer x={90} y={80} width={50} height={20} time={time} />
    </svg>
  )
}

Game.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barrier: PropTypes.bool.isRequired,
  atoms: PropTypes.array.isRequired,
  hotScore: PropTypes.number,
  coldScore: PropTypes.number,
  totalScore: PropTypes.number,
  time: PropTypes.number
}

export default Game
