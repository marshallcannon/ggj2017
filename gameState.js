function gamePreload() {

}

function gameCreate() {

  //Phaser Systems
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;

  //Groups
  game.playerGroup = split.makeGroup();

  //Sprites
  game.player = new Player(100, 100, 'player1', game.pad1);
  game.player = new Player(200, 100, 'player2', game.pad2);



}

function gameUpdate() {

}
