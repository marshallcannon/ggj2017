function gamePreloadRender() {

}

function gameCreateRender() {

  this.stage.backgroundColor = 0x0e0929;

  if(this.game.screenNumber === 1)
  {

  }
  else if(this.game.screenNumber === 2)
  {
    
  }

}

function gameUpdateRender() {

  //Reference to this instance of Phaser
  var screen = this.game;

  //Move all sprites
  this.world.forEach(function(element) {

    //Cycle through groups
    if(element.constructor === Phaser.Group)
    {

      element.forEach(function(sprite) {

        sprite.x = sprite.parentSprite.x;
        sprite.y = sprite.parentSprite.y;
        sprite.scale = sprite.parentSprite.scale;

      });
    }
    //Update sprites without groups
    else {
      if(element.parentSprite)
      {
        element.x = element.parentSprite.x;
        element.y = element.parentSprite.y;
        element.scale = element.parentSprite.scale;
      }
    }

  });

}
