function Shape(){
	this.area = function(){
		return "You need to implement this!";
	}
}

function Square(length){
    this.length = length;
    this.area = function(){
        return this.length * this.length;
    }
}

function Rectangle(height, width){
    this.height = height;
    this.width = width;
	this.area = function(){
		return this.height * this.width;
	}
}

Square.prototype = new Shape();
Rectangle.prototype = new Shape();

new Square(2).area();
new Rectangle(4, 6).area();