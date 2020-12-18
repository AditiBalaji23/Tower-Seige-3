class Hello{
    constructor(x,y,height,angle){
        var options={
            isStatic:true,
            restitution:0.3
            

        }
this.body=Bodies.rectangle(x,y,50,height,options)
this.width=50;
this.height=height;
World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
       rectMode(CENTER)
rect(p.x,p.y,p.width,p.height)
    }
}