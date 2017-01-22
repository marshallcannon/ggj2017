function Enemy(x, y, image, health, topSpeed, acceleration, range) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.enemyGroup.add(this);
  split.customSpriteChildren(this, image, game.enemyGroup);
  this.hp = health;
  this.topSpeed = topSpeed;
  this.acc = acceleration;
  this.range = range;

  split.centerAnchor(this);

  game.physics.enable(this, Phaser.Physics.ARCADE);

}
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.update = function() {

  //Select target
  var distP1 = game.physics.arcade.distanceBetween(this, game.player1);
  var distP2 = game.physics.arcade.distanceBetween(this, game.player2);

  if(distP1 <= this.range || distP2 <= this.range)
  {
    if(distP1 <= this.range && distP2 <= this.range)
    {
      if(distP1 <= distP2)
      {
        this.target = game.player1;
      }
      else {
        this.target = game.player2;
      }
    }
    else if(distP1 <= this.range)
    {
      this.target = game.player1;
    }
    else {
      this.target = game.player2;
    }
  }

  //Chase player
  if(this.target)
  {
    if(Math.abs(this.target.x - this.x) > this.width/2)
    {
      //Target to the left
      if(this.target.x - this.x < 0)
      {
        if(this.body.velocity.x >= -this.topSpeed)
        {
          this.body.velocity.x -= this.acc;
        }
      }
      //Target to the right
      else {
        if(this.body.velocity.x <= this.topSpeed)
        {
          this.body.velocity.x += this.acc;
        }
      }
    }
    else {
      if(this.body.velocity.x - this.acc > 0)
      {
        this.body.velocity.x -= this.acc;
      }
      else if(this.body.velocity.x + this.acc < 0)
      {
        this.body.velocity.x += this.acc;
      }
      else {
        this.body.velocity.x = 0;
      }
    }

    if(Math.abs(this.target.y - this.y) > this.height/2)
    {
      //Target above
      if(this.target.y - this.y < 0)
      {
        if(this.body.velocity.y >= -this.topSpeed)
        {
          this.body.velocity.y -= this.acc;
        }
      }
      //Target above
      else {
        if(this.body.velocity.y <= this.topSpeed)
        {
          this.body.velocity.y += this.acc;
        }
      }
    }
    else {
      if(this.body.velocity.y - this.acc > 0)
      {
        this.body.velocity.y -= this.acc;
      }
      else if(this.body.velocity.y + this.acc < 0)
      {
        this.body.velocity.y += this.acc;
      }
      else {
        this.body.velocity.y = 0;
      }
    }

  }

  if(this.hp <= 0)
    split.destroySprite(this);

};

Enemy.prototype.flash = function() {

  split.tintSprite(this, 0xFF0000);

};

Enemy.prototype.stopFlash = function() {

  split.tintSprite(this, 0xFFFFFF);

};
