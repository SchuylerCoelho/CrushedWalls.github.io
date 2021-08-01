class Paper{
    constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2)
		World.add(world, this.body);
        this.image=loadImage("paper.png");

	}
	display()
	{
			var rubberpos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(rubberpos.x, rubberpos.y);
           // rotate(angle);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            image(this.image,0,0,this.r,this.r)
			pop()
	}


}