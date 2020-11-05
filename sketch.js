var fixedRect, movingRect;
 var o1, o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(200,600,50,80);
  o1.shapeColor="red";
  o1.velocityY=-3;
  o2=createSprite(200,60,50,80);
  o2.shapeColor="red";
  o2.velocityY=3;
  o3=createSprite(600,600,50,80);
  o3.shapeColor="red";
  o4=createSprite(800,600,50,80);
  o4.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceoff(o1,o2);
if( isTouching(movingRect,o3)) {
movingRect.shapeColor="yellow"
o3.shapeColor="yellow"
}
else{
  movingRect.shapeColor="red"
o3.shapeColor="red"
}
  drawSprites();
}
