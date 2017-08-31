function sum(){
	var args = Array.prototype.slice.call(arguments);
	
	return args.reduce(function(prev, curr){
		if(!isNaN(curr)){
			return prev + curr;
		}else{
			throw Error("Non numeric argument: " + curr);
		}
	}, 0);
}

function test(){
	try{
		sum(2, 4, "s");
	}catch(error){
		console.log(error);
	}
	console.log("Doing something else!");
}