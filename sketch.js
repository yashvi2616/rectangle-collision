var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.debug=true;
 fixedRect.shapeColor="red";
 movingRect=createSprite(150,200,50,100);
 movingRect.debug=true;
 movingRect.shapeColor="yellow";
}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  } 
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="yellow";
    



  }
  drawSprites();
}