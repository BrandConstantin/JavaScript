var level = 1;
var idCherry = 0;
var pacman;
var ghost;
var timeLeft = 50;

var widthScreen = parseInt(screen.width - 300);
var heightScreen = parseInt(screen.height - 300);

// empezar la partida
function newGame() {
    // creamos el container
    /*document.getElementById("container").style.width = (widthScreen - 200) + "px";
    document.getElementById("container").style.height = (heightScreen - 200) + "px";*/

    // se eliminan todas las capas del contenedor si hay algo
    var containerLayers = document.querySelectorAll("#container div");
    for (var i = 0; i < containerLayers.length; i++) {
        containerLayers[i].parentNode.removeChild(containerLayers[i]);
    }

    // deshabilitar el boton de nueva partida
    document.getElementById("buttonForNew").disabled = true;
    // reestablecer el nivel y ocultar mensaje de game over
    document.getElementById("gameOver").style.display = "none";
    level = 1;
    document.getElementById("level").innerHTML = "Nivel: 1";

    // crear el pacman y el ghost
    pacman = document.createElement("div");
    pacman.id = "pacman";
    ghost = document.createElement("div");
    ghost.id = "ghost";

    // se le asigna posiciones en el tablero al pacman y ghost
    var topPacman = Math.floor(Math.random() * heightScreen + 60);
    pacman.style.top = topPacman + "px";
    var leftPacman = Math.floor(Math.random() * widthScreen);
    pacman.style.left = leftPacman + "px";

    var topGhost = Math.floor(Math.random() * heightScreen + 60);
    ghost.style.top = topGhost + "px";
    var leftGhost = Math.floor(Math.random() * widthScreen);
    ghost.style.left = leftGhost + "px";

    // añadimos el ghost y pacman al container
    document.getElementById("container").appendChild(pacman);
    document.getElementById("container").appendChild(ghost);

    // hacer que se mueva el pacman
    pacman.setAttribute("onclick", "newPosition()");

    // perseguir al pacman
    chase();
}

function newPosition() {
    // creo la cereza
    var cherry = document.createElement("div");
    cherry.id = "cherry" + idCherry;
    cherry.className = "cherry";
    idCherry++;

    cherry.style.top = pacman.offsetTop + "px";
    cherry.style.left = pacman.offsetLeft + "px";

    // mostrar la cereza
    document.getElementById("container").appendChild(cherry);

    // cambiar de positción a pacman
    var topPacman = Math.floor(Math.random() * heightScreen + 60);
    pacman.style.top = topPacman + "px";
    var leftPacman = Math.floor(Math.random() * widthScreen);
    pacman.style.left = leftPacman + "px";

    // subo de nivel
    level++;
    document.getElementById("level").innerHTML = "Nivel: " + level;
}

// perseguir
function chase() {
    // recojo las posiciones del ghost y del pacman
    var topPacman = pacman.offsetTop;
    var leftPacman = pacman.offsetLeft;
    var topGhost = ghost.offsetTop;
    var leftGhost = ghost.offsetLeft;

    // compruebo la distancia entre los dos para moverlos
    if (leftGhost < leftPacman) {
        leftGhost++;
        ghost.style.left = leftGhost + "px";
    } else if (leftGhost > leftPacman) {
        leftGhost--;
        ghost.style.left = leftGhost + "px";
    }

    if (topGhost < topPacman) {
        topGhost++;
        ghost.style.top = topGhost + "px";
    } else if (topGhost > topPacman) {
        topGhost--;
        ghost.style.top = topGhost + "px";
    }

    // llamo recursivamente a la función perseguir hasta que el ghost alcanza al pacman
    if (leftGhost == leftPacman && topGhost == topPacman) {
        // se habilita el boton de partida nueva y el cartel de game over, también se elimina la campa del pacman
        document.getElementById("buttonForNew").disabled = false;
        document.getElementById("gameOver").style.display = "block";

        pacman.parentNode.removeChild(pacman);
    } else {
        // si no se alcanza el pacman se vuelve a llamar a perseguir 
        setTimeout("chase()", (timeLeft / level));
    }
}