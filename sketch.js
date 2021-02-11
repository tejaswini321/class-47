var gameState = 0;
var form,game,player,allPlayers,hero,villan;
var playerCount = 0;
var characters = [];
var bad_dragons,good_dragons,bad_dragonGroup,good_dragonGroup;

function preload(){

}

function setup(){
    createCanvas(1200, 800);
    database=firebase.database();

    bad_dragonGroup = createGroup();
    good_dragonGroup = createGroup();

    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount === 2){
        gameState = 1;
        game.updateState(1);
    }
    if(gameState === 1){
        game.play();
    }
}