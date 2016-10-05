function contar(elemento){
	var longitud = elemento.value.length;
	document.getElementById("numFraze" + elemento.id).innerHTML = longitud;
}
