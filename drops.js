class Drop {
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.isCollide = false
        this.colour = 255
    }

    display(){
        rectMode(CENTER)
        fill(this.colour)
        rectMode(this.x,this.y,this.width,this.height)



    }

    sanitize(){
        this.y = this.y -5
    }

    coll(){
        if (this.isCollide === true){
            this.colour = true
                       } else {
                           this.color = 255                  
                        }
    }
   

}
