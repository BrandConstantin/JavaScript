function separarFrase(formulario){
	var palabras = new Array();

	palabras = formulario.frase.value.split(" ");
	window.document.write("<h1>Las palabras son: </h1><br>");
	for(var i = 0; i < palabras.length; i++){
		window.document.write(i + 1 + ") ");
		window.document.write(palabras[i] + "<br>");
	}
}