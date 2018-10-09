//inicio variables
var velocity = 100;
var change = 1000;
var maxHorizontalChange = 50;
var maxVerticalChange = 50;
var horizontal;
var vertical;
var horizontalDecline = 100;
var verticalDecline = 100;
var horizontalDirection = true;
var verticalDirection = true;
var horizontalBuzz;
var verticalBuzz;

//se inicia el juego
function start() {
    position();
    fly(horizontal, vertical);
    animate();
    cambiar();
    reiniciar();

    document.getElementById('buzz').style.visibility = "visible";
    document.getElementById("start").disabled = true;
}

//posiciona la buzz
function position() {
    if (document.all) {
        horizontal = document.body.clientWidth;
        vertical = document.body.clientHeight;
    } else if (document.getElementById && !document.all) {
        horizontal = window.innerWidth;
        vertical = window.innerHeight;
    }
}

//para fly la buzz
function fly(horizontalPosition, verticalPosition) {
    document.getElementById('buzz').style.top =
        parseInt(document.getElementById('buzz').style.top) + verticalPosition + "px";
    document.getElementById('buzz').style.left =
        parseInt(document.getElementById('buzz').style.left) + horizontalPosition + "px";
}

function animate() {
    horizontalPosition = parseInt(document.getElementById('buzz').style.left);
    verticalPosition = parseInt(document.getElementById('buzz').style.top);

    if (verticalDirection) {
        if ((verticalPosition) > (vertical - 75)) {
            verticalDirection = false;
            fly(0, -verticalDecline);
        } else {
            fly(0, verticalDecline);
        }
    } else {
        if ((verticalPosition) < 75) {
            verticalDirection = true;
            fly(0, verticalDecline);
        } else {
            fly(0, -verticalDecline);
        }
    }

    if (horizontalDirection) {
        if ((horizontalPosition) > (horizontal - 75)) {
            horizontalDirection = false;
            fly(-horizontalDecline, 0);
        } else {
            fly(horizontalDecline, 0);
        }
    } else {
        if ((horizontalPosition) < 75) {
            horizontalDirection = true;
            fly(horizontalDecline, 0);
        } else {
            fly(-horizontalDecline, 0);
        }
    }
    setTimeout('animate()', velocity);
}

//change de posición de la buzz
function cambiar() {
    horizontalDirection = (Math.floor(Math.random() * 2) == 0);
    verticalDirection = (Math.floor(Math.random() * 2) == 0);
    horizontalDecline = Math.floor(Math.random() * maxHorizontalChange);
    verticalDecline = Math.floor(Math.random() * maxVerticalChange);
    setTimeout('cambiar()', change);
}

//cazar la buzz
function killbuzz() {
    document.getElementById('buzz').style.visibility = "hidden;";
    console.log("Abeja Cazada");
    document.getElementById("container").innerHTML = "Abeja Cazada!";
}

//reiniciar el juego
function reiniciar() {
    setTimeout("window.onresize = restart", 400);
}

function restart() {
    window.location.reload();
}

//volver a reposicionar la buzz
window.onresize = position;