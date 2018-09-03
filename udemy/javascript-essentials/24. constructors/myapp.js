function Apple( x, y, color, score )
{   
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

Apple.prototype = {
	eat : function(){return "eat the apple";},
	throw : function(){return this;}
};

var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );


console.log(apple1.eat());

//cambiar una nueva propriedad o metodo al prototipo
Apple.prototype.eat = function(){return "eat the apple again!!"};