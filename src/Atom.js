import React, { PropTypes } from 'react';
import { getAtomColorFromTemperature } from './colors';

const ATOM_RADIUS = 1;
const MAX_VELOCITY = 20;
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

function moveX(atom, barrier, min, max, timediff) {
  const moveBy = atom.dx * timediff / 1000;
  let newX = atom.x + moveBy;
  let newDx = atom.dx;
  if (newX > max) {
    newX = max - (newX - max);
    newDx = -newDx;
  }
  if (newX < 0) {
    newX = min + (min - newX);
    newDx = -newDx;
  }
  return {
    x: newX,
    dx: newDx
  };
}

function moveY(atom, barrier, min, max, timediff) {
  const moveBy = atom.dy * timediff / 1000;
  let newY = atom.y + moveBy;
  let newDy = atom.dy;
  if (newY > max) {
    newY = max - (newY - max);
    newDy = -newDy;
  }
  if (newY < 0) {
    newY = min + (min - newY);
    newDy = -newDy;
  }
  return {
    y: newY,
    dy: newDy
  };
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

export function updateAtom(atom, barrier, timediff) {
  return {
    ...atom,
    ...moveX(atom, barrier, 0, 100, timediff),
    ...moveY(atom, barrier, 0, 100, timediff)
  };
}

export default Atom;
