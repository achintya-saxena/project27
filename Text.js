class Text{

    constructor(x,y,width,height)  {
      var options={
       isStatic:true  
      }  
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width
     this.height=height
     this.image=loadImage("newton text.PNG");
     World.add(world,this.body);   
    } 
   display() {
    var pos=this.body.position;  
    imageMode(CENTER);
    fill("lightBlue");
    stroke("yellow");
    strokeWeight(4);
    image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
   
   }