var layouts = [

  //Layout 1
  [
    [0,2,2,2],
    [2,1,0,2],
    [2,2,2,2],
    [0,0,2,0]
  ],

];

var roomSpawns = {

  //Start Rooms
  diff1: [

  ],

  //Easy Rooms
  diff2: [

    function() {
      spawn.resource();
      spawn.enemy();
    },
    function() {
      spawn.enemy();
      spawn.enemy();
    }

  ],

  //Medium Rooms
  diff3: [

  ],

  //Hard Rooms
  diff4: [

  ]

};

var spawner = {

  resource: function() {

  },

  enemy: function() {

  }

};
