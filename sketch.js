var canvas,bgImg;
var tom,tomImg,tomImg1,tomImg2;
var jerry,jerryImg,jerryImg2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg = loadAnimation("images/cat1.png");
    tomImg1 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg2 = loadAnimation("images/cat4.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryImg1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg2 = loadAnimation("images/mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg);
    jerry.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (jerry.width - tom.width)/2){
      tom.velocityX = 0; 
      tom.addAnimation("tomLastImg",tomImg2);
      tom.x = 300;
      tom.scale = 0.2;
      tom.changeAnimation("tomLastImg");
      jerry.addAnimation("jerryLastImg",jerryImg2);
      jerry.scale = 0.15;
      jerry.changeAnimation("jerryLastImg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode=== LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomImg1);
        tom.changeAnimation("tomRunning");
        jerry.addAnimation("jerryTeasing",jerryImg1);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing")
    }

}
