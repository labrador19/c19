var food,treat,wasp,kitty,foodImg,kittyImg,treatImg,waspyImg,endImg, gardenImg;
var score = 0;
var foodG,treatG,waspGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  gardenImg = loadImage("garden.jpg");
  treatImg = loadAnimation("treat.png");
  waspyImg = loadImage("waspy.png");
  endImg = loadImage("game over.png");
  kittyImg = loadImage("catbug.png");
  foodImg =loadAnimation("food.jpg")

function setup(){
  
//create a canvas

 createCanvas(windowWidth,windowHeight);


// Moving background

garden=createSprite(width/2,200);
garden.addImage(gardenImg);
garden.velocityX = -4;


kitty = createSprite(width/2,height-20,20,20);
kitty.addAnimation("catbug.png",kittyImg);
kitty.scale=0.08;
  
  
foodG=new Group();
treatG=new Group();
waspGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  kitty.x = World.mouseX;
  
  edges= createEdgeSprites();
  kitty.collide(edges);
  
  //code to reset the background

  // if(path.x > height ){
  //   path.x = height/2;
  // }

  // if(path.y > height ){
  //   path.x = height/2;
  // }

  // if(path.x > height ){
  //   path.y = height;
  // }

   if(garden.y > height ){
     garden.y = height/2;
   }
  
    createFood();
    createWasp();
    createTreat();

    if (foodG.isTouching(kitty)) {
      foodG.destroyEach();
      score=score + 50;
      
    }
    
      
    else if(treatG.isTouching(kitty)) {
      treatG.destroyEach();
      score=score + 150;
      
    }else{
      if(waspGroup.isTouching(kitty)) {
        gameState=END;
        
        kitty.addAnimation("game over.png",endImg);
        kitty.x=width/2;
        kitty.y=height/2;
        kitty.scale=0.6;
        
        foodG.destroyEach();
        treatG.destroyEach();
        waspGroup.destroyEach();
        
        foodG.setVelocityYEach(0);
        treatG.setVelocityYEach(0);
        waspGroup.setVelocityYEach(0);


   
   
     
    }
    }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,width-150,30);
  }

}

function createFood() {
  if (World.frameCount % 550 == 0) {
  var food = createSprite(Math.round(random(50, width-50),40, 10, 10));
  food.addImage(cashImg);
  food.scale=0.12;
  food.velocityY = 14;
  food.lifetime = 200;
  foodG.add(cash);
  }
}



function createTreat() {
  if (World.frameCount % 600 == 0) {
  var treat = createSprite(Math.round(random(50, width-50),40, 10, 10));
  treat.addImage(treatImg));
  treat.scale=0.13;
  treat.velocityY = 15;
  treat.lifetime = 200;
  treatG.add(treat);
  }
}

function createWasp(){
  if (World.frameCount % 100 == 0) {
  var wasp = createSprite(Math.round(random(50, width-50),40, 10, 10));
  wasp.addImage(waspImg);
  wasp.scale=0.5;
  wasp.velocityY = 11;
  wasp.lifetime = 200;
  waspGroup.add(sword);
  }
}