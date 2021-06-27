class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
        
    fly(){
        this.sling.bodyA = null;
    }

    display(){
 var pointA = this.sling.bodyA;
  var pointB = this.pointB;            
            
  push();
           
            stroke(48,22,8);
            
            
  pop();
        }
    
    }
