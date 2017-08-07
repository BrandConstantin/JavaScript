console.log( myName, printName() );

var myName = "Lawrence";

function printName()
{
    console.log( a, embed() );
    
    var a = 100;
    
    function embed(){ return "hello"; }
    
    return "John Doe";
}

console.log("---------------");

var mySecondName = "Michel";

console.log( mySecondName, printSecondName() );

function embeded(){ return "hello"; }

function printSecondName()
{
	var a = 100;
	
    console.log( a, embeded() );
    
    return "John Doe";
}