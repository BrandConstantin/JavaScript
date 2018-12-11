var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnPausar;
var btnReversa;
var btnPlay;

window.onload = function() {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
}

function animar() {
    animacion = TweenLite.to(logo, 10, {
        left: 800,
        backgroundColor: "black"
    });


    btnReiniciar.onclick = function() {
        animacion.restart();
    }

    btnAnimar.disabled = true;
}