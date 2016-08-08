import React, { PropTypes } from 'react';
import Container from './Container';
import Barrier from './Barrier';
import Atom from './Atom';
import './Game.css';

const Game = ({ width, height, barrier, atoms }) => (
  <svg width={width} height={height} viewBox="0 0 100 100" className="Game">
    <Container x={0} y={0} width={50} height={100} temperature="hot"/>
    <Container x={50} y={0} width={50} height={100} temperature="cold"/>
    <g>
      { atoms.map((atom) => <Atom key={atom.id} {...atom} />) }
    </g>
    <Barrier x={50} y={0} width={0.8} height={100} closed={barrier} />
  </svg>
)

Game.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barrier: PropTypes.bool.isRequired,
  atoms: PropTypes.array.isRequired
};

export default Game;
