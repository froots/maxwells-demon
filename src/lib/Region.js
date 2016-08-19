import Vector from './Vector'

class Region {
  constructor(x1, y1, x2, y2) {
    this.topLeft = new Vector(x1, y1)
    this.bottomRight = new Vector(x2, y2)
  }

  contains(v) {
    return v.isLessThan(this.bottomRight) &&
      v.isGreaterThan(this.topLeft)
  }
}

export default Region
