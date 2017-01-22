var split = {

  makeSprite: function(x, y, image, group) {

    var sprite = game.add.sprite(x, y, image);
    var spriteRender1 = screen1.add.sprite(x, y, image);
    var spriteRender2 = screen2.add.sprite(x, y, image);
    sprite.renderChildren = [spriteRender1, spriteRender2];
    spriteRender1.parentSprite = sprite;
    spriteRender2.parentSprite = sprite;

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
    spriteRender1.parentSprite = sprite;
    spriteRender2.parentSprite = sprite;

    if(group)
    {
      group.renderChildren[0].add(spriteRender1);
      group.renderChildren[1].add(spriteRender2);
    }

  },

  destroySprite: function(sprite) {

    if(sprite.renderChildren[0])
      sprite.renderChildren[0].destroy();
    if(sprite.renderChildren[1])
      sprite.renderChildren[1].destroy();
    sprite.destroy();

  },

  makeGroup: function() {

    var group = game.add.group();
    var renderGroup1 = screen1.add.group();
    var renderGroup2 = screen2.add.group();

    group.renderChildren = [renderGroup1, renderGroup2];

    return group;

  },

  tintSprite: function(sprite, tint) {

    sprite.tint = tint;
    sprite.renderChildren[0].tint = tint;
    sprite.renderChildren[1].tint = tint;

  },

  centerAnchor: function(sprite) {

    sprite.anchor.setTo(0.5, 0.5);
    sprite.renderChildren[0].anchor.setTo(0.5, 0.5);
    sprite.renderChildren[1].anchor.setTo(0.5, 0.5);

  },

  addAnimation: function(sprite, name, frames, speed, looping) {

    var toReturn = sprite.animations.add(name, frames, speed, looping);
    sprite.renderChildren[0].animations.add(name, frames, speed, looping);
    sprite.renderChildren[1].animations.add(name, frames, speed, looping);

    return toReturn;

  },

  playAnimation: function(sprite, animation) {

    sprite.animations.play(animation);
    sprite.renderChildren[0].animations.play(animation);
    sprite.renderChildren[1].animations.play(animation);

  },

  setFrame: function(sprite, frame) {

    sprite.frame = frame;
    sprite.renderChildren[0].frame = frame;
    sprite.renderChildren[1].frame = frame;

  }

};
