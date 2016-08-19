import { between } from './Random'

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y)
  }

  scale(s) {
    return new Vector(this.x * s, this.y * s)
  }

  clone() {
    return new Vector(this.x, this.y)
  }

  isLessThan(v) {
    return this.x < v.x && this.y < v.y
  }

  isGreaterThan(v) {
    return this.x > v.x && this.y > v.y
  }
}

export function random(minX, minY, maxX, maxY) {
  const x = between(minX, maxX)
  const y = between(minY, maxY)
  return new Vector(x, y)
}

export default Vector
