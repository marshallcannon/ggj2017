function Player(x, y, image, gamepad) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.playerGroup.add(this);
  split.customSpriteChildren(this, image, game.playerGroup);

  this.anchor.setTo(0.5, 0.5);
  this.renderChildren[0].anchor.setTo(0.5, 0.5);
  this.renderChildren[1].anchor.setTo(0.5, 0.5);

  this.animations.add('idle', [0, 1], 8, true);
  this.animations.add('run', [2, 3, 4, 5, 6, 7, 8, 9], 8, true);
  this.renderChildren[0].animations.add('idle', [0, 1], 8, true);
  this.renderChildren[0].animations.add('run', [2, 3, 4, 5, 6, 7, 8, 9], 8, true);
  this.renderChildren[1].animations.add('idle', [0, 1], 8, true);
  this.renderChildren[1].animations.add('run', [2, 3, 4, 5, 6, 7, 8, 9], 8, true);

  this.playAnimation('idle');

  game.physics.enable(this, Phaser.Physics.ARCADE);

  this.controller = gamepad;

  this.speed = 250;

  this.bulletTimerMax = 10;
  this.bulletTimer = 0;

  this.bulletDirectionX = 0;
  this.bulletDirectionY = 0;

  this.bulletSpeed = 800;

}
Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.update = function() {

  //Bullet Timer
  if(this.bulletTimer > 0)
  {
    this.bulletTimer--;
  }

  //Controller
  var xAxisLeft = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
  var yAxisLeft = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
  var xAxisRight = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
  var yAxisRight = this.controller.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);

  //Left Joystick
  if (xAxisLeft < -0.1 || xAxisLeft > 0.1)
  {
    this.body.velocity.x = xAxisLeft*this.speed;
    this.playAnimation('run');
  }
  else {
    this.body.velocity.x = 0;
  }

  if (yAxisLeft < -0.1 || yAxisLeft > 0.1)
  {
    this.body.velocity.y = yAxisLeft*this.speed;
    this.playAnimation('run');
  }
  else {
    this.body.velocity.y = 0;
  }

  if(xAxisLeft < 0.1 && xAxisLeft > -0.1 && yAxisLeft < 0.1 && yAxisLeft > -0.1)
  {
    this.playAnimation('idle');
  }

  //Right Joystick
  if (xAxisRight < -0.1 || xAxisRight > 0.1 || yAxisRight < -0.1 || yAxisRight > 0.1)
  {
    var p1 = {x: this.x, y: this.y};
    var p2 = {x:this.x+xAxisRight, y: this.y+yAxisRight};
    //var angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    var length = Math.sqrt(xAxisRight*xAxisRight+yAxisRight*yAxisRight);
    this.bulletDirectionX = xAxisRight/length;
    this.bulletDirectionY = yAxisRight/length;

    //Flip the player
    if(xAxisRight > 0)
    {
      this.scale.x = 1;
    }
    else {
      this.scale.x = -1;
    }
  }

  //Buttons
  if (this.controller.isDown(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER))
  {
      if(this.bulletTimer <= 0)
      {
        var newBullet = split.makeSprite(this.x, this.y, 'bullet', game.bulletGroup);
        game.physics.enable(newBullet, Phaser.Physics.ARCADE);
        newBullet.body.velocity.setTo(this.bulletDirectionX*this.bulletSpeed, this.bulletDirectionY*this.bulletSpeed);
        newBullet.knockback = 100;
        newBullet.damage = 5;
        this.bulletTimer = this.bulletTimerMax;
      }
  }

};

Player.prototype.playAnimation = function(animation) {

  this.animations.play(animation);
  this.renderChildren[0].animations.play(animation);
  this.renderChildren[1].animations.play(animation);

};
