function shipPreload() {

}

function shipCreate() {

  if(this.game.screenNumber === 0)
  {

    //Game Variables
    game.fuelGoal += 15;
    game.level++;
    game.countDown = game.countDownMax;

    screen1.camera.onFadeComplete.removeAll();
    screen1.camera.onFadeComplete.add(startNextLevel, this);

    screen1.camera.flash(0xFFFFFF, 500);
    screen2.camera.flash(0xFFFFFF, 500);

    screen1.victoryBackground = screen1.add.tileSprite(0, 0, 480, 540, 'stars');
    screen2.victoryBackground = screen2.add.tileSprite(0, 0, 480, 540, 'stars');

    game.victoryText = split.makeText(screen1.width/2, 50, 'Victory', 40);
    split.centerAnchor(game.victoryText);

    var smallShip = split.makeSprite(screen1.width/2, screen1.height/2+32, 'smallShip');
    split.centerAnchor(smallShip);
    split.addAnimation(smallShip, 'fly', [0, 1, 2], 10, true);
    split.playAnimation(smallShip, 'fly');
    game.add.tween(smallShip).to({y: screen1.height/2-32}, 1000, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

    game.p1ShipText = screen1.add.bitmapText(screen1.width/2, 450, 'font', 'Start Level ' + game.level);
    game.p1ShipText.anchor.setTo(0.5, 0.5);
    game.p1ShipText.alpha = 0.5;
    game.p2ShipText = screen2.add.bitmapText(screen1.width/2, 450, 'font', 'Start Level ' + game.level);
    game.p2ShipText.anchor.setTo(0.5, 0.5);
    game.p2ShipText.alpha = 0.5;

  }

}

function shipUpdate() {

  if(screen1.victoryBackground && screen2.victoryBackground)
  {
    if(this.game.screenNumber === 1 || this.game.screenNumber === 2)
    {
      screen1.victoryBackground.tilePosition.x--;
      screen2.victoryBackground.tilePosition.x--;
    }
  }

  if(this.game.screenNumber === 0)
  {

    if(game.pad1.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p1ShipText.alpha = 1;
    }
    else
    {
      game.p1ShipText.alpha = 0.5;
    }

    if(game.pad2.isDown(Phaser.Gamepad.XBOX360_A))
    {
      game.p2ShipText.alpha = 1;
    }
    else
    {
      game.p2ShipText.alpha = 0.5;
    }

    //If both buttons pressed
    if(game.p1ShipText.alpha === 1 && game.p2ShipText.alpha === 1)
    {
      screen1.camera.fade(0x000000, 500);
      screen2.camera.fade(0x000000, 500);
    }
    if(screen1.state.current === 'game' && screen2.state.current === 'game')
    {
      game.state.start('game');
    }

  }

  else {
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

}

function startNextLevel() {

  screen1.state.start('game');
  screen2.state.start('game');

}
