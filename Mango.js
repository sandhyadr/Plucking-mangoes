class Mango{
    constructor(x,y,radius){
    var options ={
      isStatic :true,
      restitution:0,
      friction:1
    }
    this.radius =radius;
    this.body = Bodies.circle(x, y, radius, options);
     this.image = loadImage("images/mango.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
  }
  