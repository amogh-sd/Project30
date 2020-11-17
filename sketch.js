const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling"
    


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    pig1 = new Pig(810, 350);
    pig3 = new Pig(810, 220);
    pig2 = new Pig(810, 350);
    pig4 = new Pig(810, 220);

    //log1 = new Log(810,100,300, PI/2);

    pig5 = new Pig(860, 350);
    pig6 = new Pig(760, 220);
    
    pig7 = new Pig(860, 350);
    pig8 = new Pig(760, 220);
    pig9 = new Pig(860, 350);
    pig10 = new Pig(760, 350);





    bird = new Bird(200,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:190});
}

function draw(){

    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    pig1.display();
    pig3.display();
    pig2.display();
    pig4.display();
    pig9.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig10.display();

    //log1.display();


    bird.display();

}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        gameState = "onSling"

        
    }
}