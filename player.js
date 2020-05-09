class Sanitizer{
  constructor(x,y){
   this.x=x
   this.y =y
   this.width =  50
   this.height = 50
   this.image = loadImage("sprites/sanitizer2.png")
  }

  
  display(){
    this.x = mouseX
    this.y = mouseY
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height);
      
  }
 
}