import Vector from './Vector'

class Region {
  constructor(x1, y1, x2, y2) {
    this.topLeft = new Vector(x1, y1)
    this.bottomRight = new Vector(x2, y2)
  }
}

export default Region
