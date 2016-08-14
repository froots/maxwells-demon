import { between } from './Random'

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

export function random(minX, minY, maxX, maxY) {
  const x = between(minX, maxX)
  const y = between(minY, maxY)
  return new Vector(x, y)
}

export default Vector
