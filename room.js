function Room(x, y, start, up, right, down, left, spawnFunction) {

  this.x = x;
  this.y = y;
  this.startRoom = start;
  this.up = up;
  this.right = right;
  this.down = down;
  this.left = left;

  this.spawn = spawnFunction;
  this.objects = [];

  this.active = false;
  this.fog = split.makeSprite(this.x*game.roomWidth, this.y*game.roomHeight, 'fog', game.fogGroup);

}

Room.prototype.activate = function() {

  this.active = true;
  game.add.tween(this.fog.renderChildren[0]).to( {alpha: 0}, 500, "Linear", true);
  game.add.tween(this.fog.renderChildren[1]).to( {alpha: 0}, 500, "Linear", true);

  for(var i = 0; i < this.objects.length; i++)
  {
    this.objects[i].activate();
  }

};

//Bounding Box
function BB(x, y, width, height) {

  Phaser.Sprite.call(this, game, x, y, null);
  game.boundingBoxGroup.add(this);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.setSize(width, height);
  this.body.immovable = true;

}
BB.prototype = Object.create(Phaser.Sprite.prototype);
