function step_iterator(start, step){
	return function(){
		var res = start;
		
		start += step;
		
		return res;
	}
}