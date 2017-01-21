function gamePreload() {

  this.load.image('player', 'assets/images/SpaceMan_00.png');

}

function gameCreate() {

  //Phaser Systems
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;
  console.log(game.input.gamepad);

  //Groups
  game.playerGroup = split.makeGroup();

  game.player = new Player(100, 100, 'player');


}

function gameUpdate() {

}
