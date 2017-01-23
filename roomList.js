var layouts = [

  //Level 1
  [
  [0,1,0,0,2,2,0,2,2,0],
  [0,2,0,2,2,0,2,2,0,3],
  [2,3,0,2,0,0,2,2,0,2],
  [2,2,2,3,2,2,0,2,0,2],
  [0,2,2,0,2,0,2,3,0,2],
  [0,0,2,2,2,0,2,2,0,2],
  [0,0,0,2,2,2,2,0,0,2],
  [0,2,2,2,3,2,2,2,2,2],
  [0,0,0,0,2,2,2,2,0,2],
  [3,2,2,2,2,0,0,2,2,2],
  ],

  [
  [0,0,0,2,0,0,1,0,0,0],
  [0,3,0,2,2,2,2,2,2,0],
  [2,2,2,0,0,0,2,0,2,0],
  [0,0,2,2,2,0,2,0,2,0],
  [0,0,2,2,2,2,2,2,2,0],
  [2,2,2,0,3,0,2,0,0,0],
  [0,0,0,0,2,0,2,3,3,2],
  [0,2,3,3,2,0,2,0,0,0],
  [0,0,2,0,0,0,3,2,2,0],
  [0,0,2,2,0,2,3,0,0,0],
  ],

  [
  [0,0,0,0,0,0,0,2,0,1],
  [0,2,2,2,2,3,2,2,2,2],
  [2,2,0,0,0,2,0,0,0,0],
  [2,0,2,2,2,2,0,0,0,0],
  [2,2,2,0,0,2,0,0,0,0],
  [0,0,0,0,0,2,0,0,0,3],
  [0,0,2,2,3,2,0,0,0,2],
  [0,0,2,0,0,2,2,0,0,3],
  [0,2,2,2,2,0,2,2,0,2],
  [3,2,0,0,2,0,0,2,2,2],
  ],

  //Level 2

  [[0,1,0,0,2,3,2,0,3,0],
  [0,2,3,3,0,0,3,0,3,0],
  [0,0,0,2,2,3,2,0,2,0],
  [0,0,0,2,0,0,0,0,2,0],
  [0,2,3,2,2,3,2,2,3,0],
  [0,2,0,0,0,2,3,0,2,0],
  [0,2,0,0,3,2,3,0,3,0],
  [0,3,0,0,0,2,2,0,3,2],
  [0,2,0,0,0,0,3,0,0,3],
  [0,3,3,3,3,2,2,0,0,3],],

  [[0,3,0,3,0,0,0,1,0,0],
  [0,2,2,2,2,3,2,3,0,0],
  [0,0,0,3,0,3,0,0,0,0],
  [3,2,0,2,0,3,2,3,2,0],
  [0,3,2,3,0,0,0,0,2,3],
  [0,0,0,2,0,0,0,0,0,2],
  [0,0,0,3,2,3,2,3,0,0],
  [3,3,2,2,0,0,0,2,0,0],
  [2,0,0,0,0,0,0,3,0,0],
  [3,2,2,3,2,2,3,2,2,3],],

  [[2,3,0,0,1,0,0,0,0,3],
  [0,2,3,2,2,3,2,2,3,2],
  [0,2,0,0,0,2,0,0,0,2],
  [0,2,3,2,2,3,0,0,2,2],
  [0,2,0,0,0,0,3,2,2,0],
  [3,2,2,3,0,2,0,2,2,0],
  [0,3,0,2,2,3,0,0,0,0],
  [0,3,0,2,0,0,3,2,3,0],
  [0,3,0,2,2,0,2,0,2,0],
  [0,3,2,0,3,2,2,0,0,0],],

  //Level 3
  [[0,0,1,0,0,3,0,0,3,0],
  [0,0,2,0,3,3,4,2,3,0],
  [0,0,3,3,3,3,0,0,3,0],
  [0,0,3,4,0,3,0,0,3,0],
  [4,2,0,0,0,0,3,0,3,3],
  [2,3,3,3,4,2,3,3,3,0],
  [0,3,0,0,3,3,2,0,0,0],
  [0,3,0,0,3,0,3,0,0,0],
  [0,3,0,0,3,0,3,0,0,0],
  [0,2,4,3,3,0,3,3,4,0],],

  [[0,3,0,1,0,0,0,0,0,3],
  [0,3,3,3,3,3,4,2,3,3],
  [0,0,0,0,0,3,0,3,0,0],
  [0,0,0,0,0,3,0,3,3,3],
  [0,4,3,3,3,3,0,4,0,0],
  [0,2,0,3,0,0,0,3,0,0],
  [0,2,0,3,2,0,0,3,3,0],
  [0,0,0,0,3,0,0,0,3,2],
  [0,3,3,4,3,0,0,0,0,3],
  [0,2,0,0,0,0,0,0,0,0],],

  [[2,3,3,3,3,3,0,0,0,1],
  [2,0,3,0,0,3,3,2,2,3],
  [3,3,2,0,3,0,3,3,0,2],
  [0,0,2,3,3,0,4,0,3,4],
  [0,0,3,0,0,0,3,0,0,3],
  [0,2,3,0,0,0,4,0,0,3],
  [0,0,3,3,3,2,3,0,0,3],
  [0,0,3,0,0,0,0,0,0,2],
  [3,2,3,2,0,0,0,0,0,4],
  [2,0,0,3,0,0,0,0,0,0],],

  //Level 4
  [[0,3,4,0,1,0,4,0,4,0],
  [0,0,3,3,3,3,3,0,3,3],
  [0,0,0,0,0,0,4,4,3,0],
  [0,3,3,3,3,3,4,3,3,4],
  [0,3,0,0,0,0,0,0,0,3],
  [4,3,3,3,3,3,3,3,4,3],
  [0,3,0,0,4,0,0,0,0,0],
  [0,0,4,0,3,3,0,4,0,0],
  [0,3,3,4,3,4,0,3,0,3],
  [0,3,0,0,0,3,3,3,3,4],],

  [[3,0,1,0,0,3,0,0,3,3],
  [3,4,3,3,4,4,3,3,3,3],
  [0,0,0,4,0,4,0,0,0,4],
  [0,3,4,3,0,3,3,4,0,3],
  [0,3,4,0,0,0,4,0,0,3],
  [0,0,3,4,0,0,0,0,0,3],
  [3,3,0,4,4,3,4,4,3,4],
  [4,0,0,3,0,0,3,0,0,0],
  [3,0,0,4,0,0,3,3,3,0],
  [3,4,4,3,0,0,3,0,3,0],],

  [[3,4,3,4,4,3,0,1,0,0],
  [0,3,0,0,0,4,0,3,0,0],
  [0,3,3,0,0,3,0,4,0,0],
  [0,0,4,4,0,4,4,3,4,3],
  [0,0,3,0,0,0,0,0,0,3],
  [0,4,3,0,0,0,0,0,0,3],
  [4,0,4,3,0,0,0,4,3,3],
  [4,0,0,4,3,3,0,4,0,4],
  [3,3,4,4,0,3,0,3,0,0],
  [4,0,0,3,0,3,4,0,0,0],],

  //Level 5
  [[0,0,1,0,0,0,0,0,4,0],
  [4,4,4,4,4,4,4,4,4,0],
  [4,0,4,4,0,0,0,0,4,0],
  [0,0,0,4,0,4,4,4,4,0],
  [0,0,0,4,4,4,0,0,4,0],
  [0,4,4,4,0,0,4,4,4,0],
  [0,4,0,0,0,0,0,0,4,4],
  [4,4,4,0,0,0,0,4,4,0],
  [0,0,4,4,4,4,0,0,4,0],
  [0,0,0,4,0,4,4,4,4,4],],

  [[0,0,4,4,4,0,0,1,0,0],
  [0,4,4,0,4,4,0,4,4,4],
  [4,0,4,0,0,4,0,4,0,4],
  [4,4,4,4,0,4,0,4,0,4],
  [0,0,4,4,0,4,4,4,0,4],
  [0,0,4,0,0,0,0,0,4,4],
  [0,0,4,0,0,0,0,0,0,4],
  [0,0,4,0,0,0,4,4,4,4],
  [0,0,4,4,0,0,4,0,0,0],
  [0,0,0,0,4,4,4,0,0,0],],

  [[0,0,4,0,0,1,0,0,4,0],
  [0,4,4,4,4,4,4,4,4,4],
  [0,0,4,0,0,4,0,0,4,0],
  [0,0,4,0,0,4,0,0,4,0],
  [4,4,4,0,0,0,0,4,0,0],
  [0,4,4,4,4,4,4,4,0,0],
  [0,0,4,0,4,0,4,0,0,0],
  [4,4,4,0,4,0,4,4,4,4],
  [0,0,4,0,4,0,0,0,0,0],
  [0,0,4,4,4,0,0,0,0,0],],

];

