
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImg = loadImage("sprites/boyImg.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprites(300,450,100,80);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(235,420);

	mango1 = new Mango(600,350,20,20);
	mango2 = new Mango(650,400,20,20);
	mango3 = new Mango(600,430,20,20);
	mango4 = new Mango(630,470,20,20);
	mango5 = new Mango(570,350,20,20);

	body = new Launcher(235,420);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);
  
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function detectcollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-mango.r+stone)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

