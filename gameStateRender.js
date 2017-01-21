function gamePreloadRender() {

}

function gameCreateRender() {

  if(this.game.screenNumber === 1)
  {
    this.stage.backgroundColor = 0xFF0000;
    var testSprite = this.add.sprite(300, 300, 'player1');
  }
  else if(this.game.screenNumber === 2)
  {
    this.stage.backgroundColor = 0x0000FF;
    var testSprite2 = this.add.sprite(400, 400, 'player2');
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

      });
    }
    //Update sprites without groups
    else {
      if(element.parentSprite)
      {
        element.x = element.parentSprite.x;
        element.y = element.parentSprite.y;
      }
    }

  });

}
