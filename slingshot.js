class SlingShot {

    constructor(b1, p2) {
        var options={
            bodyA:b1,
            pointB:p2,
            lenght:1,
            stiffness:0.04
        }
        this.sling=Constraint.create(options)
        World.add(world, this.sling);

    }

    display() {
        if(this.sling.bodyA){
            var p1 = this.sling.bodyA.position
            var p2 = this.sling.pointB
            strokeWeight(4)
            stroke("blue")
            line(p1.x,p1.y,p2.x,p2.y)
        }

    }

    fly() {
this.sling.bodyA=null;
    }


}