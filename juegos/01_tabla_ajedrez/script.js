//se ejecuta al finalizar la carga de la página
window.onload = function() {
    //asignamos las funciones a los eventos onclick de los botones
    document.getElementById("fillLayer").onclick = fillLayer;
    document.getElementById("createLayer").onclick = createLayer;
};

//pulsando el boton de crear, crearemos capas hasta un máximo de 9
function createLayer() {
    //en una variable tomamos la capa contenedora
    var layerContainer = document.getElementById("contenedor");
    //nos da el número de capas actuales
    //childnodes crea hijos con saltos de linea
    var lengthLayer = layerContainer.childNodes.length;
    //mostrar en consola número de capas hijas y si hay menos de 9 se crea
    if (lengthLayer < 200) {
        var layer = document.createElement("div");
        //y lo añadimo a la capa container
        layerContainer.appendChild(layer);
    }
}

//rellenar las capas
function fillLayer() {
    //metemos en un array todos los div que hay en container
    var layerChild = document.querySelectorAll("#contenedor div");
    //recorro el conjunto de capas
    for (var i = 0; i < layerChild.length; i++) {
        //si es par --> negro si es impar --> cyan
        layerChild[i].style.background = (i % 2 == 0) ? "black" : "cyan";
    }
}