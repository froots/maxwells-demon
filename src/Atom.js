import React, { PropTypes } from 'react';
import { getAtomColorFromTemperature } from './colors';
import Vector, { randomVector } from './Vector';

const MAX = 100;
const ATOM_RADIUS = 1;
const MIN_POSITION = 10;
const MAX_POSITION = 90;
const MIN_VELOCITY = -20;
const MAX_VELOCITY = 20;

let atomId = 0;

const Atom = ({location, radius, temperature}) => {
  const fillColor = getAtomColorFromTemperature(temperature);
  return (
    <circle cx={location.x} cy={location.y} r={radius} fill={fillColor} />
  );
};

Atom.propTypes = {
  location: PropTypes.object.isRequired,
  radius: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired
};

function randomLocation() {
  return randomVector(MIN_POSITION, MAX_POSITION, MIN_POSITION, MAX_POSITION);
}

function randomVelocity() {
  return randomVector(MIN_VELOCITY, MAX_VELOCITY, MIN_VELOCITY, MAX_VELOCITY);
}

function randomTemperature() {
  return (Math.random() > 0.5) ? 'hot' : 'cold';
}

export function createAtom() {
  return {
    id: atomId++,
    location: randomLocation(),
    velocity: randomVelocity(),
    radius: ATOM_RADIUS,
    temperature: randomTemperature()
  }
}

export function updateAtom(atom, barrier, timediff) {
  return {
    ...atom,
    ...updateWithBounds(
      atom.location,
      atom.velocity,
      timediff,
      new Vector(MAX, MAX)
    )
  };
}

function updateWithBounds(location, velocity, timediff, bounds) {
  let newLocation = location.add(velocity.scale(timediff/1000));
  let newVelocity = velocity.bounceIfOutside(newLocation, bounds);

  return {
    location: newLocation,
    velocity: newVelocity
  };
}

export default Atom;
