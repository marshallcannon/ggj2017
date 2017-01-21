var split = {

  makeSprite: function(x, y, image, groups) {

    var sprite = game.add.sprite(x, y, image);
    var spriteRender1 = screen1.add.sprite(x, y, image);
    var spriteRender2 = screen2.add.sprite(x, y, image);
    sprite.renderChildren = [spriteRender1, spriteRender2];
    spriteRender1.parent = sprite;
    spriteRender2.parent = sprite;

    if(groups)
    {
      groups[0].add(sprite);
      groups[1].add(spriteRender1);
      groups[2].add(spriteRender2);
    }

    return sprite;

  },

  destroySprite: function(sprite) {

    sprite.renderChildren[0].destroy();
    sprite.renderChildren[1].destroy();
    sprite.destroy();

  }

};
