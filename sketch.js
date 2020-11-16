const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={

    isStatic: true

    }

    ground = Bodies.rectangle(250,490,500,20,ground_options);
    World.add(world,ground);

    var ball_options = {

   restitution : 0.7

    }

ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)


}

function draw() {
  background("blue"); 
  
  Engine.update(engine)

  fill("green")
  rectMode(CENTER)
 rect(ground.position.x, ground.position.y, 500, 20)

ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 20, 20)

}