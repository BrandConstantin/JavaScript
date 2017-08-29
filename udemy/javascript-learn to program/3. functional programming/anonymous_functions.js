function num_printer(upto, filter){
	for(var o = 0; o <= upto; o++){
		if(filter(o){
			confole.log(o);
		}
	}
}

function is_odd(n){
	return n % 2 != 0;
}

num_printer(10, is_odd);