function Player(x, y, image, gamepad) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.playerGroup.add(this);
  split.customSpriteChildren(this, image, game.playerGroup);
  split.centerAnchor(this);

  split.addAnimation(this, 'idle', [0, 1], 5, true);
  split.addAnimation(this, 'run', [2, 3, 4, 5, 6, 7, 8, 9], 10, true);

  split.playAnimation(this, 'idle');

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.offset.setTo(18, 40);
  this.body.setSize(30, 15);

  this.controller = gamepad;

  this.speed = 250;

  this.bulletTimerMax = 10;
  this.bulletTimer = 0;

  this.bulletDirectionX = 0;
  this.bulletDirectionY = 0;

  this.bulletSpeed = 800;

  this.collecting = false;

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

  //Non collecting actions
  if(!this.collecting)
  {
    //Left Joystick
    if (xAxisLeft < -0.1 || xAxisLeft > 0.1)
    {
      this.body.velocity.x = xAxisLeft*this.speed;
      split.playAnimation(this, 'run');
    }
    else {
      this.body.velocity.x = 0;
    }

    if (yAxisLeft < -0.1 || yAxisLeft > 0.1)
    {
      this.body.velocity.y = yAxisLeft*this.speed;
      split.playAnimation(this, 'run');
    }
    else {
      this.body.velocity.y = 0;
    }

    if(xAxisLeft < 0.1 && xAxisLeft > -0.1 && yAxisLeft < 0.1 && yAxisLeft > -0.1)
    {
      split.playAnimation(this, 'idle');
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

    //Shooting
    if (this.controller.isDown(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER))
    {
        if(this.bulletTimer <= 0)
        {
          var newBullet = new Bullet(this.x, this.y, 'bullet', this.bulletDirectionX*this.bulletSpeed, this.bulletDirectionY*this.bulletSpeed, 100, 5);
          this.bulletTimer = this.bulletTimerMax;
        }
    }
  }
  //End Non-collecting Actions

  //A Button
  if(this.controller.isDown(Phaser.Gamepad.XBOX360_A))
  {
    if(this.collecting)
    {
      this.activate();
    }
    else {
      this.target = this.findTarget();
      if(this.target)
        this.activate();
    }
  }
  else {
    if(this.collecting)
    {
      this.collecting = false;
      this.target.stopHarvest();
      this.target = null;
    }
  }

};

Player.prototype.findTarget = function() {

  var player = this;

  //Check doors first
  var closestDoor = null;
  game.doorGroup.forEach(function(door) {

    if(game.physics.arcade.distanceBetween(door, player) < 80)
    {
      if(!door.opened)
        closestDoor = door;
    }

  });

  if(closestDoor)
    return closestDoor;

  //Then collectibles
  var nearestPickUp = null;
  game.pickupGroup.forEach(function(pickUp) {

    if(game.physics.arcade.distanceBetween(pickUp, player) < 100)
    {
      if(!nearestPickUp)
        nearestPickUp = pickUp;
      else {
        var oldDist = game.physics.arcade.distanceBetween(nearestPickUp, player);
        var newDist = game.physics.arcade.distanceBetween(pickUp, player);
        if(newDist < oldDist)
          nearestPickUp = pickUp;
      }
    }

  });
  if(nearestPickUp)
  {
    this.collecting = true;
    return nearestPickUp;
  }

};

Player.prototype.activate = function() {

  //If it's a door
  if(this.target.openDoor)
  {
    this.target.openDoor();
    this.target = null;
    this.collecting = false;
    return;
  }

  //If it's a collectible
  if(this.target.progress < this.target.timeToCollect)
    this.target.progress++;
  else
  {
    this.target.harvest();
    this.collecting = false;
    this.target = null;
  }

};