var roomSpawns = {

  //Start Rooms
  diff1: [

  ],

  //Easy Rooms
  diff2: [

    function(room) {
spawn.resource(room, 178, 354, 'gas', 5, .6);
spawn.resource(room, 200, 311, 'gas', 10, 1.2);
spawn.enemy(room, 200, 365, 'spiderbot', 1);
},

function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
spawn.resource(room, 221, 300, 'gas', 5, .6);
spawn.resource(room, 298, 400, 'gas', 5, .6);
},
function(room) {
spawn.resource(room, 200, 111, 'gas', 15, 2);
spawn.enemy(room, 300, 250, 'ghost', 1);
},
function(room) {
spawn.enemy(room, 332, 321, 'ghost', 1);
},
function(room) {
spawn.enemy(room, 250, 257, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 154, 243, 'gas', 10, 1.2);
spawn.resource(room, 265, 309, 'gas', 10, 1.2);
},
function(room) {
spawn.resource(room, 100, 250, 'gas', 5, .6);
spawn.resource(room, 276, 300, 'gas', 10, 1.2);
spawn.enemy(room, 123, 335, 'ghost', 1);
},
function(room) {
spawn.resource(room, 100, 300, 'gas', 5, .6);
spawn.resource(room, 220, 300, 'gas', 10, 1.2);
spawn.enemy(room, 275, 378, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 143, 157, 'gas', 10, 1.2);
spawn.enemy(room, 254, 223, 'ghost', 1);
},
function(room) {
spawn.resource(room, 165, 333, 'gas', 10, 1.2);
spawn.resource(room, 389, 112, 'gas', 10, 1.2);
spawn.enemy(room, 100, 398, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
spawn.resource(room, 221, 300, 'gas', 5, .6);
spawn.resource(room, 298, 400, 'gas', 5, .6);
spawn.enemy(room, 250, 250, 'ghost', 1);
},
function(room) {
spawn.resource(room, 300, 120, 'gas', 5, .6);
spawn.resource(room, 312, 200, 'gas', 15, 2);
spawn.enemy(room, 127, 400, 'spiderbot', 1);
},

  ],

  //Medium Rooms
  diff3: [

    function(room) {
spawn.resource(room, 178, 354, 'gas', 5, .6);
spawn.resource(room, 200, 311, 'gas', 10, 1.2);
spawn.enemy(room, 200, 365, 'spiderbot', 2);
spawn.enemy(room, 200, 365, 'spiderbot', 1);
},

function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
spawn.resource(room, 221, 300, 'gas', 5, .6);
},
function(room) {
spawn.resource(room, 200, 111, 'gas', 10, 1.2);
spawn.enemy(room, 300, 150, 'ghost', 1);
spawn.enemy(room, 300, 200, 'ghost', 1);
},
function(room) {
spawn.enemy(room, 332, 321, 'ghost', 2);
},
function(room) {
spawn.enemy(room, 250, 257, 'spiderbot', 2);
},
function(room) {
spawn.resource(room, 154, 243, 'gas', 5, .6);
spawn.resource(room, 265, 309, 'gas', 10, 1.2);
spawn.enemy(room, 300, 320, 'spiderbot', 1);
spawn.enemy(room, 200, 365, 'ghost', 2);
},
function(room) {
spawn.resource(room, 100, 250, 'gas', 5, .6);
},
function(room) {
spawn.resource(room, 220, 300, 'gas', 10, 1.2);
spawn.enemy(room, 275, 378, 'spiderbot', 1);
spawn.enemy(room, 123, 221, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 143, 157, 'gas', 10, 1.2);
spawn.enemy(room, 254, 123, 'ghost', 2);
},
function(room) {
spawn.resource(room, 165, 333, 'gas', 5, 1.2);
spawn.resource(room, 389, 112, 'gas', 5, 1.2);
spawn.enemy(room, 100, 398, 'spiderbot', 1);
spawn.enemy(room, 229, 365, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
spawn.resource(room, 221, 300, 'gas', 5, .6);
spawn.resource(room, 298, 400, 'gas', 5, .6);
spawn.enemy(room, 250, 200, 'ghost', 2);
spawn.enemy(room, 111, 330, 'spiderbot', 1);
spawn.enemy(room, 200, 400, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 312, 200, 'gas', 10, 1.2);
spawn.enemy(room, 127, 400, 'spiderbot', 2);
spawn.enemy(room, 230, 315, 'ghost', 1);
},

  ],

  //Hard Rooms
  diff4: [

    function(room) {
spawn.resource(room, 178, 354, 'gas', 5, .6);
spawn.resource(room, 200, 311, 'gas', 5, .6);
spawn.enemy(room, 200, 365, 'spiderbot', 2);
spawn.enemy(room, 200, 365, 'spiderbot', 3);
},

function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
},
function(room) {
spawn.resource(room, 200, 111, 'gas', 10, 1.2);
spawn.enemy(room, 340, 150, 'ghost', 2);
spawn.enemy(room, 300, 210, 'ghost', 2);
},
function(room) {
spawn.enemy(room, 332, 321, 'ghost', 3);
},
function(room) {
spawn.enemy(room, 250, 257, 'spiderbot', 3);
spawn.enemy(room, 279, 257, 'spiderbot', 1);
},
function(room) {
spawn.resource(room, 154, 243, 'gas', 5, .6);
spawn.resource(room, 265, 309, 'gas', 5, .6);
spawn.enemy(room, 300, 320, 'spiderbot', 3);
spawn.enemy(room, 200, 365, 'ghost', 2);
},
function(room) {
spawn.resource(room, 100, 123, 'gas', 15, 2);
spawn.enemy(room, 120, 257, 'spiderbot', 1);
spawn.enemy(room, 240, 257, 'spiderbot', 1);
spawn.enemy(room, 360, 257, 'spiderbot', 1);
spawn.enemy(room, 240, 367, 'spiderbot', 2);
},
function(room) {
spawn.resource(room, 220, 300, 'gas', 10, 1.2);
spawn.enemy(room, 275, 378, 'spiderbot', 3);
spawn.enemy(room, 123, 221, 'ghost', 1);
},
function(room) {
spawn.resource(room, 143, 157, 'gas', 10, 1.2);
spawn.enemy(room, 254, 123, 'ghost', 3);
spawn.enemy(room, 250, 257, 'spiderbot', 2);
},
function(room) {
spawn.resource(room, 165, 333, 'gas', 5, 1.2);
spawn.resource(room, 389, 112, 'gas', 5, 1.2);
spawn.enemy(room, 100, 398, 'spiderbot', 3);
spawn.enemy(room, 229, 365, 'spiderbot', 2);
},
function(room) {
spawn.resource(room, 134, 312, 'gas', 5, .6);
spawn.resource(room, 221, 300, 'gas', 5, .6);
spawn.resource(room, 298, 400, 'gas', 5, .6);
spawn.enemy(room, 250, 200, 'ghost', 2);
spawn.enemy(room, 111, 330, 'spiderbot', 2);
spawn.enemy(room, 200, 400, 'spiderbot', 3);
},
function(room) {
spawn.resource(room, 312, 200, 'gas', 10, 1.2);
spawn.enemy(room, 127, 400, 'spiderbot', 3);
spawn.enemy(room, 230, 315, 'ghost', 2);
},

  ]

};

var spawn = {

  resource: function(room, x, y, type, value, size) {

    var baseX = room.x*game.roomWidth;
    var baseY = room.y*game.roomHeight;

    if(typeof size === 'undefined')
      size = 1;

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

    if(type === 'spiderbot')
    {
      room.objects.push(new SpiderBot(baseX+x, baseY+y, level));
    }

  }

};
