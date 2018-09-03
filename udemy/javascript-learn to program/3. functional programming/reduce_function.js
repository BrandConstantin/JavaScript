var arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayA.reduce(function(prev, curr, index, arrayA){
	return prev + curr;
}, 0); //se inicializa en 0

//resultado 29

////////////////////////////////
//el mismo resultado con:
arrayA.reduce(function(prev, curr){
	return prev + curr;
}, 0);