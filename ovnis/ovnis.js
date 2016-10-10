var contador = 0;
var disparados = 0;
var contarBombas = 1;

//empieza el juego
function comienza(){
	crearOvni();
}

//crea el ovni
function crearOvni(){
	//creo la capa
	var nuevoOvni = document.createElement("div");
	//le asigno la clase
	nuevoOvni.id = "ovni";
	//asigno el evento onclick 
	nuevoOvni.style.backgroundImage = "url('img/ufo.png')";
	//lo añado al contenedor
	nuevoOvni.setAttribute("onclick", " ");
	document.getElementById("contenedor").appendChild(nuevoOvni);
	mueveOvni();
}

//mover ovni
function mueveOvni(){
	//toma el objeto de la capa ovni a través de su id
	var capaOvni = document.getElementById("ovni");
	//obtener posición left
	var intervalo = setInterval(function(){
		//se le asigna la nueva posición left
		//si no ha llegado al final vuelve a moverse
		if (capaOvni.offsetLeft <= 1190){
			capaOvni.style.left = (capaOvni.offsetLeft + 5) + "px";
		}else{
			//si ha llegado al final se elimina capa
			capaOvni.parentNode.removeChild(capaOvni);
			clearInterval(intervalo);
		}
	}, 100);
}

//función de crear bombas
function bombas(){
	var nuevaBomba = document.createElement("div");
}

//lanzar bombas
function lanzar(){

}

/*

//lanzar bombas
//Funcion para crear las bombas, le doy su clase, le digo el color aleatorio que tendra, su sitio de aparicion, el onlick, su id.
function lanzarBombas() {
	//crear capa bomba
    var divBombas = document.createElement("div");
    //asigna clase
	divBombas.className = "bombas";
	//Color aleatorio
	var tipoBomba = Math.floor(getRand(1, 4));
	divBombas.style.backgroundImage = "url(img/bombas" + tipoBomba + ".jpg)";
    //Left aleatorio
	divBombas.style.left = getRand(0, 1550) + "px";
    //Top comienza en lo alto del agua
	divBombas.style.top = 90 + "px";
	//agregamos la capa bombas a la back
    document.getElementById("back").appendChild(divBombas);
    //Le doy un  id a las bombas
    divBombas.id = contador + "bombas";
	contador++;
    //Aqui llamo a la funcion caidaBombas para el movimiento
    caidaBombas(divBombas.id);

}

//caida bombas
//Funcion con intervalo para genera el movimiento(caida) de la bombas
function caidaBombas(id) {
	//Obtengo el objeto capa de la bombas
    var miBombas = document.getElementById(id);
	//Incrementa el top hasta que llega a 420
    var idInterval = setInterval(function () {
		//Calcula su top lo mismo que offsetTop
        var topBomba = parseInt(miBombas.style.top);
        if (topBomba < 850) {
            miBombas.style.top = (topBomba += 10) + "px";
        } else {
            clearInterval(idInterval);
        }
    }, 50)
}

//crear divArboles
 //Funcion para crear los divArboles
function creardivArbol() {
    var divArbol = document.createElement("div");
    //Asigna clase
	divArbol.className = "divArbol";
    //Asigna evento onclick
	divArbol.onclick = seleccion;
	//Posiciona left
    divArbol.style.left = getRand(50, 1550) + "px";
	//Posiciona top
    divArbol.style.top = getRand(50, 550) + "px";
    //Le asigno un id al pez
	divArbol.id = contarBombas;
	//le inicializo el value a 0
    divArbol.value = 0;
	//incrementamos el contador
    contarBombas++;
	//directamente añado la capa pez a la back
    document.getElementById("back").appendChild(divArbol);
    //Defino que tipo de pez sera, la funcion "getRand" esta definida al final que es una funcion para crear aleatorios definiendo un minimo y un maximo, en este caso da resultados entre 1 y 4.99999.. y el math floor me da el entero(1,2,3,4)
    var tipoPez = Math.floor(getRand(1, 5));
	divArbol.style.backgroundImage = "url(images/arbol.jpeg)";
}

//desde aqui empieza
function borrar(bombas) {
    bombas.parentNode.removeChild(bombas);
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}



function dispara(capa){
	disparados++;
	//Elimino capa
	capa.parentNode.removeChild(capa);
	//Incremento el valor de aciertos
	document.getElementById("mensaje").innerHTML = disparados;
}*/