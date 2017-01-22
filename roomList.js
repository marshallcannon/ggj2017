var layouts = [

  //Layout 1
  [
    [0,0,0,2,0,0,0],
    [0,0,0,2,0,0,0],
    [0,0,2,2,2,0,0],
    [2,2,2,1,2,2,2],
    [0,0,2,2,2,0,0],
    [0,0,0,2,0,0,0],
    [0,0,0,2,0,0,0]
  ],

];

var roomSpawns = {

  //Start Rooms
  diff1: [

  ],

  //Easy Rooms
  diff2: [

    function(room) {
      spawn.resource(room, 100, 100, 'gas', 50);
      spawn.resource(room, 200, 200, 'gas', 50, 3);
      spawn.enemy(room, 200, 400, 'ghost', 1);
    },
    function(room) {
      spawn.resource(room, 300, 100, 'gas', 50);
      spawn.resource(room, 200, 200, 'gas', 50);
      spawn.enemy(room, 200, 400, 'ghost', 2);
    }

  ],

  //Medium Rooms
  diff3: [

  ],

  //Hard Rooms
  diff4: [

  ]

};

var spawn = {

  resource: function(room, x, y, type, value, size) {

    var baseX = room.x*game.roomWidth;
    var baseY = room.y*game.roomHeight;

    if(typeof size === 'undefined')
      size = 1;

    console.log(baseX, baseY);
    if(type === 'gas')
      room.objects.push(new Gas(baseX+x, baseY+y, value, size));

  },

  enemy: function(room, x, y, type, level) {

    var baseX = room.x*game.roomWidth;
    var baseY = room.y*game.roomHeight;

    if(type === 'ghost')
    {
      room.objects.push(new Ghost(baseX+x, baseY+y, level));
    }

  }

};
