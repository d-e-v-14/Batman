class Drops{
    constructor(x,y,r){
     var opt={
         isStatic:false,
         restitution:0.3
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r,opt);
     this.color = color(rgb(50, 52, 168));
     World.add(world,this.body);
     this.img = loadImage("drop.png");


    }
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     imageMode(CENTER);
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill(this.color);
     //ellipseMode(RADIUS);
     //ellipse(0,0,this.r,this.r);
     image(this.img,pos.x,pos.y+70,5,10);
     pop(); 



   }
   

}