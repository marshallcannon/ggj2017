function loadAssets() {

  this.load.spritesheet('player1', 'assets/images/AnimSpaceManRun_00.png', 64, 64);
  this.load.spritesheet('player2', 'assets/images/AnimSpaceManRun_01.png', 64, 64);

  this.load.spritesheet('bg', 'assets/images/BGSheet.png', 540, 540);
  this.load.image('fog', 'assets/images/fow.png');

  this.load.image('bullet', 'assets/images/bullet.png');

  this.load.image('enemy', 'assets/images/enemy.png');
  this.load.spritesheet('ghost', 'assets/images/mew.png', 128, 128);

  this.load.image('gas', 'assets/images/gas.png');

  this.load.spritesheet('topDoor', 'assets/images/topDoor.png', 128, 128);
  this.load.spritesheet('sideDoor', 'assets/images/sideDoor.png', 128, 128);

  //Load Audio
  this.load.audio('doorSound', 'assets/audio/door.ogg');

}

function loadCreate() {

  this.game.screenNumber = 0;

  this.game.state.add('game', gameState);

  this.ready = false;

}

function screen1Create() {

  this.game.screenNumber = 1;

  this.game.state.add('game', gameStateRender1);

  this.ready = false;

}

function screen2Create() {

  this.game.screenNumber = 2;

  this.game.state.add('game', gameStateRender2);

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
        this.game.state.start('game');
      }
    }
    else {
      this.game.state.start('game');
      screensStarted++;
    }

  }

}
