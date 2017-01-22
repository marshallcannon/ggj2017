function gameOverPreload() {

}

function gameOverCreate() {

  if(this.game.screenNumber === 0)
  {

    screen1.camera.onFadeComplete.removeAll();
    screen1.camera.onFadeComplete.add(goToMenu, this);

    screen1.camera.flash(0xFFFFFF, 500);
    screen2.camera.flash(0xFFFFFF, 500);

    screen1.add.sprite(0, 0, 'failLeft');
    screen2.add.sprite(0, 0, 'failRight');

    game.gameOverText = split.makeText(screen1.width/2, 50, 'Game Over', 40);
    split.centerAnchor(game.gameOverText);
    game.finalScoreText = split.makeText(screen1.width/2, 90, 'Level ' + game.level, 24);
    split.centerAnchor(game.finalScoreText);

    game.p1GameOverText = screen1.add.bitmapText(screen1.width/2, 450, 'font', 'Try Again');
    game.p1GameOverText.anchor.setTo(0.5, 0.5);
    game.p1GameOverText.tint = 0xFF0000;
    game.p1GameOverText.alpha = 0.5;
    game.p2GameOverText = screen2.add.bitmapText(screen1.width/2, 450, 'font', 'Try Again');
    game.p2GameOverText.anchor.setTo(0.5, 0.5);
    game.p2GameOverText.tint = 0xFF0000;
    game.p2GameOverText.alpha = 0.5;

  }

}

function gameOverUpdate() {

  if(this.game.screenNumber === 0)
  {

    if(game.pad1.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p1GameOverText.alpha = 1;
    }
    else
    {
      game.p1GameOverText.alpha = 0.5;
    }

    if(game.pad2.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p2GameOverText.alpha = 1;
    }
    else
    {
      game.p2GameOverText.alpha = 0.5;
    }

    //If both buttons pressed
    if(game.p1GameOverText.alpha === 1 && game.p2GameOverText.alpha === 1)
    {
      screen1.camera.fade(0x000000, 500);
      screen2.camera.fade(0x000000, 500);
    }
    if(screen1.state.current === 'menu' && screen2.state.current === 'menu')
    {
      game.state.start('menu');
    }

  }

}

function goToMenu() {

  screen1.state.start('menu');
  screen2.state.start('menu');

}
