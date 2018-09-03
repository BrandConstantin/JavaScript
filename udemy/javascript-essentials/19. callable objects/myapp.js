// objetos...
var name1 = { firstname: "Lawrence ", lastname: "Turton"  };

const name2 = { firstname: "John ", lastname: "Doe"  };

console.log(
    name( name1 ),
    name( name2 )
);


function name( fullname ){
	function concat(name){
		return "MR. " + name;
	}
	
	return fullname.firstname + fullname.lastname;
}


// There are callable objects
function embed( run )
{
    return run();
}

var name3 = function() { return "John Lock"  };

const name4 = function() { return "Stephanie Lock" };

console.log(
    embed( name3 ),
    embed( name4 )
);