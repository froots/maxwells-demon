import React, { PropTypes } from 'react';
import { getAtomColorFromTemperature } from './colors';

const ATOM_RADIUS = 1;
let atomId = 0;

const Atom = ({x, y, r, temperature}) => {
  const fillColor = getAtomColorFromTemperature(temperature);
  return (
    <circle cx={x} cy={y} r={r} fill={fillColor} />
  );
};

Atom.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired
};

function randomCoordinate() {
  return Math.random() * 80 + 10;
}

function randomVelocity() {
  return Math.random() * 4 - 2;
}

function randomTemperature() {
  return (Math.random() > 0.5) ? 'hot' : 'cold';
}

export function createAtom() {
  return {
    id: atomId++,
    x: randomCoordinate(),
    y: randomCoordinate(),
    dx: randomVelocity(),
    dy: randomVelocity(),
    r: ATOM_RADIUS,
    temperature: randomTemperature()
  }
}

export default Atom;
