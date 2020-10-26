var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52); 

  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness, height/2);
  
  
  bullet.shapeColor = ("white");
  bullet.velocityX=speed;


}


function draw() {
  background(0,0,0);  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage = 0.5 *  weight * speed * speed  / thickness * thickness * thickness

      if (damage > 10 ){
        wall.shapeColor=("red");
        
      }  

      if (damage < 10){
        wall.shapeColor=("green");
      } 
  
    }   
  

  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  

  } 
  
  else{
    return false;

  }  
} 

