var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var options= {
	  
		'restitution':0.8
	}
	packageSprite=createSprite(width/2, 200, 10,10 ,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
		World.add(world , packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , { isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	//box1= new box(200 , 300); 
	//box2= new box(240 , 100 );
	//box3= new box(200 , 350 )
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
  
  //box1.display();
  //box2.display();
  //box3.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;


}

}



