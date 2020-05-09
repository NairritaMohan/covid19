class Virus{
    constructor(x,y){
        this.x = random(width)
        this.y = y
        this.height = 50
        this.width = 100
        this.angle = 0
        this.isCollide = false
        this.colour = 255
        this.image = loadImage("sprites/sprite_0.png")

    }
//collision function
    hits(player){
if(player.x-this.x < player.width/2+ this.width/2 
    && this.x - player.x < player.width/2 +this.width/2
    && player.y - this.y < player.height/2 + this.height/2
    && this.y -  player.y < player.height/2 + this.height/2){
        return true
    }
    
    
  
    }


    //collision function
    infects(victim){
        if(victim.x-this.x < victim.width/2+ this.width/2 
            && this.x - victim.x < victim.width/2 +this.width/2
            && victim.y - this.y < victim.height/2 + this.height/2
            && this.y -  victim.y < victim.height/2 + this.height/2){
                return true
            }
            }

             //collision function
    infects1(victim2){
        if(victim2.x-this.x < victim2.width/2+ this.width/2 
            && this.x - victim2.x < victim2.width/2 +this.width/2
            && victim2.y - this.y < victim2.height/2 + this.height/2
            && this.y -  victim2.y < victim2.height/2 + this.height/2){
                return true
            }
            }
 display(){
     angleMode(DEGREES)
     push()
     translate(this.x,this.y)
     rotate(this.angle)
     fill(this.colour)
     
     
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.hieght);
     this.angle = this.angle + 5
     pop()



 }
 coll(){
     if (this.isCollide === true){
         this.colour = true
                    } else {
                        this.color = 255                  
                     }
 }

 move(){
     this.y = this.y+5
 }

}