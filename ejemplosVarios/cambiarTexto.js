window.onload = function(){
	document.getElementById("frase").onclick = cambiarTexto;   
}

function cambiarTexto(){
    var elemento = document.getElementById("frase");              
    elemento.innerHTML = "cambiando....";
    elemento.style.color = "grey";

}