function Enemy(x, y, image, health, topSpeed, acceleration, range) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.enemyGroup.add(this);
  split.customSpriteChildren(this, image, game.enemyGroup);
  this.hp = health;
  this.topSpeed = topSpeed;
  this.acc = acceleration;
  this.range = range;

  split.centerAnchor(this);

  this.active = false;
  split.setAlpha(this, 0);

  game.physics.enable(this, Phaser.Physics.ARCADE);

}
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.update = function() {

  if(this.active)
  {
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

  }

};

Enemy.prototype.flash = function() {

  split.tintSprite(this, 0xFF0000);

};

Enemy.prototype.stopFlash = function() {

  split.tintSprite(this, 0xFFFFFF);

};

Enemy.prototype.activate = function() {

  this.active = true;
  game.add.tween(this.renderChildren[0]).to({alpha: 1}, 500, 'Linear', true);
  game.add.tween(this.renderChildren[1]).to({alpha: 1}, 500, 'Linear', true);

};

/*############################################
                    GHOST
############################################*/
function Ghost(x, y, difficulty) {

  var health, speed, acc, range;
  if(difficulty === 1)
  {
    health = 30;
    speed = 200;
    acc = 5;
    range = 300;
  }
  if(difficulty === 2)
  {
    health = 50;
    speed = 300;
    acc = 10;
    range = 350;
  }
  if(difficulty === 3)
  {
    health = 80;
    speed = 400;
    acc = 15;
    range = 400;
  }
  else {
    health = 30;
    speed = 200;
    acc = 5;
    range = 300;
  }

  Enemy.call(this, x, y, 'ghost', health, speed, acc, range);

  if(difficulty === 1)
    split.tintSprite(this, 0x0000FF);
  if(difficulty === 2)
    split.tintSprite(this, 0x00FF00);
  if(difficulty === 3)
    split.tintSprite(this, 0xFF0000);


}
Ghost.prototype = Object.create(Enemy.prototype);
