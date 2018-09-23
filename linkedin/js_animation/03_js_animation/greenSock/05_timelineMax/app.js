var animacion;
var logo;
var btnReiniciar;
//var btnAnimar;
var btnPausar;
var btnReversa;
var btnPlay;
var btnAnimarImg;

window.onload = function() {
    //btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    btnPausar = document.getElementById("btnPausar");
    btnReversa = document.getElementById("btnReversa");
    btnPlay = document.getElementById("btnPlay");
    btnAnimarImg = document.getElementById("btnAnimarImg");
    logo = document.getElementById("logo");
    //btnAnimar.onclick = animar;
    btnAnimarImg.onclick = animarImg;

}

/*function animar() {
    animacion = TweenMax.to(logo, 10, {
        left: 800,
        backgroundColor: "black",
        borderRadius: 100,
        delay: 2,
        //ease: Back.easeOut, //easeIn, easeInOut
        ease: Bounce.easeOut,
        //ease: Elastic.easeOut
        onComplete: animacionTerminada, //onReverse, onStart, onUpdate, onReverseComplete
        onCompleteParams: ["Acción terminada", "Ya!"],
        repeat: 2,
        repeatDelay: 2,
        yoyo: true // regresa "por el mismo camino"
    });


    btnReiniciar.onclick = function() {
        animacion.restart();
    }

    btnAnimar.disabled = true;
}*/

function animacionTerminada(param1, param2) {
    console.log(param1, param2);
}

function animarImg() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    animacion = new TimelineMax({ delay: 2, repeat: 2, repeatDelay: 3, yoyo: true });

    animacion.to(logo, 2, {
            left: 800,
            scale: 0.25
        }, 2.5)
        .staggerTo([img1, img2, img3], 2, {
            left: 600
        }, 0.5);

    btnReiniciar.onclick = function() {
        animacion.restart();
    }

    btnPausar.onclick = function() {
        animacion.pause();
    }

    btnReversa.onclick = function() {
        animacion.reverse();
    }

    btnPlay.onclick = function() {
        animacion.play();
    }
}