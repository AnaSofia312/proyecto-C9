
function setup() {
  createCanvas(400,400);
  background(51);
  background("red")
  box = createSprite(200,200,30,30);

}

function draw() 
{
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
    
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
 
 
  
  drawSprites();
}

