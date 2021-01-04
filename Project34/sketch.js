//Create variables here
var dog,dogimg,happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1png");
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
  dog = createSprite(200,200,11,11)  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  dog.addImage(happyDog);
}
  
drawSprites();
  text("Press UP_ARROW Key To Feed Drago Milk!")
  fill("red");
  textSize("34");
  text(foodStock,110,110);
  //add styles here
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x =0; 
  }else{
    x=x=1;
  }

  database.ref('/').update({
    Food:x
  })
}