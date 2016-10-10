//Se ejecuta al finalizar la carga de la página
window.onload=function(){
//Asignamos funciones a los eventos onclick de los dos botones
 document.getElementById("rellenar").onclick = rellenarCapa;
 document.getElementById("crear").onclick = creaCapa;
}

//Cada vez que pulsamos el botón creamos una capa dentro del contenedor hasta un max de 9
function creaCapa(){
    //En una variable tomamos la capa contenedora
    var capaContenedor = document.getElementById("contenedor"); 
    //Nos da el numero de capas actuales
    //ojo que childnodes crea hijos con saltos de línea
    var longitud = capaContenedor.childNodes.length;
    //mostrar en consola
    //console.log ("num capas hijas=" + longitud);
    //Si hay menos de 9 capas
    if (longitud < 9){
        //Crea nueva capa
        var capa = document.createElement("div");
        //La añadimos a la capa conteneor
        capaContenedor.appendChild(capa);
    }    
}
    
//Cambiar contenido y estilo de las capas creadas    
function rellenarCapa(){
    //En un array metemos todos los div que haya
    //dentro de la capa #contenedor
    var capaHija = document.querySelectorAll("#contenedor div");
    //Recorro este conjunto de capas
    //Desde 0 hasta longitud -1 
    for (i = 0; i < capaHija.length; i++){
        //Cambia su HTML por el indice +1 
        //capaHija[i].innerHTML=i+1;
        //Cambia su CSS 
        //Si es par --> negro e impar --> cyan
        capaHija[i].style.background = (i % 2 == 0) ? "black" : "cyan";
    }
    
}
