var imagen1 = ["img/pelicano.jpg", "img/leonmarino.jpg", "img/puma.jpg",
	"img/conejo.jpg", "img/foca.jpg", "img/ballena.jpg"];
var imagen2 = ["img/foca.jpg", "img/puma.jpg", "img/panda.jpg"];
var imgActual1 = 0;
var imgActual2 = 1;
var imgActual3 = 2;

function cambiar(){
	document.images.imagenCambiable1.src = imagen2[imgActual1++ % imagen2.length];
	document.images.imagenCambiable2.src = imagen2[imgActual2++ % imagen2.length];
	document.images.imagenCambiable3.src = imagen2[imgActual3++ % imagen2.length];
}