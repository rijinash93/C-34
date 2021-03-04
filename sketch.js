const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg,platform;




var score = 0;
function preload() {
bg=loadImage("images/bg.jpg")    
trainsound=loadSound("sound/train.mp3")
crashsound=loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    boggie1=new Boggie(50,170,50,50);
    boggie2=new Boggie(150,170,50,50);
    boggie3=new Boggie(250,170.50,50);
    boggie4= new Boggie(350,170,50,50);
    boggie5=new Boggie(450,170,50,50);
    boggie6=new Boggie(550,170,50,50);

    
}

function draw(){
     background(bg);
    

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    //strokeWeight(4);
    boggie1.show()
    boggie2.show()
    boggie3.show()
    boggie4.show()
    boggie5.show()
    boggie6.show()   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32 ){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }



}