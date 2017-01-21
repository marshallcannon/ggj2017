function Player(x, y, image, gamepad) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.playerGroup.add(this);
  split.customSpriteChildren(this, image, game.playerGroup);
  console.log(game.playerGroup.renderChildren);

  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.controller = gamepad;

}
Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.update = function() {

  var xAxisLeft = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
  var yAxisLeft = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
  var xAxisRight = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
  var yAxisRight = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

  //Left Joystick
  if (xAxisLeft < -0.1 || xAxisLeft > 0.1)
  {
    this.body.velocity.x = xAxisLeft*100;
  }
  else {
    this.body.velocity.x = 0;
  }

  if (yAxisLeft < -0.1 || yAxisLeft > 0.1)
  {
    this.body.velocity.y = yAxisLeft*100;
  }
  else {
    this.body.velocity.y = 0;
  }

  //Right Joystick
  if (xAxisRight < -0.1 || xAxisRight > 0.1 || yAxisRight < -0.1 || yAxisRight > 0.1)
  {
    this.shootingAngle = game.physics.arcade.angleToXY(this, this.x + xAxisRight, this.y + yAxisRight);
    console.log(this.shootingAngle);
  }

  //Buttons
  if (game.pad1.isDown(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER))
  {
      console.log('pew');
  }

};
