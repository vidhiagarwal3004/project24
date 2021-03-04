
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,wall1,wall2,wall3;
var engine,world;


function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground (400,700,800,20);
      paper = new Paper(100,600,10);
     wall1 = new Wall (550,640,20,100);
	 wall2 = new Wall (610,680,100,20);
	 wall3 = new Wall (670,640,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)
  drawSprites();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
 paper.display();

}
function keyPressed()
{
	if (keyCode==UP_ARROW)
	{
       Matter.Body.applyForce(paper.body ,paper.body.position,{x:10,y:-12})
    }
}