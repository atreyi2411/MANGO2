class Tree {
    constructor(x,y,width, height) {
      var options = {
           isStatic : true,
          'restitution':0.3,
          'friction':0.5,
    }     
     
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("Sprites/tree.png");
     World.add(world, this.body);
   }
   display(){
      push();
      imageMODE(CENTER);
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill("pink")
      rectangle( this.image,0, 0, this.width, this.height);
      pop();
   }
}