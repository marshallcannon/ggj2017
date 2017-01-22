function Door(x, y, orientation, room1, room2) {

  var image;
  if(orientation === 0)
    image = 'topDoor';
  else if(orientation === 1)
    image = 'sideDoor';

  Phaser.Sprite.call(this, game, x, y, image);
  game.doorGroup.add(this);
  split.customSpriteChildren(this, image, game.doorGroup);
  split.centerAnchor(this);
  var openAnim = split.addAnimation(this, 'open', [1, 2, 3, 4], 10, false);
  openAnim.onComplete.add(this.doneOpening, this);

  this.room1 = room1;
  this.room2 = room2;

  this.opened = false;

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.immovable = true;
  this.body.offset.setTo(25, 20);
  this.body.setSize(73, 80);

}
Door.prototype = Object.create(Phaser.Sprite.prototype);

Door.prototype.openDoor = function() {

  this.room1.activate();
  this.room2.activate();

  this.opened = true;
  split.playAnimation(this, 'open');
  this.body.enable = false;
  game.sounds.door.play();

};

Door.prototype.doneOpening = function() {

  split.destroySprite(this);

};
