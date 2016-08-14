import { random } from '../lib/Vector'
import { MINIMUM_SPEED, MAXIMUM_SPEED, ATOM_RADIUS } from '../config.json'

const HOT = 'hot'
const COLD = 'cold'

let atomId = 0

export function create() {
  return {
    id: atomId++,
    location: randomLocation(),
    velocity: randomVelocity(),
    radius: ATOM_RADIUS,
    temperature: randomTemperature()
  }
}

export function update(atom, timediff) {
  return atom
}

function randomLocation() {
  return random(0, 0, 1, 1)
}

function randomVelocity() {
  return random(MINIMUM_SPEED, MINIMUM_SPEED, MAXIMUM_SPEED, MAXIMUM_SPEED)
}

function randomTemperature() {
  return (Math.random() > 0.5) ? HOT : COLD
}
