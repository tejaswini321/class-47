class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.reset = createButton("Reset");
        this.title = createElement("h2");
        this.greeting = createElement("h3");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Zombie Killer");
        this.title.position(130,0);

        this.input.position(130,150);
        this.button.position(130,230);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();

            player.name = this.input.value();
            playerCount++;

            player.index = playerCount
            player.x = player.index+(playerCount*200);
            player.y = 700;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,150);

        })
    }
}