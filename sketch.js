var fixedBox,movingBox;
function setup() {
  createCanvas(800,400);
  fixedBox=createSprite(400, 200, 50, 50);
  fixedBox.shapeColor="red";
  movingBox=createSprite(400,100,50,50);
  movingBox.shapeColor="orange";
}

function draw() {
  background(150);  

  movingBox.y=mouseY;
  movingBox.x=mouseX;
  if(fixedBox.width/2+movingBox.width/2>=movingBox.x-fixedBox.x && movingBox.width/2+fixedBox.width/2>=fixedBox.x-movingBox.x  &&  
    fixedBox.height/2+movingBox.height/2>=movingBox.y-fixedBox.y && movingBox.height/2+fixedBox.height/2>=fixedBox.y-movingBox.y)
  {
    movingBox.shapeColor="green";
    fixedBox.shapeColor="blue";
  }else {
    movingBox.shapeColor="orange";
    fixedBox.shapeColor="red";
  }
  drawSprites();
}