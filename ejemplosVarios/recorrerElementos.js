window.onload = function() {
    document.getElementById("boton").onclick = mostrar;
}   

function mostrar(){
    var elementos = document.getElementsByTagName("p");
    for(i = 0; i < elementos.length; i++){
        document.getElementById("capa").innerHTML += elementos[i].innerHTML + "<br>";
    }
}
