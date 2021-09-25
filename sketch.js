const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonimg = loadImage("polygon.png");
}

function setup() {

    createCanvas(1000, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 600, 1000, 50);

    base = new Ground(550, 320, 300, 20);

    block1 = new Box(460, 275, 30, 40);
    block2 = new Box(490, 275, 30, 40);
    block3 = new Box(520, 275, 30, 40);
    block4 = new Box(550, 275, 30, 40);
    block5 = new Box(580, 275, 30, 40);
    block6 = new Box(610, 275, 30, 40);
    block7 = new Box(640, 275, 30, 40);

    block8 = new Box(490, 235, 30, 40);
    block9 = new Box(520, 235, 30, 40);
    block10 = new Box(550, 235, 30, 40);
    block11 = new Box(580, 235, 30, 40);
    block12 = new Box(610, 235, 30, 40);

    block13 = new Box(520, 195, 30, 40);
    block14 = new Box(550, 195, 30, 40);
    block15 = new Box(580, 195, 30, 40);

    block16 = new Box(550, 155, 30, 40);

    Polygon = Bodies.circle(200, 200, 20);
	World.add(world, Polygon);

    slingshot = new Slingshot(this.Polygon, {x:200, y:200});


}

function draw(){

    background("lightblue");

    Engine.update(engine);

    ground.display();
    base.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();

    imageMode(CENTER);
    image(polygonimg, Polygon.position.x, Polygon.position.y, 45, 45 );

    drawSprites();
    //textSize(30); fill("black"); text(mouseX + "," + mouseY,30,30);
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.Polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){ 
        slingshot.attach(this.Polygon);
    }

}
