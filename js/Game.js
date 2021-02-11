class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on('value',(data)=>{
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player= new Player();
            var playerCountRef= await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        hero = createSprite(100,200,10,10);
        villan = createSprite(200,200,10,10);
        characters=[hero,villan];
    }

    play(){
        form.hide();
        background(255);
        console.log("play Function");

        Player.getPlayerInfo();

        if(allPlayers!=undefined){
        var x=0;
        var y=600;
        var index=0;
      
        for(var plr in allPlayers){
            x= allPlayers[plr].x+(index*10);
            y = allPlayers[plr].y;
            index = index+1;

            characters[index-1].x= x;
            characters[index-1].y = y;

        }
    }
        if(keyIsDown(LEFT_ARROW)&& player.index!=null){
            player.x-=2; //player.x=player.x-2;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW)&& player.index!= null){
            player.x +=2;
            player.update();
        }

        if(frameCount %80 === 0){
            good_dragons = createSprite(-5,Math.round(random(100,200)),10,10);
            good_dragons.velocityX = 3;
            good_dragons.shapeColor = "green";

        }

        drawSprites();
    }
    
}