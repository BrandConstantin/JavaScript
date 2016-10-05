function nuevoElemento(){
	//Crear nuevo elemento de tipo p
	var nuevoP = document.createElement("p");
	//Al nuevo elemento le asigno el valor del input text
	nuevoP.innerHTML=document.getElementById("texto").value;
	//añadir el elemento nuevo como nuevo hijo del elemento capa    
	var elemento = document.getElementById("div");
	elemento.appendChild(nuevoP);
}