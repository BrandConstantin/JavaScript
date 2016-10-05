window.onload = function(){
    document.getElementById("imagen").onmouseover = cambiar;
    document.getElementById("imagen").onmouseout = cambiar;
}

function cambiar(){
    document.getElementById("imagen").src = (document.getElementById("imagen").src.match("flor"))?"img/arbol.jpeg":"img/flor.png";   
}