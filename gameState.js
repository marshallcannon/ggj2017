function gamePreload() {

}

function gameCreate() {

  //Room width and height
  game.roomWidth = 540;
  game.roomHeight = 540;

  //Phaser Systems
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;

  //Groups
  game.backgroundGroup = split.makeGroup();
  game.boundingBoxGroup = split.makeGroup();
  game.doorGroup = split.makeGroup();
  game.enemyGroup = split.makeGroup();
  game.playerGroup = split.makeGroup();
  game.pickupGroup = split.makeGroup();
  game.bulletGroup = split.makeGroup();
  game.progressBarGroup = split.makeGroup();

  //Create Sounds
  game.sound = {};
  game.sound.door = game.add.audio('doorSound');

  //Create Level
  game.levelWidth = 0;
  game.levelHeight = 0;
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
  setBounds(game.levelWidth*960, game.levelHeight*540);
  startCameras(game.player1, game.player2);

  //Enemy
  new Enemy(1200, 250, 'enemy', 50, 100, 5, 300);

  //Gas
  new Gas(game.player1.x+15, game.player1.y+80);
  new Gas(game.player1.x+30, game.player1.y+120);
  new Gas(game.player1.x, game.player1.y+130);

}

function gameUpdate() {

  game.physics.arcade.collide(game.player1, game.boundingBoxGroup);
  game.physics.arcade.collide(game.player2, game.boundingBoxGroup);
  game.physics.arcade.collide(game.player1, game.doorGroup);
  game.physics.arcade.collide(game.player2, game.doorGroup);
  game.physics.arcade.overlap(game.bulletGroup, game.enemyGroup, bulletHitEnemy);
  game.physics.arcade.overlap(game.bulletGroup, game.boundingBoxGroup, bulletHitWall);
  game.physics.arcade.overlap(game.bulletGroup, game.pickupGroup, bulletHitCollectible);

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
