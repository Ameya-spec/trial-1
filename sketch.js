const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var drop1;
var umbrella;
function preload(){

}


function setup(){
 createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;
    drop1 = new Drops(200,20);
    umbrella = new Umbrella(200,250)
    Engine.run(engine);
}

function draw(){
background("black")

drawSprites();
drop1.display();
umbrella.display();
}   

