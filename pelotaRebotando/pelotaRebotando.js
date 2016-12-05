var x = 0;
var y = 0;
var moviendo = 0; // variable para que inicialmente se inicie el movimiento hacia abajo y derecha

function redimensionar() {
	window.resizeTo(600, 600) ;
}

function movimiento(moviendo){ 
	switch (moviendo){
		case(0): x += 5; y += 5; // abajo-derecha
      		break;
		case(1): x += 5; y -= 5; // abajo-izquierda
    		break;
		case(2): x -= 5; y += 5; // arriba-derecha
            break;
		case(3): x -= 5; y -= 5; // arriba-izquierda
            break;
  	}

	if(document.getElementById){
		document.getElementById('img').style.top = x + "px";
		document.getElementById('img').style.left = y + "px";
	}else if (document.all){ //internet explorer
		document.all.img.style.pixelTop = x;
		document.all.img.style.pixelLeft = y; 
	}else{ //netscape
		document.img.top = x; //abajo
		document.img.left = y;// derecha
	}
  
}
	
function mover() {
	if(x > (390 - 40)){
		(moviendo == 0) ? moviendo = 2 : moviendo = 3;
		// si viene con direccion abajo-derecha la devolvemos  direccion arriba-derecha eoc la devolvemos con direccion arriba-izquierda
	}else if(y > (560 - 40)){
		(moviendo == 0) ? moviendo = 1 : moviendo = 3;
		// si viene con direccion abajo-derecha la devolvemos  direccion abajo-izquierda eoc la devolvemos con direccion arriba-izquierda
	}else if(x < 0){
		(moviendo == 2) ? moviendo = 0 : moviendo = 1;
		// si viene con direccion arriba-derecha la devolvemos  direccion abajo-derecha eoc la devolvemos con direccion abajo-izquierda
	}else if(y < 0){
		(moviendo == 3) ? moviendo = 2 : moviendo = 0;
		// si viene con direccion arriba-izquierda la devolvemos  direccion arriba-derecha eoc la devolvemos con direccion abajo-derecha
	}

	movimiento(moviendo); // Realizamos el movimiento	
	setTimeout( "mover()", 50);
}