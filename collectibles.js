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

Gas.prototype.update = function() {

  if(this.active)
  {var percentage = (this.progress/this.timeToCollect)*100;

  if(percentage < 12.5)
    split.setFrame(this, 0);
  else if(percentage < 25)
    split.setFrame(this, 1);
  else if(percentage < 37.5)
    split.setFrame(this, 2);
  else if(percentage < 50)
    split.setFrame(this, 3);
  else if(percentage < 62.5)
    split.setFrame(this, 4);
  else if(percentage < 75)
    split.setFrame(this, 5);
  else if(percentage < 87.5)
    split.setFrame(this, 6);
  else
    split.setFrame(this, 7);}

};

Gas.prototype.harvest = function() {

  game.fuelAmount += this.value;
  split.makeFloatingText(this.x, this.y-50, this.value.toString(), 0xc400ff);
  split.destroySprite(this);

};
