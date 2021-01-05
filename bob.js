class Bob{
    constructor(x, y,r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density : 0.1

        }
        this.body = Bodies.circle(x, y, r, options);
        this.r =r;
        World.add(world, this.body);
        this.image=loadImage("paper.png")
      }
      display(){
      var pos=this.body.position
      var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate (angle)
        imageMode(RADIUS)
         fill(255) 
        image(this.image,0,0,this.r, this.r);

      
        pop();
      }
}