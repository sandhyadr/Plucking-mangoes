
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function preload()
{
	boyImage =loadImage("images/boy.png");
}

function setup() {
	createCanvas(1500, 800);
    engine = Engine.create();
	  world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(750,790,1500,20);
  stone = new Stone(100,350,50);
  sling= new SlingShot(stone.body,{x:150,y:582});

  mango1= new Mango(600,620,50);
  mango2= new Mango(1100,320,30);
  mango3= new Mango(900,360,40);
  mango4= new Mango(650,350,70);
  mango5= new Mango(1350,340,50);
  mango6= new Mango(1050,150,50);

  tree = new Tree(1000,475,800,700);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  image(boyImage,150,480,200,400);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display(); 
  mango6.display();
  sling.display();

if(isTouching(stone,mango1))
{
  console.log('in')
  Matter.Body.setStatic(mango1.body,false);
}
if(isTouching(stone,mango2))
{
  Matter.Body.setStatic(mango2.body,false);
}
if(isTouching(stone,mango3))
{
  Matter.Body.setStatic(mango3.body,false);
}
if(isTouching(stone,mango4))
{
  Matter.Body.setStatic(mango4.body,false);
}
if(isTouching(stone,mango5))
{
  Matter.Body.setStatic(mango5.body,false);
}
  drawSprites();
 
}


function mouseDragged(){
     Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	sling.fly();
}
function keyPressed(){
	if(keyCode ===32){
		Matter.Body.setPosition(stone.body,{x:100,y:350});
	  sling.attach(stone.body);
	}
}

function isTouching(obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
 return true;
}
else {
  return false;
}
}