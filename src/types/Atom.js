import { random as randomV } from '../lib/Vector'
import {
  MINIMUM_SPEED,
  MAXIMUM_SPEED,
  ATOM_RADIUS,
  BUFFER
} from '../config.json'

const HOT = 'hot'
const COLD = 'cold'

let atomId = 0

export function create(region) {
  return {
    id: atomId++,
    location: randomLocation(region),
    velocity: randomVelocity(),
    radius: ATOM_RADIUS,
    temperature: randomTemperature()
  }
}

export function update(atom, timediff, region) {
  const periodVelocity = atom.velocity.scale(timediff / 1000)
  let location = atom.location.add(periodVelocity)
  let velocity = atom.velocity.clone()

  if (location.x + atom.radius > region.bottomRight.x) {
    velocity.x *= -1
    location.x = region.bottomRight.x - atom.radius
  }

  if (location.x - atom.radius < region.topLeft.x) {
    velocity.x *= -1
    location.x = region.topLeft.x + atom.radius
  }

  if (location.y + atom.radius > region.bottomRight.y) {
    velocity.y *= -1
    location.y = region.bottomRight.y - atom.radius
  }

  if (location.y - atom.radius < region.topLeft.y) {
    velocity.y *= -1
    location.y = region.topLeft.y + atom.radius
  }

  return {
    ...atom,
    location: location,
    velocity: velocity
  }
}

function randomLocation(region) {
  return randomV(
    region.topLeft.x + BUFFER,
    region.topLeft.y + BUFFER,
    region.bottomRight.x - BUFFER,
    region.bottomRight.y - BUFFER
  )
}

function randomVelocity() {
  return randomV(MINIMUM_SPEED, MINIMUM_SPEED, MAXIMUM_SPEED, MAXIMUM_SPEED)
}

function randomTemperature() {
  return (Math.random() > 0.5) ? HOT : COLD
}
