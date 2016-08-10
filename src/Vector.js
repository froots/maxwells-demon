function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.add = function(v2) {
  return new Vector(this.x + v2.x, this.y + v2.y);
};

Vector.prototype.scale = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};

Vector.prototype.bounceIfOutside = function(target, bounds) {
  return new Vector(
    (target.x < 0 || target.x > bounds.x) ? this.x * -1 : this.x,
    (target.y < 0 || target.y > bounds.y) ? this.y * -1 : this.y
  );
};

export function randomVector(minX, maxX, minY, maxY) {
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  return new Vector(x, y);
}

export default Vector;
