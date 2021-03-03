//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;
var appleImg;
var guavaImg;
var strawberryImg;
var monsterImg
var fruitGroup;
var monsterGroup;
var goImg;
var sound;


function preload(){
  
  knifeImage = loadImage("knife.png");
  appleImg=loadImage("apple.png");
  strawberryImg=loadImage("strawberry.png");
  guavaImg=loadImage("fruit2.png");
  monsterImg=loadImage("monster.png");
  goImg=loadImage("WhatsApp Image 2021-03-01 at 20.17.05.jpeg")
  sound=loadSound("knifesound.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  
  
  fruitGroup=new Group();
  monsterGroup=new Group();
  
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
   createFruit();
     
    
      if(knife.isTouching(fruitGroup)){
        fruitGroup.destroyEach();
        score=score+1
         sound.play();
      }
    
    createMonster();
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    
    if(knife.isTouching(monsterGroup)){
      sound.play();
      gameState=END
    }
    // Increase score if knife touching fruit
   
    
    // Go to end state if knife touching enemy
      
  }
  
  else if(gameState===END){
   var gameOver=createSprite(250,200,20,20)
    fruitGroup.destroyEach();
    monsterGroup.destroyEach();
    gameOver.addImage(goImg)
    gameOver.scale=0.8
    knife.visible=false
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
  

function createFruit(){
  if (frameCount%85===0){
    
  
  
  var apple=createSprite(0,Math.round(random(20,370)),10,10)
  
  switch(round(random(1,3))){
         
         case 1: apple.addImage(appleImg);
      break;
      case 2: apple.addImage(strawberryImg);
      break;
      case 3: apple.addImage(guavaImg);
      apple.scale=0.2
      break;
     
         }
 
  apple.velocityX=10;
  apple.lifetime=150;
  apple.scale=0.05
    fruitGroup.add(apple)
  }
  
                      }

function createMonster(){
  if (frameCount%150===0){
   var monster=createSprite(0,Math.round(random(20,370)),10,10)
   monster.addImage(monsterImg);
    monster.velocityX=11;
    monster.lifetime=150;
    monsterGroup.add(monster);
    monster.scale=0.05;
    
    
  }
  
}