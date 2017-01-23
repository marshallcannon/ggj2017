function loadAssets() {

  this.load.spritesheet('player1', 'assets/images/AnimSpaceManRun_00.png', 64, 64);
  this.load.spritesheet('player2', 'assets/images/AnimSpaceManRun_01.png', 64, 64);

  this.load.spritesheet('bg', 'assets/images/BGSheet.png', 540, 540);
  this.load.image('shipRoom', 'assets/images/shipRoom.png');
  this.load.image('fog', 'assets/images/fow.png');

  this.load.image('bullet', 'assets/images/bullet.png');

  this.load.image('enemy', 'assets/images/enemy.png');
  this.load.spritesheet('ghost', 'assets/images/mew.png', 128, 128);
  this.load.spritesheet('spiderbot', 'assets/images/spiderbot.png', 64, 64);

  this.load.spritesheet('gas', 'assets/images/gas.png', 64, 64);

  this.load.spritesheet('topDoor', 'assets/images/topDoor.png', 128, 128);
  this.load.spritesheet('sideDoor', 'assets/images/sideDoor.png', 128, 128);

  this.load.image('failLeft', 'assets/images/FailLeft.png');
  this.load.image('failRight', 'assets/images/FailRight.png');
  this.load.image('splashLeft', 'assets/images/SplashScreenLeft.png');
  this.load.image('splashRight', 'assets/images/SplashScreenRight.png');

  this.load.image('divider', 'assets/images/divider.png');

  //Load Audio
  this.load.audio('music', 'assets/audio/Level_Music.ogg');
  this.load.audio('warning', 'assets/audio/warning.ogg');
  this.load.audio('doorSound', 'assets/audio/door.ogg');
  this.load.audio('victory', 'assets/audio/victory.ogg');
  this.load.audio('failure', 'assets/audio/failure.ogg');

  //Load Font
  this.load.bitmapFont('font', 'assets/font/font.png', 'assets/font/font.fnt');

  //Pixel Scaling
  this.game.renderer.renderSession.roundPixels = true;
  Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
  game.stage.smoothed = false;

}

function loadCreate() {

  this.game.screenNumber = 0;

  this.game.state.add('menu', menuState);
  this.game.state.add('game', gameState);
  this.game.state.add('ship', shipState);
  this.game.state.add('gameOver', gameOverState);

  this.ready = false;

}

function screen1Create() {

  this.game.screenNumber = 1;

  this.game.state.add('menu', menuStateRender1);
  this.game.state.add('game', gameStateRender1);
  this.game.state.add('ship', shipStateRender1);
  this.game.state.add('gameOver', gameOverStateRender1);

  this.ready = false;

}

function screen2Create() {

  this.game.screenNumber = 2;

  this.game.state.add('menu', menuStateRender2);
  this.game.state.add('game', gameStateRender2);
  this.game.state.add('ship', shipStateRender2);
  this.game.state.add('gameOver', gameOverStateRender2);

  this.ready = false;

}


function loadUpdate() {

  if(!this.ready)
  {
    this.ready = true;
    screensReady++;
  }

  if(screensReady === 3)
  {
    if(this.game.screenNumber === 0)
    {
      if(screensStarted === 2)
      {
        this.game.state.start('menu');
      }
    }
    else {
      this.game.state.start('menu');
      screensStarted++;
    }

  }

}
