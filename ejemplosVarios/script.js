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

//create element before
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