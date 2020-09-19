const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,pen,score

function preload(){
bg=loadImage("image.jpg")

}

function setup() {
  var canvas=createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  score=0

// ground=new Ground(width/2,690,width,25)
 ground2=new Ground(500,500,400,20)
 ground3=new Ground(800,350,275,20)

 polygon=new Polygon(200,500)
 point=new SlingShot(polygon.body,{x:175,y:350})


 b1=new Box1(350,400,50,50)
 b2=new Box2(400,400,50,50)
 b3=new Box3(450,400,50,50)
 b4=new Box1(500,400,50,50)
 b5=new Box2(550,400,50,50)
 b6=new Box3(600,400,50,50)
 b7=new Box1(650,400,50,50)

 b8=new Box3(400,300,50,50)
 b9=new Box1(450,300,50,50)
 b10=new Box2(500,300,50,50)
 b11=new Box3(550,300,50,50)
 b12=new Box1(600,300,50,50)

 b13=new Box2(450,200,50,50)
 b14=new Box3(500,200,50,50)
 b15=new Box1(550,200,50,50)

 b16=new Box1(500,100,50,50)


 b18=new Box4(700,100,50,50)
 b19=new Box5(750,100,50,50)
 b20=new Box6(800,100,50,50)
 b21=new Box4(850,100,50,50)
 b22=new Box5(900,100,50,50)

 b23=new Box6(750,50,50,50)
 b24=new Box4(800,50,50,50)
 b25=new Box5(850,50,50,50)

 b26=new Box5(800,0,50,50)


 
 
}

function draw() {
  background(bg);  
  Engine.update(engine)
 

 //ground.display()
 ground2.display()
 ground3.display()
 
 
 point.display()
 polygon.display()


 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()

 b8.display()
 b9.display()
 b10.display()
 b11.display()
 b12.display()

 b13.display()
 b14.display()
 b15.display()

 b16.display()



 b18.display()
 b19.display()
 b20.display()
 b21.display()
 b22.display()

 b23.display()
 b24.display()
 b25.display()

 b26.display()


 textFont('Italic');
 textSize(16);
 fill (255)
 text ("press space to retry",10,15)
 text ("throw all the objects to win",10,35)
 textSize(25)
 text ("Score:"+ score,880,30)


 if(b1.body.position.y>700 && b1.body.position.y<710){
   score=score+10
 }
 if(b2.body.position.y>700 && b2.body.position.y<710){
  score=score+10
}
if(b3.body.position.y>700 && b3.body.position.y<710){
  score=score+10
}
if(b4.body.position.y>700 && b4.body.position.y<710){
  score=score+10
}
if(b5.body.position.y>700 && b5.body.position.y<710){
  score=score+10
}
if(b6.body.position.y>700 && b6.body.position.y<710){
  score=score+10
}
if(b7.body.position.y>700 && b7.body.position.y<710){
  score=score+10
}
if(b8.body.position.y>700 && b8.body.position.y<710){
  score=score+10
}
if(b9.body.position.y>700 && b9.body.position.y<710){
  score=score+10
}
if(b10.body.position.y>700 && b10.body.position.y<710){
  score=score+10
}
if(b11.body.position.y>700 && b11.body.position.y<710){
  score=score+10
}
if(b12.body.position.y>700 && b12.body.position.y<710){
  score=score+10
}
if(b13.body.position.y>700 && b13.body.position.y<710){
  score=score+10
}
if(b14.body.position.y>700 && b14.body.position.y<710){
  score=score+10
}
if(b15.body.position.y>700 && b15.body.position.y<710){
  score=score+10
}
if(b16.body.position.y>700 && b16.body.position.y<710){
  score=score+10
}
 //by mistake b17 was missed , see line 47
if(b18.body.position.y>700 && b18.body.position.y<710){
  score=score+10
}
if(b19.body.position.y>700 && b19.body.position.y<710){
  score=score+10
}
if(b20.body.position.y>700 && b20.body.position.y<710){
  score=score+10
}
if(b21.body.position.y>700 && b21.body.position.y<710){
  score=score+10
}
if(b22.body.position.y>700 && b22.body.position.y<710){
  score=score+10
}
if(b23.body.position.y>700 && b23.body.position.y<710){
  score=score+10
}
if(b24.body.position.y>700 && b24.body.position.y<710){
  score=score+10
}
if(b25.body.position.y>700 && b25.body.position.y<710){
  score=score+10
}
if(b26.body.position.y>700 && b26.body.position.y<710){
  score=score+10
}
if(b1.body.position.y>700 && b2.body.position.y>700 && b3.body.position.y>700 && b4.body.position.y>700 && b5.body.position.y>700 &&
  b6.body.position.y>700 && b7.body.position.y>700 && b8.body.position.y>700 && b9.body.position.y>700 && b10.body.position.y>700 &&
  b11.body.position.y>700 && b12.body.position.y>700 && b13.body.position.y>700 && b14.body.position.y>700 && b15.body.position.y>700 &&
  b16.body.position.y>700 && b18.body.position.y>700 && b19.body.position.y>700 && b20.body.position.y>700 && b21.body.position.y>700 &&
  b22.body.position.y>700 && b23.body.position.y>700 && b24.body.position.y>700 && b25.body.position.y>700 && b26.body.position.y>700 ){

    textFont('Italic');
 textSize(30);
 fill (255)
 text ("YOU WIN ",width/2-25,height/2)
  }
  
  


 

 

  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  point.fly();
}
function keyPressed(){
  if(keyCode===32){
      point.attach(polygon.body)
      Matter.Body.setPosition(polygon.body,{x:175,y:350})
  }
}