var cat,mouse,ground,catImg,mouseImg,groundImg;
function preload() {
    //load the images here
groundImg=loadImage("garden.png");
mouseImg=loadImage("mouse1.png","mouse2.png");
catImg=loadImage("cat1.png","cat2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 ground=createSprite(500,400,20,20);
ground.scale=2;
ground.addImage(groundImg);
mouse=createSprite(200,200,20,20);
mouse.scale=0.5;
mouse.addImage(mouseImg);
cat=createSprite(400,300,20,20)
cat.scale=2;
cat.addImage(catImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode === leftArrow)
cat.velocityX=-5;
cat.addImage("catRunning",catImg1);
cat.changeAnimation("catRunning")
}
