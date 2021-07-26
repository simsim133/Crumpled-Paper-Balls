
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball_option;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;
	


   ball_options={
	isStatic:true,
	restitution: 0.3,
	friction:0,
	density:0.2,
   }
	ball=Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);



	//Create the Bodies Here.
   groundhoriz = new Ground(300,550,600,30);
   leftground = new Ground(430,510,15,50);
   rightground = new Ground(500,510,15,50);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  Engine.update(engine);

  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 
 groundhoriz.show();
 leftground.show();
 rightground.show();
 
 drawSprites()
}


function keyPressed (){
	if(ball===RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}




