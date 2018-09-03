function sumNaturalNos(n){
	return 0;
}

function range(start, end, step){
	var res = [];
	var item = start;
	
	while(item <= end){
		res.push(item);
		
		item += step;
	}
	
	return res;
}

function sumNaturalNos(n){
	return range(1, n, 1).reduce(function(prev, curr){
		return prev + curr;
	});
}