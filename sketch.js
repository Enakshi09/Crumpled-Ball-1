const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper1, ground

function preload()
{
	
}

function setup() {
	createCanvas(900, 300);

	engine = Engine.create();
	world = engine.world;

    groundSprite=createSprite(width/2,265, width,10);
	groundSprite.shapeColor=color(255)

    ground = Bodies.rectangle(width/2, 265, width, 10 , {isStatic:true} );
	World.add(world, ground)
	
	dustbin1 = new Dustbin(810,210,20,100);
    dustbin2 = new Dustbin(590,210,20,100);
	dustbin3 = new Dustbin(700,250,200,20);

	paper1 = new paper(100,250,25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  
  drawSprites();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper1.display();


 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75})
	}
}

