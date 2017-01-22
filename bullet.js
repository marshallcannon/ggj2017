function Bullet(x, y, image, velX, velY, knockback, damage) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.bulletGroup.add(this);
  split.customSpriteChildren(this, image, game.bulletGroup);
  split.centerAnchor(this);

  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.body.velocity.setTo(velX, velY);
  this.knockback = knockback;
  this.damage = damage;

}
Bullet.prototype = Object.create(Phaser.Sprite.prototype);

Bullet.prototype.update = function() {

  //Check if dead
  if(!this.alive)
    split.destroySprite(this);

};

function bulletHitEnemy(bullet, enemy) {

  //Damage
  enemy.hp -= bullet.damage;

  //Enemy flash
  enemy.flash();
  game.time.events.add(20, enemy.stopFlash, enemy);

  //Knockback
  var xDiff = bullet.x - enemy.x;
  var yDiff = bullet.y - enemy.y;
  if(bullet.x - enemy.x <= 0)
    enemy.body.velocity.x += bullet.knockback*Math.abs(xDiff/enemy.width);
  else
    enemy.body.velocity.x -= bullet.knockback*Math.abs(xDiff/enemy.width);
  if(bullet.y - enemy.y <= 0)
    enemy.body.velocity.y += bullet.knockback*Math.abs(yDiff/enemy.height);
  else
    enemy.body.velocity.y -= bullet.knockback*Math.abs(yDiff/enemy.height);

  bullet.kill();

}

function bulletHitWall(bullet, wall) {

  bullet.kill();

}

function bulletHitCollectible(bullet, col) {

  bullet.kill();

}

function bulletHitDoor(bullet, door) {

  bullet.kill();

}
