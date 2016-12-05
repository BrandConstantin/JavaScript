var contador = 0;
var disparados = 0;
var libres = 0;

function comienza(){
	setInterval("crearPato()", 2000);
}

function crearPato(){
	//Crea capa de patito
	var nuevoPato = document.createElement("div");
	//Le asigno la clase
	nuevoPato.className = "patito";
	
	//Añado al contenedor
    document.getElementById("contenedor").appendChild(nuevoPato);
	//Asigno el evento onclick de dispara
	nuevoPato.setAttribute("onclick", "dispara(this)");
	//Le asigno un id a la capa
    nuevoPato.id = "pato" + contador;
	//Activo el movimiento de la capa
	mueve(nuevoPato.id);
	//incrementamos contador
	contador++;
}

function mueve(patoId){
    //Tomo el objeto de la capa del pato
	//A traves de su id
	var capaPato = document.getElementById(patoId);
	//obtener posición left de la capa pato
    var izda = capaPato.offsetLeft;
	izda += 50;
	//La asigno la nueva posicion left
	capaPato.style.left= izda + "px";
	//Si no esta en el final vuelve a moverse
    if (izda <= 1650) {
		setTimeout("mueve('" + patoId + "')", 500);
	}else {
	//Si ha llegado al final
	//Incremento libres y elimino capa
		libres++;
		document.getElementById("free").innerHTML = libres;
		//Elimino capa
		capaPato.parentNode.removeChild(capaPato);
	}
}

function dispara(capa){
	disparados++;
	//Elimino capa
	capa.parentNode.removeChild(capa);
	//Incremento el valor de aciertos
	document.getElementById("mensaje").innerHTML = disparados;
}