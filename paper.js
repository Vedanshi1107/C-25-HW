class paper{
     constructor(x,y){
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction': 0.5,
            'density':1.2
        }
        this.body = Bodies.cricle(x,y,options);
        this.width = width;
        this.heigth = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
     
}













