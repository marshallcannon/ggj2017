//Check if all screens are done loading
var screensReady = 0;
var screensStarted = 0;

//State variables
var loadState = {preload: loadAssets, create: loadCreate, update: loadUpdate};
var loadStateRender1 = {preload: loadAssets, create: screen1Create, update: loadUpdate};
var loadStateRender2 = {preload: loadAssets, create: screen2Create, update: loadUpdate};

var menuState = {preload: menuPreload, create: menuCreate, update: menuUpdate};
var menuStateRender1 = {preload: menuPreload, create: menuCreateRender, update: menuUpdateRender};
var menuStateRender2 = {preload: menuPreload, create: menuCreateRender, update: menuUpdateRender};

var gameState = {preload: gamePreload, create: gameCreate, update: gameUpdate};
var gameStateRender1 = {preload: gamePreloadRender, create: gameCreateRender, update: gameUpdateRender};
var gameStateRender2 = {preload: gamePreloadRender, create: gameCreateRender, update: gameUpdateRender};

var shipState = {preload: shipPreload, create: shipCreate, update: shipUpdate};
var shipStateRender1 = {preload: shipPreload, create: shipCreate, update: shipUpdate};
var shipStateRender2 = {preload: shipPreload, create: shipCreate, update: shipUpdate};

var gameOverState = {preload: gameOverPreload, create: gameOverCreate, update: gameOverUpdate};
var gameOverStateRender1 = {preload: gameOverPreload, create: gameOverCreate, update: gameOverUpdate};
var gameOverStateRender2 = {preload: gameOverPreload, create: gameOverCreate, update: gameOverUpdate};

//Create Game
var game = new Phaser.Game(0, 0, Phaser.HEADLESS, '', loadState);
var screen1 = new Phaser.Game(480, 540, Phaser.AUTO, 'screen1', loadStateRender1);
var screen2 = new Phaser.Game(480, 540, Phaser.AUTO, 'screen2', loadStateRender2);
