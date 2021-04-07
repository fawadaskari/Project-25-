class Paper{
	constructor(x,y,r){
	this.image=loadImage("paper.png")
	var options = {
        isStatic:false,
		'restitution':0.3,
		'friction':5,
		'density':1
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display(){
			var angle = this.body.angle
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			rectMode(CENTER)
			fill(255);
			imageMode(CENTER)
			image(this.image,0,0,this.r);
			pop()
	}

}