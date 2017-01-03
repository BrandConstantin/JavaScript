function add_all(array){
	var sum = 0;
	array.forEach(function(e) {
		sum += e;
	});

	return sum;
}