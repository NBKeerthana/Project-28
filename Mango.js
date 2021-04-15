class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.image = loadImage("Plucking mangoes/mango.png")
        this.body = Bodies.circle(x,y,r,options)
        this.r = r
        World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        imageMode(RADIUS)
        image(this.image,0,0,this.r*5,this.r*5)
        pop()
    }
}
