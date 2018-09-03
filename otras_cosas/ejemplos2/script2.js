//4. onclick2
window.onload = function(){
 	document.getElementById("boton").onclick = cambiarOtroTxt;   
} 
   
function cambiarOtroTxt(){
 	document.getElementById("miTexto").value="Buenas Noches!";   
}

//4. onclick2
function cambiar(){	
	document.getElementById("nombre").innerHTML = "Miguel";
}

//5. onkeyup
function comprobar(){
	var edad = document.getElementById("edad").value;
	var mensaje;
	
	//el mensaje se traduce asi
    //si edad es mayor o igual a 18 la persona el 'Mayor' sino 'Menor'
    mensaje = (edad >= 18) ? "Eres 'mayor' de edad" : "Eres 'menor' de edad";
	
	document.getElementById("mensaje").innerHTML = mensaje;
}

//6. value.length
function contar(elemento){
	var longitud = elemento.value.length;
	
	document.getElementById("contadorLetras" + elemento.id).innerHTML = "Letras: " + longitud;
}