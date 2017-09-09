//1. create element
function nuevoElemento(){
	//Crear nuevo elemento de tipo p
	var nuevoP = document.createElement("p");
	
	//Al nuevo elemento le asigno el valor del input text
	nuevoP.innerHTML = document.getElementById("texto").value;
	
	//añadir el elemento nuevo como nuevo hijo del elemento capa    
	var elemento = document.getElementById("div");
	elemento.appendChild(nuevoP);	
}

//2. create element before
function nuevoColor(){
	//Crear nuevo elemento de tipo p
	var nuevoC = document.createElement("p");
	
	//Al nuevo elemento le asigno el valor del input text
	nuevoC.innerHTML = document.getElementById("texto").value;
	
	var element = document.getElementById("div");
	
	//obtenemos el obj del parrafo2
	var parrafo = document.getElementById("c2");
	//añadimos como hijo de la capa justo antes del parrafo
	element.insertBefore(nuevoC, parrafo);
}

//3. onmouseover
//comentado para que funcione el ejercicio de abajo
/*window.onload = function(){
    document.getElementById("imagen").onmouseover = cambiar;
    document.getElementById("imagen").onmouseout = cambiar;
}

function cambiar(){
    document.getElementById("imagen").src = (document.getElementById("imagen").src.match("flor"))?"img/arbol.jpeg":"img/flor.png";   
}
*/
//4. onclick
window.onload = function(){
	document.getElementById("frase").onclick = cambiarTexto;   
}

function cambiarTexto(){
	var elemento = document.getElementById("frase");
	elemento.style.color = "red";
	elemento.innerHTML = "cambiando de color ....";
}