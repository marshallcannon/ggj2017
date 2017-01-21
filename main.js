//State variables
var gameState = {preload: gamePreload, create: gameCreate, update: gameUpdate};
var gameStateRender = {preload: gamePreloadRender, create: gameCreateRender, update: gameUpdateRender};
var gameStateRender2 = {preload: gamePreloadRender, create: gameCreateRender, update: gameUpdateRender};

//Create Game
var game = new Phaser.Game(0, 0, Phaser.HEADLESS, '', gameState);
var screen1 = new Phaser.Game(480, 540, Phaser.AUTO, 'screen1', gameStateRender);
var screen2 = new Phaser.Game(480, 540, Phaser.AUTO, 'screen2', gameStateRender2);

//Controllers
var pad1;
var pad2;
