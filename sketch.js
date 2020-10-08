const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1 , pig2;
var bird;
var log1,log2,log3,log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(850,350,50,50);
    box2 = new Box(950,350,50,50);
    box3 = new Box(950,250,50,50);
    box4 = new Box(850,250,50,50);
    box5 = new Box(900,150,50,50);
    

    pig1 = new pigsShallRule(900,350);
    pig2 = new pigsShallRule(900,250);

    bird = new birdShallKillAllPigs();

    log1 = new LogDefends(900,300,200,PI/2);
    log2 = new LogDefends(900,200,200,PI/2);
    log3 = new LogDefends(875,170,100,PI/3.6);
    log4 = new LogDefends(925,170,100,-PI/3.6);


    ground = new Ground(600,height-10,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
   log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();


    ground.display();
}