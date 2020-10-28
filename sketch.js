
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage,boy;
var engine,world

function preload()
{
	boyImage = loadImage("sprites/boy.png")	;
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750, 570, 700, 20);
	stone = new Stone (410,430)
	
	
	tree = new Tree(600,300,150,200)
	mango1 = new Mango(600,300,10,10)
	mango2 = new Mango(610,320,10,10)
	mango3 = new Mango(630,350,10,10)
	mango4 = new Mango(670,360,10)
	mango5 = new Mango(690,310,10,10)
	mango6 = new Mango(710,400,10,10)
	mango7 = new Mango(730,300,10,10)
	boy = new Boy(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  boy.display();
  
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    boy.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 ){
	   Matter.Body.setPosition(stone.body,{x:235,y:420})
	   boy.attach(stone.body);
    }
}

function detectcollision(Lstone,Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<+lmango.r+lmango.r)
{
    Matter.Body.setStatic(lmango.body,false);
}
}

