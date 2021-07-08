function preload(){
  bg = loadImage("bg.jpg");
  start = loadImage("start.png");
  rock = loadImage("stone.png");
  player = loadImage("running.png");
  road = loadImage("road.png");
  car = loadImage("car.png");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}