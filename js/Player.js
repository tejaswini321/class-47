class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.score = 0;
        this.lifetime = 5;
        this.goodDinos = 0;
        this.badDinos = 0;    
        this.x=200;
        this.y=200;    
    }
    getCount(){
        var gameCountRef = database.ref('playerCount')
        gameCountRef.on('value',(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex= "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            x: this.x,
            y:this.y,
            score:this.score,
            goodDinos: this.goodDinos,
            badDinos : this.badDinos,
            lifetime:this.lifetime
        })

    }
     
    static getPlayerInfo(){
        database.ref('players').on('value',(data)=>{
            allPlayers = data.val();
        })
    }
}