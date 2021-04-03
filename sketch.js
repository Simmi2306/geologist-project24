const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new Iron(200,400,40,40);
    iron2 = new Iron(250,400,40,40);
    iron3 = new Iron(150,400,40,40);
    iron4 = new Iron(100,400,40,40);
    stone1 = new Stone(650,400,80,60);
    stone2 = new Stone(750,400,80,60);
    stone3 = new Stone(700,300,250,30);
    rubber1 = new Rubber(400,400,7);
    rubber2 = new Rubber(420,400,7);
    rubber3 = new Rubber(440,400,7);
    rubber4 = new Rubber(460,400,7);
    rubber5 = new Rubber(480,400,7);
    rubber6 = new Rubber(500,400,7);
    rubber7 = new Rubber(520,400,7);
    rubber8 = new Rubber(540,400,7);
    rubberBig = new Rubber(900,400,8);
    rubberBig2 = new Rubber(920,400,8);
    rubberBig3 = new Rubber(940,400,8);
    
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    stone1.display();
    stone2.display();
    stone3.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubberBig.display();
    rubberBig2.display();
    rubberBig3.display();
    
    fill("green");
    textStyle("ArilcBlack");
    textSize(30);
    text("Hit And Find The Object And Their Masses ",50,200);
    text("Use The Hammer To -",50,150);
    text("GeoLogist",50,100);
    
 
}