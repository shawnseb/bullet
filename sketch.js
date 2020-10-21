var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup()
{
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,200);
  bullet=createSprite(200,200,50,20);
}

function draw() {
   background("blue");
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;

 

if(weight*speed*speed/thickness*thickness*thickness > 10 && bullet.isTouching(wall)){
  bullet.shapeColor="red";
  
}
if(weight*speed*speed/22500>=100 && 0.5*weight*speed*speed/thickness*thickness*thickness <= 10 && bullet.isTouching(wall)){
  bullet.shapeColor="green";
}
if(bullet.isTouching(wall)){
  bullet.velocityX=0;
}
  drawSprites();
}