

var player;
var enemy;
var enemies=[]
var drops = []
var bg 
var man 
var warning, warning_img;


function preload(){
  bg = loadImage("sprites/bg.jpg")
warning_img = loadImage("sprites/warning.png")

}



function setup() {
 
  createCanvas(1200,800);
  
 player = new Sanitizer(40,450);
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


}

function draw() {
  background(bg);  
  for (var i =0;i<enemies.length;i++){
    enemies[i].display();
    enemies[i].move();

//remmoving the enemies on touching it
  if(enemies[i].hits(player)){
    //console.log("xyz")
    enemies.splice(i,1)
    
  }
  

  if(enemies[i].infects(victim)){
    //console.log("hit")
    warning.visible = true;
  }
  if(enemies[i].infects1(victim2)){
    //console.log("hit")
    warning1.visible = true;
  }

  }

 if (World.frameCount%20===0){
   var enemy = new Virus(600,-10)
   enemies.push(enemy)
   
 }

 
 player.display(200,200)

 victim.display();
 victim2.display();

 drawSprites();

}