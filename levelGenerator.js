var lvlGen = {

  generateLevel: function() {

    var randomLayoutNumber = game.rnd.between(0, layouts.length-1);
    var randomLayout = layouts[randomLayoutNumber];

    this.rooms = this.chooseRooms(randomLayout);

    this.placeRooms(this.rooms);

    this.placeDoors(this.rooms);

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

          if(room > 1)
          {
            if(room === 1)
              spawnFunction = roomSpawns.diff1[game.rnd.between(0, roomSpawns.diff1.length-1)];
            if(room === 2)
              spawnFunction = roomSpawns.diff2[game.rnd.between(0, roomSpawns.diff2.length-1)];
            if(room === 3)
              spawnFunction = roomSpawns.diff3[game.rnd.between(0, roomSpawns.diff3.length-1)];
            if(room === 4)
              spawnFunction = roomSpawns.diff4[game.rnd.between(0, roomSpawns.diff4.length-1)];
          }

          roomList.push(new Room(x, y, startRoom, up, right, down, left, spawnFunction));
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

  placeDoors: function(roomList) {

    //Place doors based on layout

  },

  roomSpawns: function(roomList) {

    //Spawn enemies and pickups in rooms

  }

};
