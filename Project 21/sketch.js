var wall, thickness;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50)
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321)
  weight = random(30,52)
  bullet.velocityX = speed
}

function draw() {


  if (wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
    bullet.velocityX = 0;
    var deformation=0.5 *weight*speed*speed/22509;
    if(deformation>180)
    {
      wall.shapeColor =color ("red");
    }
    if(deformation<180 && deformation>100)
    {
      wall.shapeColor =color ("yellow");
    }
    if(deformation<100)
    {
      wall.shapeColor =color ("green");
    }
  }



background("black");  
drawSprites();
 
}
