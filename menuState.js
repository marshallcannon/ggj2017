function menuPreload() {

}

function menuCreate() {

  screen1.add.sprite(0, 0, 'splashLeft');
  screen2.add.sprite(0, 0, 'splashRight');
  screen1.add.bitmapText(screen1.width/2, 100, 'font', 'Shockwave', 40).anchor.setTo(0.5, 0.5);
  screen2.add.bitmapText(screen2.width/2-10, 100, 'font', 'Supernova', 40).anchor.setTo(0.5, 0.5);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;

  game.p1MenuText = split.makeText(screen1.width/4, 450, 'Player 1');
  game.p2MenuText = split.makeText((screen1.width/4)*3, 450, 'Player 2');
  split.setAlpha(game.p1MenuText, 0.5);
  split.setAlpha(game.p2MenuText, 0.5);
  split.centerAnchor(game.p1MenuText);
  split.centerAnchor(game.p2MenuText);

  //Game Variables
  game.countDownMax = 100;
  game.countDown = game.countDownMax;
  game.gameOver = false;
  game.level = 1;
  game.fuelGoal = 50;

}

function menuCreateRender() {

  screen1.camera.onFadeComplete.removeAll();
  screen1.camera.onFadeComplete.add(startGame, this);

}

function menuUpdate() {

  if(game.pad1.isDown(Phaser.Gamepad.XBOX360_A))
    split.setAlpha(game.p1MenuText, 1);
  else {
    split.setAlpha(game.p1MenuText, 0.5);
  }

  if(game.pad2.isDown(Phaser.Gamepad.XBOX360_A))
    split.setAlpha(game.p2MenuText, 1);
  else {
    split.setAlpha(game.p2MenuText, 0.5);
  }

  if(game.p1MenuText.alpha === 1 && game.p2MenuText.alpha === 1)
  {
    screen1.camera.fade(0x000000, 1000);
    screen2.camera.fade(0x000000, 1000);
  }

  //Start game if both screens are ready
  if(screen1.state.current === 'game' && screen2.state.current === 'game')
  {
    game.state.start('game');
  }

}

function menuUpdateRender() {

}

function startGame() {

  screen1.state.start('game');
  screen2.state.start('game');
  game.sounds.select.play();

}
