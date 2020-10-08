class pigsShallRule {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0,225,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  