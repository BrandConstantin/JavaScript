function Circle(r){
	this.radius = r;
	this.area = function(){
		return Math.PI * this.radius * this.radius;
	}
}

var c = new Circle(2);
c.area();