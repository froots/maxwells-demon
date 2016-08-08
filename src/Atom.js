import React, { PropTypes } from 'react';
import { getAtomColorFromTemperature } from './colors';

const ATOM_RADIUS = 1;
const MAX_VELOCITY = 10;
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
  return Math.random() * MAX_VELOCITY * 2 - MAX_VELOCITY;
}

function randomTemperature() {
  return (Math.random() > 0.5) ? 'hot' : 'cold';
}

function moveCoordinate(val, velocity, duration) {
  return val + velocity * duration / 1000;
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

export function updateAtom(atom, timediff) {
  const newAtom = {
    x: moveCoordinate(atom.x, atom.dx, timediff),
    y: moveCoordinate(atom.y, atom.dy, timediff)
  }
  return Object.assign({}, atom, newAtom);
}

export default Atom;
