class Stone{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.5,
            friction:1,
            density:0.7
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("yellow")
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width, this.height);
        pop();
      }
}