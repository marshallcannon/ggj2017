function Collectible(x, y, image) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.pickupGroup.add(this);
  split.customSpriteChildren(this, image, game.pickupGroup);

  this.anchor.setTo(0.5, 1);
  this.renderChildren[0].anchor.setTo(0.5, 1);
  this.renderChildren[1].anchor.setTo(0.5, 1);

  this.timeToCollect = 15;
  this.progress = 0;
  //TODO create progress bar

  this.active = false;
  split.setAlpha(this, 0);

  game.physics.enable(this, Phaser.Physics.ARCADE);

}
Collectible.prototype = Object.create(Phaser.Sprite.prototype);

Collectible.prototype.harvest = function() {

  //TODO Add resource

};

Collectible.prototype.stopHarvest = function() {

  this.progress = 0;
  //TODO Hide progress bar

};

Collectible.prototype.activate = function() {

  this.active = true;
  game.add.tween(this.renderChildren[0]).to({alpha: 1}, 500, 'Linear', true);
  game.add.tween(this.renderChildren[1]).to({alpha: 1}, 500, 'Linear', true);

};

/*######################################################
                      Gas Tank
#####################################################*/
function Gas(x, y, value, size) {

  Collectible.call(this, x, y, 'gas');

  this.value = value;

  split.scale(this, size);

}
Gas.prototype = Object.create(Collectible.prototype);

Gas.prototype.harvest = function() {

  game.fuelAmount += this.value;
  split.destroySprite(this);

};
