function nuevoColor(){
	//Crear nuevo elemento de tipo p
	var nuevoP = document.createElement("p");
	//Al nuevo elemento le asigno el valor del input text
	nuevoP.innerHTML = document.getElementById("texto").value;

	var element = document.getElementById("div");
	//obtenemos el obj del parrafo2
	var parrafo2 = document.getElementById("p2");
	//añadimos como hijo de la capa justo antes del parrafo2
	element.insertBefore(nuevoP, parrafo2);
}