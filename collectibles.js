function Collectible(x, y, image) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.pickupGroup.add(this);
  split.customSpriteChildren(this, image, game.pickupGroup);
  split.centerAnchor(this);

  this.timeToCollect = 15;
  this.progress = 0;
  //TODO create progress bar

  game.physics.enable(this, Phaser.Physics.ARCADE);

}
Collectible.prototype = Object.create(Phaser.Sprite.prototype);

Collectible.prototype.harvest = function() {

  //Add resource

};

Collectible.prototype.stopHarvest = function() {

  this.progress = 0;
  //TODO Hide progress bar

};

/*######################################################
                      Gas Tank
#####################################################*/
function Gas(x, y, value, size) {

  Collectible.call(this, x, y, 'gas');

}
Gas.prototype = Object.create(Collectible.prototype);

Gas.prototype.harvest = function() {

  split.destroySprite(this);

};
