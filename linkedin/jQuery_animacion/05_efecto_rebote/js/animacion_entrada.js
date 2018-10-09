//índice del listado que define el elementos que ha de mostrarse
var indiceShow = 0;
//listado jquery de elementos
var $elementos;

//función ejecutora del efecto
function muestra(_elementos) {
    $elementos = _elementos;
    $elementos.css("opacity", 0);
    $elementos.css("visibility", "hidden");
    indiceShow = 0;
    showNext();
}

function showNext() {
    $elementos.eq(indiceShow)
        .css("visibility", "visible")
        .animate({
            opacity: 1,
        }, 500);

    indiceShow++;

    if (indiceShow < $elementos.length) {
        setTimeout(showNext, 200);
    }
}