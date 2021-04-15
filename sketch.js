const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var slingshot

function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(900,300,50,50)
	ground = new Ground(600,548,1200,15)
	stone = new Stone(160,400,70,70)
	boy = new Boy(250,450,250,250)

	mango1 = new Mango(900,220,10,10)
	mango2 = new Mango(850,180,12,12)
	mango3 = new Mango(920,100,12,12)
	mango4 = new Mango(1030,180,10,10)
	mango5 = new Mango(750,220,15,15)
	mango6 = new Mango(820,270,12,12)
	mango7 = new Mango(960,160,16,16)
	mango8 = new Mango(820,120,10,10)
	mango9 = new Mango(970,255,12,12)
	mango10 = new Mango(1100,240,15,15)

	slingshot = new SlingShot(stone.body,{x:160,y:400})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background('grey');

  tree.display()
  ground.display()
  boy.display()
  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  slingshot.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:160,y:400})
    slingshot.attach(stone.body)
  }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}
