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

//Bounding Box
function BB(x, y, width, height) {

  Phaser.Sprite.call(this, game, x, y, null);
  game.boundingBoxGroup.add(this);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.setSize(width, height);
  this.body.immovable = true;

}
BB.prototype = Object.create(Phaser.Sprite.prototype);
