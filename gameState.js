function gamePreload() {

}

function gameCreate() {

  //Room width and height
  game.roomWidth = 960;
  game.roomHeight = 540;

  //Phaser Systems
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;

  //Groups
  game.backgroundGroup = split.makeGroup();
  game.doorGroup = split.makeGroup();
  game.enemyGroup = split.makeGroup();
  game.playerGroup = split.makeGroup();
  game.bulletGroup = split.makeGroup();

  //Create Level
  game.roomList = lvlGen.generateLevel();
  console.log(game.roomList);

  game.roomList.forEach(function(room) {
    if(room.startRoom)
    {
      game.startX = room.x;
      game.startY = room.y;
    }
  });

  //Players
  game.player1 = new Player(game.startX*game.roomWidth+(game.roomWidth/2) - 100, game.startY*game.roomHeight+(game.roomHeight/2), 'player1', game.pad1);
  game.player2 = new Player(game.startX*game.roomWidth+(game.roomWidth/2) + 100, game.startY*game.roomHeight+(game.roomHeight/2), 'player2', game.pad2);
  setBounds(960*4, 540*4);
  startCameras(game.player1, game.player2);

  //Enemy
  new Enemy(600, 250, 'enemy', 50, 100, 5, 300);



}

function gameUpdate() {

  game.physics.arcade.overlap(game.bulletGroup, game.enemyGroup, bulletHitEnemy);

}

function setBounds(width, height) {

  game.world.setBounds(0, 0, width, height);
  screen1.world.setBounds(0, 0, width, height);
  screen2.world.setBounds(0, 0, width, height);

}

function startCameras(p1, p2) {

  screen1.playerSprite = p1.renderChildren[0];
  screen1.camera.follow(screen1.playerSprite);

  screen2.playerSprite = p2.renderChildren[1];
  screen2.camera.follow(screen2.playerSprite);

}

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

  split.destroySprite(bullet);

}
