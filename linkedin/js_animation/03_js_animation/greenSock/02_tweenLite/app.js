var animacion;
var logo;
var btnReiniciar;
var btnAnimar;

window.onload = function() {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    btnAnimarImg = document.getElementById("btnAnimarImg");
    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
    btnAnimarImg.onclick = animarImg;

}

function animar() {
    animacion = TweenLite.to(logo, 10, {
        left: 800,
        backgroundColor: "black",
        borderRadius: 100,
        delay: 2,
        //ease: Back.easeOut, //easeIn, easeInOut
        ease: Bounce.easeOut,
        //ease: Elastic.easeOut
        onComplete: animacionTerminada, //onReverse, onStart, onUpdate, onReverseComplete
        onCompleteParams: ["Acción terminada", "Ya!"]
    });


    btnReiniciar.onclick = function() {
        animacion.restart();
    }

    btnAnimar.disabled = true;
}

function animacionTerminada(param1, param2) {
    console.log(param1, param2);
}

function animarImg() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    TweenLite.to([img1, img2, img3], 2, { scale: 0.5 });

    /*TweenMax.staggerTo([img1, img2, img3], 2, {
        left: 400
    }, 0.5);*/
}