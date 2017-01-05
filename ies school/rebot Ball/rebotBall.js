var x = 0;
var y = 0;
var moving = 0;

function resize(){
	window.resizeTo(100, 100);
}

function movement(moving){
	switch(moving){
		case 0: 
			//down and right
			x += 5;
			y += 5;
		break;
		case 1:
			//down and left
			x += 5;
			y -= 5;
		break;
		case 2: 
			//up and right
			x -= 5;
			y += 5;
		break;
		case 3:
			//up and left
			x -= 5;
			y -= 5;
	}

	if (document.getElementById) {
		document.getElementById('imgMove').style.top = x + "px";
		document.getElementById('imgMove').style.left = y + "px";
	}
}

function move(){
	if(x > (525 - 70)){
		(moving == 0) ? moving = 2 : moving = 3;
	}else if(y > (958 - 70)){
		(moving == 0) ? moving = 1 : moving = 3;
	}else if(x < 0){
		(moving == 2) ? moving = 0 : moving = 1;
	}else if(y < 0){
		(moving == 3) ? moving = 2 : moving = 0;
	}

	movement(moving); 	
	setTimeout( "move()", 30);	
}