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

  this.spawnX = x;
  this.spawnY = y;

  this.controller = gamepad;

  this.speed = 250;

  this.bulletTimerMax = 10;
  this.bulletTimer = 0;

  this.bulletDirectionX = 1;
  this.bulletDirectionY = 0;

  this.bulletSpeed = 800;

  this.deathTimer = 0;

  this.target = null;
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
      if(this.controller === game.pad1)
      {
        if(!game.sounds.playerStep1.isPlaying)
        {
          game.sounds.playerStep1.play();
        }
      }
      else {
        if(!game.sounds.playerStep2.isPlaying)
        {
          game.sounds.playerStep2.play();
        }
      }
    }
    else {
      this.body.velocity.x = 0;
    }

    if (yAxisLeft < -0.1 || yAxisLeft > 0.1)
    {
      this.body.velocity.y = yAxisLeft*this.speed;
      split.playAnimation(this, 'run');
      if(this.controller === game.pad1)
      {
        if(!game.sounds.playerStep1.isPlaying)
        {
          game.sounds.playerStep1.play();
        }
      }
      else {
        if(!game.sounds.playerStep2.isPlaying)
        {
          game.sounds.playerStep2.play();
        }
      }
    }
    else {
      this.body.velocity.y = 0;
      split.playAnimation(this, 'idle');
      if(this.controller === game.pad1)
      {
        if(game.sounds.playerStep1.isPlaying)
        {
          game.sounds.playerStep1.stop();
        }
      }
      else {
        if(game.sounds.playerStep2.isPlaying)
        {
          game.sounds.playerStep2.stop();
        }
      }
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
          if(!this.dead)
          {
            var newBullet = new Bullet(this.x, this.y, 'bullet', this.bulletDirectionX*this.bulletSpeed, this.bulletDirectionY*this.bulletSpeed, 200, 5);
            this.bulletTimer = this.bulletTimerMax;
            game.sounds.gunFire.play();
          }
        }
    }
  }
  //End Non-collecting Actions

  //A Button
  if(this.controller.isDown(Phaser.Gamepad.XBOX360_A))
  {
    if(this.collecting)
    {
      this.body.velocity.setTo(0, 0);
      split.playAnimation(this, 'idle');
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

  if(this.controller.isDown(Phaser.Gamepad.XBOX360_Y))
  {
    game.sounds.music.stop();
    screen1.state.start('game');
    screen2.state.start('game');
    game.time.events.add(1000, function(){game.state.start('game');}, this);
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

    if(game.physics.arcade.distanceBetween(pickUp, player) < 50)
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
  {
    this.target.progress++;
    if(!game.sounds.fuel.isPlaying)
    {
      game.sounds.fuel.play();
    }
  }
  else
  {
    this.target.harvest();
    this.collecting = false;
    this.target = null;
  }

};

Player.prototype.die = function() {

  var loseAmount = Math.round(game.fuelAmount*0.25);
  split.makeFloatingText(this.x, this.y-50, loseAmount.toString(), 0xFF0000);
  game.fuelAmount -= loseAmount;
  this.deathTimer = 5;
  this.body.enable = false;
  split.setAlpha(this, 0);
  this.dead = true;

  game.time.events.add(1000, this.runDeathTimer, this);

};

Player.prototype.runDeathTimer = function() {

  if(this.deathTimer === 0)
  {
    this.respawn();
    return null;
  }
  else {

    split.makeFloatingText(this.x, this.y-50, this.deathTimer.toString(), 0xFFFFFF);
    this.deathTimer--;

    game.time.events.add(1000, this.runDeathTimer, this);

  }

};

Player.prototype.respawn = function() {

  split.setAlpha(this, 1);
  this.x = this.spawnX;
  this.y = this.spawnY;
  this.body.x = this.spawnX;
  this.body.y = this.spawnY;
  this.dead = false;
  game.time.events.add(100, function(){this.body.enable = true;}, this);
  game.time.events.add(150, function(){ this.x = this.spawnX; this.y = this.spawnY;}, this);

};

function playerHitEnemy(player, enemy) {

  player.die();
  split.destroySprite(enemy);

}
