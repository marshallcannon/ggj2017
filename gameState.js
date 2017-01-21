function gamePreload() {

  this.load.image('player', 'assets/images/SpaceMan_00.png');

}

function gameCreate() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.input.gamepad.start();
  game.pad1 = game.input.gamepad.pad1;
  game.pad2 = game.input.gamepad.pad2;

  game.player = split.makeSprite(0, 0, 'player');
  game.physics.enable(game.player, Phaser.Physics.ARCADE);


}

function gameUpdate() {

}
