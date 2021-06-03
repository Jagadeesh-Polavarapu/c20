var mr,fr;

function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 90, 30);
  fr=createSprite(200,200,50,80);
  mr.shapeColor="red"
  fr.shapeColor="green"
}

function draw() {
  background(0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  console.log(mr.x-fr.x);
  if(mr.x-fr.x<=mr.width/2 + fr.width/2 && 
    fr.x-mr.x<=mr.width/2 + fr.width/2 && 
    mr.y-fr.y<=mr.height/2 + fr.height/2 && 
    fr.y-mr.y<=mr.height/2 + fr.height/2  ){
    mr.shapeColor="blue";
    fr.shapeColor="blue";

  }
  else{
    mr.shapeColor="red"
  fr.shapeColor="green"
  }

  drawSprites();
}