class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.img = loadImage("bat/Bestman-01.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount%200===0){
       //    image(this.img,pos.x,pos.y+70,300,300);
        }else{
          animation(this.image,pos.x,pos.y+70);
        }
        
    }
}
