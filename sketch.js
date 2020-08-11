const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine,world;
var object, ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object_options = {
    isStatic:false
  }
  object = Bodies.rectangle(300,100,50,50,object_options);
  World.add(world, object);
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);
  console.log(object);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
}