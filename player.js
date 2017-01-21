function Player(x, y, image) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.playerGroup.add(this);
  split.customSpriteChildren(this, image, game.playerGroup);

}
Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.update = function() {

  //Joystick
  if (game.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
  {
      this.body.velocity.x = game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X)*10;
      console.log('move');
  }
  else if (game.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
  {
      this.body.velocity.x = game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X)*10;
  }

  if (game.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
  {
      this.body.velocity.y = game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y)*10;
  }
  else if (game.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
  {
      this.body.velocity.y = game.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y)*10;
  }

  //Buttons
  if (game.pad1.justPressed(Phaser.Gamepad.XBOX360_A))
  {
      //Nothing yet
  }

};
