var monkey;
var monkey_running;
var monkeyrunningimg
var stoneimg;
var banana;
var bananaimg;
var ground;
var invisibleground;
var stones
var bananas
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0

 

function preload(){
   monkeyrunningimg = loadAnimation("stickman 1.png","stickman 2.png");
  
  bananaimg = loadImage("donut.png");
  stoneimg = loadImage("bandit.png")
  bgimg = loadImage("cityscape.png")
  
}

function setup() {
  createCanvas(400, 400);
  ground=createSprite(200,200,400,10);
  ground.velocityX=-4;
  ground.addAnimation("bg",bgimg);
  
  invisibleground=createSprite(200,370,400,10);
  invisibleground.velocityX=-4
  invisibleground.visible=false
  
  monkey=createSprite(50,320,20,40);
  monkey.addAnimation("mon",monkeyrunningimg);
  monkey.scale = 0.07;
  
  bananas=createGroup();
  stones =createGroup();
}

function draw() {
  background(220);
 
  monkey.velocityY = monkey.velocityY + 0.25  
  monkey.collide(invisibleground);
  text("score:"+score, 270, 22); 

  
 if(keyDown("space") && monkey.y >= 320){
  monkey.velocityY = -7 ;
}  
 
  if (ground.x < 0){
  ground.x = ground.width/2;
}
  if (invisibleground.x < 0){
  invisibleground.x = invisibleground. width/2;
    monkey.velocityY = monkey.velocityY + 0.25  
}
  
  if(monkey.isTouching(bananas)){
    bananas.destroyEach();
    monkey.scale=monkey.scale+0.005
    score=score+1
  }
  
  if(monkey.isTouching(stones)){
    monkey.velocityY=0 ;
    monkey.scale=monkey.scale-0.005;
  }
  
  if(monkey.scale<=0){
    monkey.velocityY=0;
    invisibleground.velocityX=0;
    stones.velocityX=0;
    bananas.velocityX=0; 
    ground.velocityX=0;
  }
  spawnstone();
  spawnbananas();
drawSprites();
}

function spawnstone(){
  if (World.frameCount%300===0) {
  var rock = createSprite(400 ,335, 10, 10);
  rock.velocityX = -4;
  rock.addAnimation("stoneimg",stoneimg);
  rock.x=Math.round(random(400,250));
  rock.scale = 0.2;
  rock.setCollider("circle", 0, 10, 190);
  stones.add(rock);
}
}

function spawnbananas() {
  if (World.frameCount%80===0) {
    var banana = createSprite(400, 250, 10, 10);
    banana.y=Math.round(random(300,250));
    banana.velocityX = -4;
    banana.addAnimation("bananaimg",bananaimg);
    banana.scale = 0.1;
    bananas.add(banana);
    
  }
} 