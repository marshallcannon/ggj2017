var split = {

  makeSprite: function(x, y, image, group) {

    var sprite = game.add.sprite(x, y, image);
    var spriteRender1 = screen1.add.sprite(x, y, image);
    var spriteRender2 = screen2.add.sprite(x, y, image);
    sprite.renderChildren = [spriteRender1, spriteRender2];
    spriteRender1.parent = sprite;
    spriteRender2.parent = sprite;

    if(group)
    {
      group.add(sprite);
      group.renderChildren[0].add(spriteRender1);
      group.renderChildren[1].add(spriteRender2);
    }

    return sprite;

  },

  customSpriteChildren: function(sprite, texture, group) {

    var spriteRender1 = screen1.add.sprite(sprite.x, sprite.y, texture);
    var spriteRender2 = screen2.add.sprite(sprite.x, sprite.y, texture);
    sprite.renderChildren = [spriteRender1, spriteRender2];
    spriteRender1.parent = sprite;
    spriteRender2.parent = sprite;
    console.log(sprite);

    if(group)
    {
      group.renderChildren[0].add(spriteRender1);
      group.renderChildren[1].add(spriteRender2);
    }

  },

  destroySprite: function(sprite) {

    sprite.renderChildren[0].destroy();
    sprite.renderChildren[1].destroy();
    sprite.destroy();

  },

  makeGroup: function() {

    var group = game.add.group();
    var renderGroup1 = screen1.add.group();
    var renderGroup2 = screen2.add.group();

    group.renderChildren = [renderGroup1, renderGroup2];

    return group;

  }

};
