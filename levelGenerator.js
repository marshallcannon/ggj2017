var lvlGen = {

  generateLevel: function() {

    var randomLayoutNumber = game.rnd.between(0, layouts.length-1);
    this.layout = layouts[randomLayoutNumber];

    this.roomMap = [];
    for(var i = 0; i < this.layout.length; i++)
    {
      this.roomMap[i] = [];
      for(var j = 0; j < this.layout[0].length; j++)
      {
        this.roomMap[i][j] = 0;
      }
    }

    game.levelWidth = this.layout[0].length;
    game.levelHeight = this.layout.length;

    this.rooms = this.chooseRooms(this.layout);

    this.placeRooms(this.rooms);

    this.placeWalls(this.rooms);

    this.placeDoors(this.rooms, this.roomMap);

    this.roomSpawns(this.rooms);

    return this.rooms;

  },

  chooseRooms: function(roomLayout) {

    var roomList = [];

    for(var i = 0; i < roomLayout.length; i++)
    {
      for(var j = 0; j < roomLayout[i].length; j++)
      {
        var startRoom = false;
        var x = 0;
        var y = 0;
        var up = false;
        var right = false;
        var down = false;
        var left = false;
        var spawnFunction = null;

        var room = roomLayout[i][j];
        x = j;
        y = i;
        if(room > 0)
        {
          if(room === 1)
            startRoom = true;
          if(i > 0)
          {
            if(roomLayout[i-1][j] > 0)
              up = true;
          }
          if(j < roomLayout[i].length-1)
          {
            if(roomLayout[i][j+1] > 0)
              right = true;
          }
          if(i < roomLayout.length-1)
          {
            if(roomLayout[i+1][j] > 0)
              down = true;
          }
          if(j > 0)
          {
            if(roomLayout[i][j-1] > 0)
              left = true;
          }

          if(room === 1)
            spawnFunction = roomSpawns.diff1[game.rnd.between(0, roomSpawns.diff1.length-1)];
          if(room === 2)
            spawnFunction = roomSpawns.diff2[game.rnd.between(0, roomSpawns.diff2.length-1)];
          if(room === 3)
            spawnFunction = roomSpawns.diff3[game.rnd.between(0, roomSpawns.diff3.length-1)];
          if(room === 4)
            spawnFunction = roomSpawns.diff4[game.rnd.between(0, roomSpawns.diff4.length-1)];

          var newRoom = new Room(x, y, startRoom, up, right, down, left, spawnFunction);

          roomList.push(newRoom);
          this.roomMap[i][j] = newRoom;
        }
      }
    }

    return roomList;

  },

  placeRooms: function(roomList) {

    for(var i = 0; i < roomList.length; i++)
    {
      var room = roomList[i];
      var frame = 0;
      room.image = split.makeSprite(room.x*game.roomWidth, room.y*game.roomHeight, 'bg', game.backgroundGroup);
      if(room.left && !room.up && !room.right && !room.down)
        frame = 0;
      else if(!room.left && room.up && !room.right && !room.down)
        frame = 1;
      else if(!room.left && !room.up && room.right && !room.down)
        frame = 2;
      else if(!room.left && !room.up && !room.right && room.down)
        frame = 3;
      else if(room.left && room.up && !room.right && !room.down)
        frame = 4;
      else if(room.left && !room.up && room.right && !room.down)
        frame = 5;
      else if(room.left && !room.up && !room.right && room.down)
        frame = 6;
      else if(!room.left && room.up && room.right && !room.down)
        frame = 7;
      else if(!room.left && room.up && !room.right && room.down)
        frame = 8;
      else if(!room.left && !room.up && room.right && room.down)
        frame = 9;
      else if(!room.left && room.up && room.right && room.down)
        frame = 10;
      else if(room.left && !room.up && room.right && room.down)
        frame = 11;
      else if(room.left && room.up && !room.right && room.down)
        frame = 12;
      else if(room.left && room.up && room.right && !room.down)
        frame = 13;
      else if(room.left && room.up && room.right && room.down)
        frame = 14;

      room.image.frame = frame;
      room.image.renderChildren[0].frame = frame;
      room.image.renderChildren[1].frame = frame;

    }

  },

  placeWalls: function(roomList) {

    for(var i = 0; i < roomList.length; i++)
    {

      var room = roomList[i];
      var baseX = room.x*game.roomWidth;
      var baseY = room.y*game.roomHeight;

      switch(room.image.frame)
      {
        case 0:
          bbPresets.top(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 1:
          //Top
          bbPresets.topSplit(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 2:
          bbPresets.top(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 3:
          bbPresets.top(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 4:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 5:
          bbPresets.top(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 6:
          bbPresets.top(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 7:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 8:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 9:
          bbPresets.top(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 10:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.left(baseX, baseY);
          break;
        case 11:
          bbPresets.top(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 12:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.right(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 13:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottom(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
        case 14:
          bbPresets.topSplit(baseX, baseY);
          bbPresets.rightSplit(baseX, baseY);
          bbPresets.bottomSplit(baseX, baseY);
          bbPresets.leftSplit(baseX, baseY);
          break;
      }

    }

  },

  placeDoors: function(roomList, layout) {

    for(var i = 0; i < roomList.length; i++)
    {

      var room = roomList[i];

      if(room.down)
      {
        new Door(room.x*game.roomWidth+270, room.y*game.roomHeight+576, 0, room, layout[room.y+1][room.x]);
      }
      if(room.right)
      {
        new Door(room.x*game.roomWidth+542, room.y*game.roomHeight+271, 1, room, layout[room.y][room.x+1]);
      }

    }

  },

  roomSpawns: function(roomList) {

    for(var i = 0; i < roomList.length; i++)
    {

      var room = roomList[i];

      if(room.spawn)
      {
        room.spawn(room);
      }

    }

  }

};

var bbPresets = {

  top: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY, 540, 71));
  },

  topSplit: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY, 240, 72));
    game.boundingBoxGroup.add(new BB(baseX+304, baseY, 236, 72));
  },

  right: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX+540-37, baseY, 37, 540));
  },

  rightSplit: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX+504, baseY, 36, 236));
    game.boundingBoxGroup.add(new BB(baseX+504, baseY+308, 36, 232));
  },

  bottom: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY+532, 540, 9));
  },

  bottomSplit: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY+532, 236, 8));
    game.boundingBoxGroup.add(new BB(baseX+304, baseY+532, 236, 8));
  },

  left: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY, 36, 540));
  },

  leftSplit: function(baseX, baseY) {
    game.boundingBoxGroup.add(new BB(baseX, baseY, 36, 236));
    game.boundingBoxGroup.add(new BB(baseX, baseY+308, 36, 233));
  }

};
