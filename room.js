function Room(x, y, start, up, right, down, left, spawnFunction) {

  this.x = x;
  this.y = y;
  this.startRoom = start;
  this.up = up;
  this.right = right;
  this.down = down;
  this.left = left;

  this.spawn = spawnFunction;

}
