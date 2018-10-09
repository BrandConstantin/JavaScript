var imagenes = ["img/pelicano.jpg", "img/jirafa.jpg", "img/panda.jpg",
	 "img/pantera.jpg", "img/leonmarino.jpg", "img/puma.jpg",
	  "img/conejo.jpg", "img/foca.jpg", "img/ballena.jpg"];
var posicion = 0;

function primero(){
	posicion = 0;
	document.images.imagen.src = imagenes[posicion];
	document.formulario.botonAnterior.disabled = true;
	document.formulario.botonSiguiente.disabled = false;
}

function ultimo(){
	posicion = imagenes.length - 1;
	document.images.imagen.src = imagenes[posicion];
	document.formulario.botonAnterior.disabled = false;
	document.formulario.botonSiguiente.disabled = true;
}

function siguiente(){
	posicion++;
	document.images.imagen.src = imagenes[posicion];
	document.formulario.botonAnterior.disabled = false;
	if(posicion == imagenes.length - 1){
		document.formulario.botonSiguiente.disabled = true;
	}
}

function anterior(){
	posicion--;
	document.images.imagen.src = imagenes[posicion];
	document.formulario.botonSiguiente.disabled = false;
	if(posicion == 0){
		document.formulario.botonAnterior.disabled = true;
	}
}