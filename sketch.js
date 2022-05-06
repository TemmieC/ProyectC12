var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var runner, runnerImg
var score = 0;

function preload(){
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
 runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite (200,400);
 path.addImage(pathImg);
 path.scale=1.2;

 boy = createSprite (200,100);
 boy.addAnimation("running", boyImg);
 boy.scale = 0.8;
 
 runner = createSprite (200,300)
 runner.addAnimation("epic-persecution", runnerImg);
 runner.scale = 0.08;
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  text (240)
  textSize(10);
  text ("¡Evita que te atrapen!", 200, 100);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  runner.x = boy.x;
  runner.collide(leftBoundary)
  runner.collide(rightBoundary)
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
    path.y = path.width/3;
  }


  drawSprites();
  
}