function loadAssets() {

  this.load.image('player1', 'assets/images/SpaceMan_00.png');
  this.load.image('player2', 'assets/images/SpaceMan_01.png');

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
