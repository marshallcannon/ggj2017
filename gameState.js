function gamePreload() {

}

function gameCreate() {

  //Room width and height
  game.roomWidth = 540;
  game.roomHeight = 540;

  //Phaser Systems
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //Game Variables
  game.fuelAmount = 0;
  game.victory = false;
  game.countDown = game.countDownMax;

  //Groups
  game.backgroundGroup = split.makeGroup();
  game.boundingBoxGroup = split.makeGroup();
  game.doorGroup = split.makeGroup();
  game.enemyGroup = split.makeGroup();
  game.playerGroup = split.makeGroup();
  game.pickupGroup = split.makeGroup();
  game.bulletGroup = split.makeGroup();
  game.progressBarGroup = split.makeGroup();
  game.fogGroup = split.makeGroup();
  game.hudGroup = split.makeGroup();

  //Create Sounds
  game.sounds = {};
  game.sounds.music = game.add.audio('music');
  game.sounds.warning = game.add.audio('warning');
  game.sounds.door = game.add.audio('doorSound');
  game.sounds.victory = game.add.audio('victory');
  game.sounds.failure = game.add.audio('failure');

  game.sounds.music.play();

  //Create Level
  game.levelWidth = 0;
  game.levelHeight = 0;
  game.roomList = lvlGen.generateLevel();

  game.roomList.forEach(function(room) {
    if(room.startRoom)
    {
      game.startRoom = room;
      game.startX = room.x;
      game.startY = room.y;
    }
  });
  game.startRoom.activate();

  //Players
  game.player1 = new Player(game.startX*game.roomWidth+(game.roomWidth/2) - 100, game.startY*game.roomHeight+(game.roomHeight/2), 'player1', game.pad1);
  game.player2 = new Player(game.startX*game.roomWidth+(game.roomWidth/2) + 100, game.startY*game.roomHeight+(game.roomHeight/2), 'player2', game.pad2);
  setBounds(game.levelWidth*960, game.levelHeight*540);
  startCameras(game.player1, game.player2);

  //Enemy
  new Ghost(game.player1.x, game.player1.y+540, 'ghost', 50, 100, 5, 300);

  //Gas
  new Gas(game.player1.x+15, game.player1.y+80);
  new Gas(game.player1.x+30, game.player1.y+120);
  new Gas(game.player1.x, game.player1.y+130);

  //Text
  game.countdownText = split.makeText(240, 50, game.countDown, 24 , game.hudGroup);
  split.tintSprite(game.countdownText, 0xFF0000);
  split.centerAnchor(game.countdownText);
  split.fixToCamera(game.countdownText);
  game.time.events.add(1000, tickDown, this);

  game.fuelText = split.makeText(420, 460, game.fuelAmount.toString(), 32, game.hudGroup);
  split.centerAnchor(game.fuelText);
  split.fixToCamera(game.fuelText);
  split.tintSprite(game.fuelText, 0xc400ff);

  game.fuelDivider = split.makeSprite(418, 488, 'divider', game.hudGroup);
  split.centerAnchor(game.fuelDivider);
  split.fixToCamera(game.fuelDivider);

  game.fuelGoalText = split.makeText(420, 510, game.fuelGoal.toString(), 32, game.hudGroup);
  split.centerAnchor(game.fuelGoalText);
  split.fixToCamera(game.fuelGoalText);
  split.tintSprite(game.fuelGoalText, 0xc400ff);

}

function gameUpdate() {

  //Collision
  game.physics.arcade.collide(game.player1, game.boundingBoxGroup);
  game.physics.arcade.collide(game.player2, game.boundingBoxGroup);
  game.physics.arcade.collide(game.player1, game.doorGroup);
  game.physics.arcade.collide(game.player2, game.doorGroup);
  game.physics.arcade.overlap(game.bulletGroup, game.enemyGroup, bulletHitEnemy);
  game.physics.arcade.overlap(game.bulletGroup, game.boundingBoxGroup, bulletHitWall);
  game.physics.arcade.overlap(game.bulletGroup, game.doorGroup, bulletHitDoor);

  //Update text
  split.updateText(game.fuelText, game.fuelAmount.toString());

  //Check Victory
  if(game.fuelAmount >= game.fuelGoal)
  {
      split.tintSprite(game.fuelText, 0xFFFFFF);
      split.tintSprite(game.fuelGoalText, 0xFFFFFF);

      if(!game.victory)
      {
        if(game.player1.x > game.startRoom.x*game.roomWidth && game.player1.x < game.startRoom.x*game.roomWidth + game.roomWidth &&
          game.player1.y > game.startRoom.y*game.roomHeight && game.player1.y < game.startRoom.y*game.roomHeight + game.roomHeight)
        {
          if(game.player2.x > game.startRoom.x*game.roomWidth && game.player2.x < game.startRoom.x*game.roomWidth + game.roomWidth &&
            game.player2.y > game.startRoom.y*game.roomHeight && game.player2.y < game.startRoom.y*game.roomHeight + game.roomHeight)
          {
            screen1.camera.onFadeComplete.removeAll();
            screen1.camera.onFadeComplete.add(victory, this);
            screen1.camera.fade(0xFFFFFF, 1000);
            screen2.camera.fade(0xFFFFFF, 1000);
            game.sounds.victory.play();
            game.sounds.music.fadeOut(500);
            game.sounds.warning.fadeOut(500);
            game.victory = true;
          }
        }
      }
  }

  //Check Defeat
  if(game.countDown < 0 && !game.gameOver && !game.victory)
  {
    screen1.camera.fade(0xFF0000, 800);
    screen2.camera.fade(0xFF0000, 800);
    game.time.events.removeAll();
    game.time.events.add(800, function(){screen1.state.start('gameOver');screen2.state.start('gameOver');}, this);
    game.sounds.failure.play();
    game.sounds.music.fadeOut(500);
    game.sounds.warning.fadeOut(500);
    split.updateText(game.countdownText, 'FAILURE');
    game.gameOver = true;
  }
  if(screen1.state.current === 'gameOver' && screen2.state.current === 'gameOver')
    game.state.start('gameOver');
  if(screen1.state.current === 'ship' && screen2.state.current === 'ship')
    game.state.start('ship');

}

function setBounds(width, height) {

  game.world.setBounds(0, 0, width, height);
  screen1.world.setBounds(0, 0, width, height);
  screen2.world.setBounds(0, 0, width, height);

}

function startCameras(p1, p2) {

  screen1.playerSprite = p1.renderChildren[0];
  screen1.camera.follow(screen1.playerSprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

  screen2.playerSprite = p2.renderChildren[1];
  screen2.camera.follow(screen2.playerSprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

}

function tickDown() {

  game.countDown--;
  split.updateText(game.countdownText, game.countDown);

  if(game.countDown === 24)
    game.sounds.warning.play();

  game.time.events.add(1000, tickDown, this);

}

function victory() {

  screen1.state.start('ship');
  screen2.state.start('ship');

}
