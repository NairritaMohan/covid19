
var engine, world;

var player;
var enemy;
var enemies=[]
var drops = []
var bg 
var man 
var warning, warning_img;
var sL_img;
var sR_img;
var bgstart;
var mode;


function preload(){
bg = loadImage("sprites/bg.jpg")
warning_img = loadImage("sprites/warning.png")
sL_img = loadImage("sprites/Sleft.png")
sR_img = loadImage('sprites/SRight.png')
bgstart = loadImage("sprites/covid19bg.png")
man1_img = loadAnimation("sprites/w1.png","sprites/w2.png","sprites/w3.png","sprites/w4.png","sprites/w5.png","sprites/w6.png","sprites/w7.png","sprites/w8.png")
man2_img = loadAnimation("sprites/rw1.png","sprites/rw2.png","sprites/rw3.png","sprites/rw4.png","sprites/rw5.png","sprites/rw6.png","sprites/rw7.png","sprites/rw8.png","sprites/rw9.png")
man3_img = loadAnimation("sprites/bm1.png","sprites/bm2.png","sprites/bm3.png","sprites/bm4.png","sprites/bm5.png","sprites/bm6.png","sprites/bm7.png","sprites/bm8.png","sprites/bm9.png")
helicopter_img = loadAnimation("sprites/h1.png","sprites/h2.png","sprites/h3.png","sprites/h4.png","sprites/h5.png","sprites/h6.png")
spray_img = loadImage("sprites/spray.png")
bus_img = loadImage("sprites/bus1.png")
car_img = loadImage("sprites/car1.png")
}

function setup() {
 mode = 0;
  createCanvas(displayWidth-30,displayHeight-30);
bus1 = createSprite(3000,750,20,20)
bus1.addImage("b1",bus_img)


player = createSprite(200,600,50,50)
player.addImage("sleft", sL_img)
player.addImage("sRight", sR_img)
victim = new Victim(1000,700)
 victim2 = new Victim(200,700)
 warning = createSprite(1000,700,20,20)
 warning.addImage("warning",warning_img)
 warning.scale = 0.5;
 warning.visible = false;

 warning1 = createSprite(200,700,20,20)
 warning1.addImage("warning",warning_img)
 warning1.scale = 0.5;
 warning1.visible = false;

 man1 = createSprite(0,750,20,20)
 man1.addAnimation("m1",man1_img)

 man2 = createSprite(displayWidth,750,20,20)
 man2.addAnimation("m2",man2_img)

 man3 = createSprite(-100,700,20,20)
 man3.addAnimation("m3",man3_img)

 helicopter = createSprite(10,150,50,50)
 helicopter.addAnimation("h",helicopter_img)
 textSize(30)
 fill("white")
}

function draw() {
  
  if(mode===0){
background(bgstart)
text("Mission to eradicate Coronoa", displayWidth/2,displayHeight/2)
text("Press Enter to play",500,700)

  }
if(mode===1){
  background(bg);  
helicopter.velocityX = 2
if(helicopter.x>displayWidth){
  helicopter.x = 0
}
  man1.velocityX = 2;
  if(man1.x>displayWidth){
    man1.x = 0
  }

  man2.velocityX = -2;
  if(man2.x<0){
    man2.x = displayWidth
  }

  man3.velocityX = 5;
  if(man3.x>displayWidth){
    man3.x = 0
  }
  for (var i =0;i<enemies.length;i++){
    enemies[i].display();
    enemies[i].move();

//remmoving the enemies on touching it
  if(enemies[i].hits(player)){
    //console.log("xyz")
    enemies.splice(i,1)
    
  }
  

  /*if(enemies[i].infects(victim)){
    //console.log("hit")
    warning.visible = true;
  }*/
  /*if(enemies[i].infects1(victim2)){
    //console.log("hit")
    warning1.visible = true;
  }*/

  }

 if (World.frameCount%20===0){
   var enemy = new Virus(600,-10)
   enemies.push(enemy)
   
 }

 
 player.x = mouseX+20
 
 if(player.x>displayWidth/2){
   player.changeImage("sRight", sR_img)

 }

 if(player.x<displayWidth/2){
  player.changeImage("sleft", sL_img)
  
}
 


 victim.display();
 victim2.display();

 if(keyCode===32){
   spawnSpray()
 }
bus1.velocityX = -3


 drawSprites();

}
}

function spawnSpray(){
  if(World.frameCount%100===0){
    spray = createSprite(helicopter.x,helicopter.y+20,20,20)
    spray.addImage("s",spray_img)
    spray.velocityY = 8;
    spray.scale = 0.5
  
}
}

function keyPressed(){
  if(keyCode===ENTER){
    mode = 1

  
  }
}