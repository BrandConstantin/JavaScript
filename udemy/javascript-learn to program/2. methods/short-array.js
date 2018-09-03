var a = [67, 34, 2, 5, 6, 8];

a.sort();

//result
//2, 34, 5, 6, 67, 8

function num_comp(a, b){
	return (a - b);
}

a.sort(num_comp);

//result
//2, 5, 6, 8, 34, 67

function num_comp(a, b){
	return (b - a);
}

a.sort(num_comp);

//result
//67, 34, 8, 6, 5, 2