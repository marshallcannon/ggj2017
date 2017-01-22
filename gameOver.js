function gameOverPreload() {

}

function gameOverCreate() {

  console.log('game over');

  if(this.game.screenNumber === 0)
  {

    game.p1GameOverText = screen1.add.bitmapText(screen1.width/2, 450, 'font', 'Try Again?');
    game.p1GameOverText.anchor.setTo(0.5, 0.5);
    game.p1GameOverText.tint = 0xFF0000;
    game.p1GameOverText.alpha = 0.5;
    game.p2GameOverText = screen2.add.bitmapText(screen1.width/2, 450, 'font', 'Try Again?');
    game.p2GameOverText.anchor.setTo(0.5, 0.5);
    game.p2GameOverText.tint = 0xFF0000;
    game.p2GameOverText.alpha = 0.5;

  }
  else {

    //Just Screen 1
    if(this.game.screenNumber === 1)
    {

    }
    //Just Screen 2
    else {

    }

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
      if(screen1.state.current === 'gameOver')
        screen1.state.start('menu');
      if(screen2.state.current === 'gameOver')
        screen2.state.start('menu');
    }
    if(screen1.state.current === 'menu' && screen2.state.current === 'menu')
      game.state.start('menu');

  }

}
