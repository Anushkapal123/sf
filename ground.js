class Ground {
    constructor(x,y,width,height){
var options={
   'restitution':0,
   'friction':0,
  'density':1,
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)
    }
    display(){
    var pos =this.body.position;
push()
    rectMode(CENTER)
   fill("black")
   rect(pos.x,pos.y,this.width,this.height)
   pop()
   }
}