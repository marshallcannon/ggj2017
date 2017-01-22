function shipPreload() {

}

function shipCreate() {

  if(this.game.screenNumber === 0)
  {

    //Game Variables
    game.fuelGoal += 15;
    game.level++;
    game.countDown = game.countDownMax;

    screen1.camera.onFadeComplete.removeAll();
    screen1.camera.onFadeComplete.add(startNextLevel, this);

    screen1.camera.flash(0xFFFFFF, 500);
    screen2.camera.flash(0xFFFFFF, 500);

    game.victoryText = split.makeText(screen1.width/2, 50, 'Victory', 40);
    split.centerAnchor(game.victoryText);
    // game.finalScoreText = split.makeText(screen1.width/2, 85, 'Level ' + game.level, 24);
    // split.centerAnchor(game.finalScoreText);

    game.p1ShipText = screen1.add.bitmapText(screen1.width/2, 450, 'font', 'Start Level ' + game.level);
    game.p1ShipText.anchor.setTo(0.5, 0.5);
    game.p1ShipText.alpha = 0.5;
    game.p2ShipText = screen2.add.bitmapText(screen1.width/2, 450, 'font', 'Start Level ' + game.level);
    game.p2ShipText.anchor.setTo(0.5, 0.5);
    game.p2ShipText.alpha = 0.5;

  }

}

function shipUpdate() {

  if(this.game.screenNumber === 0)
  {

    if(game.pad1.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p1ShipText.alpha = 1;
    }
    else
    {
      game.p1ShipText.alpha = 0.5;
    }

    if(game.pad2.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p2ShipText.alpha = 1;
    }
    else
    {
      game.p2ShipText.alpha = 0.5;
    }

    //If both buttons pressed
    if(game.p1ShipText.alpha === 1 && game.p2ShipText.alpha === 1)
    {
      screen1.camera.fade(0x000000, 500);
      screen2.camera.fade(0x000000, 500);
    }
    if(screen1.state.current === 'game' && screen2.state.current === 'game')
    {
      game.state.start('game');
    }

  }

}

function startNextLevel() {

  console.log('starting');
  screen1.state.start('game');
  screen2.state.start('game');

}
