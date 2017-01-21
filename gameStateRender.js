function gamePreloadRender() {

  this.load.image('bg', 'assets/images/temp_background.png');
  this.load.image('player', 'assets/images/SpaceMan_00.png');

}

function gameCreateRender() {

}

function gameUpdateRender() {

  //Move all sprites
  this.world.forEach(function(sprite) {

    sprite.x = sprite.parent.x;
    sprite.y = sprite.parent.y;

  });

}
