var dog,dogImage,dogImage1;
var database;
var foods,foodStock;

function preload()
{
	dogImage=loadImage("images/dogimg.png");
  dogImage1=loadImage("images/dogimg.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);
  
  
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImage1);
  }
  

  drawSprites();
  fill(255,255,244);
  stroke("black");
  text("foodRemining"+foods,170,200);
  textSize(13);
  text("pressUpArrowToFeed",130,10,300,20);

}
function readStock(data){
  foods=data.val();
}
function writeStock(X){
  if(x<=0){
    x=0;
  }else{
    x=x-1;

  }
  database.ref('/').update({
    food:x
  })
}


