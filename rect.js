class Rect{
    constructor(x,y,width,height){
        var Options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,Options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        fill ("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
    }
}