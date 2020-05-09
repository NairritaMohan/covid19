class Victim {
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 70
        this.height = 200
        this.image = loadImage("sprites/man.png")

    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
    }
}