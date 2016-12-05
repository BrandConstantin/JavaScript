//inicio variables
var velocidad = 100; 
var cambio = 200; 
var maxCambioHorizontal = 40; 
var maxCambioVertical = 40; 
var horizontal;
var vertical; 
var descensoHorizontal = 4; 
var descensoVertical = 4; 
var direccionHorizontal = true; 
var direccionVertical = true; 


//se inicia el juego
function iniciar() { 
	posicionar(); 
	volar(horizontal / 2, vertical / 2); 
	document.getElementById('abeja').style.visibility = "visible"; 
	animar(); 
	cambiar(); 
	reiniciar();
} 

//posiciona la abeja
function posicionar(){
	if(document.all){
		horizontal = document.body.clientWidth;
		vertical = document.body.clientHeight;
	}else if(document.getElementById && !document.all){
		horizontal = window.innerWidth;
		vertical = window.innerHeight;
	}
}

//para volar la abeja
function volar(posicionHorizontal, posicionVertical){
	document.getElementById('abeja').style.top = 
		parseInt(document.getElementById('abeja').style.top) + posicionVertical + "px";
	document.getElementById('abeja').style.left = 
		parseInt(document.getElementById('abeja').style.left) + posicionHorizontal + "px";
}

function animar() { 
	posicionHorizontal = parseInt(document.getElementById('abeja').style.left); 
	posicionVertical = parseInt(document.getElementById('abeja').style.top); 

	if (direccionVertical){ 
		if ((posicionVertical) > (vertical - 75)){
			direccionVertical = false;
			volar(0, -descensoVertical);
		  }else{
		  	volar(0, descensoVertical); 
		  } 
	}else{ 
		if((posicionVertical) < 75){
			direccionVertical = true;
			volar(0, descensoVertical); 
		}else{
			volar(0, -descensoVertical);
		}
 	} 

	if (direccionHorizontal) { 
		if ((posicionHorizontal) > (horizontal - 75)) {
			direccionHorizontal = false;
			volar(-descensoHorizontal, 0);
		} else {
		 	volar(descensoHorizontal, 0); 
		}
	}else{ 
	  	if ((posicionHorizontal) < 75) {
	  		direccionHorizontal = true;
	  		volar(descensoHorizontal, 0);
	 	} else {
	 		volar(-descensoHorizontal, 0);
	  	}
    } 
	setTimeout('animar()',velocidad);
} 

//cambio de posición de la abeja
function cambiar(){
	direccionHorizontal = (Math.floor(Math.random() * 2) == 0);
	direccionVertical = (Math.floor(Math.random() * 2) == 0);
	descensoHorizontal = Math.floor(Math.random() * maxCambioHorizontal);
	descensoVertical = Math.floor(Math.random() * maxCambioVertical);
	setTimeout('cambiar()', cambio);
}

//cazar la abeja
function abejaCazada(){
	document.getElementById('abeja').style.visibility = "hidden;";
}

//reiniciar el juego
function reiniciar(){
	setTimeout("window.onresize = reinicio", 400);
}

function reinicio(){
	window.location.reload();
}

//volver a reposicionar la abeja
window.onresize = posicionar;