const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;
var pig1;
var log1;
var box3, box4,log3,pig2,box5,log4,log5;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    pig1 = new pig(810,320);
    box2 = new Box(920,320,70,70);
    log1 = new log(810,260,300,PI/2);
    box3 = new Box(700,240,70,70);
    pig2 = new pig(810,220);
    box4 = new Box(920,240,70,70);
    log3 = new log(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    log4 = new log(760,120,120,PI/7);
    log5 = new log(870,120,120,-PI/7);
    bird = new bird(100,100);
    ground1 = new ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
}