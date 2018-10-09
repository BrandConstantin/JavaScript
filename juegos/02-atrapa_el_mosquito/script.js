var level = 1;

/* function start *************************************************/
function start() {
    deleteAll();

    //crear los div

    //crear el div bebe
    var bebe = document.createElement("div");
    //posicionar el bebe de forma aleatoria en el cuadro game
    var izqBebe = Math.floor(Math.random() * 97);
    bebe.style.left = izqBebe + "%";
    var topBebe = Math.floor(Math.random() * 522);
    bebe.style.top = topBebe + "px";
    //se le asigna un id
    bebe.id = "bebe";
    //se incluye en el cuadro de juego
    document.getElementById("game").appendChild(bebe);

    //crear el div mosquito
    var mosquito = document.createElement("div");
    //posicionar el mosquito de forma aleatoria en el cuadro game
    var izqMosquito = Math.floor(Math.random() * 97);
    mosquito.style.left = izqMosquito + "%";
    var topMosquito = Math.floor(Math.random() * 522);
    mosquito.style.top = topMosquito + "px";
    //se le asigna un id
    mosquito.id = "mosquito";
    //se incluye en el cuadro de juego
    document.getElementById("game").appendChild(mosquito);

    // deshabilitar el boton de start hasta que finalize el juego
    document.getElementById("startButton").disabled = true;

    // si se mata el mosquito se reposiciona
    mosquito.setAttribute("onclick", "newMosquito()");

    // llamar a la función que mueve el mosquito en el cuadro game
    moveMosquito(level);
}

/* function moveMosquito *************************************************/
function moveMosquito(level) {
    //obtener los dos elementos del cuadro de juego: babe y mosquito
    var mosquito = document.getElementById("mosquito");
    var bebe = document.getElementById("bebe");

    //obtengo la posicón de los dos elementos
    var izqBebe = bebe.offsetLeft;
    var topBebe = bebe.offsetTop;
    var izqMosquito = mosquito.offsetLeft;
    var topMosquito = mosquito.offsetTop;

    //comprobamos la distancia entre bebe y mosquito

    //si la izq del mosquito es menos que la del bebe, la incremento para llegar al bebe, si no se descrementa
    if (izqMosquito < izqBebe) {
        //PARA FIREFOX, HAY QUE HABILITAR ESTE INCREMENTO Y DESHABILITAR izqMosquito++;
        //izqMosquito += 4; 
        izqMosquito++;
        mosquito.style.left = izqMosquito + "px";
    } else {
        //PARA FIREFOX, HAY QUE HABILITAR ESTE DECREMENTO Y DESHABILITAR izqMosquito--;
        //izqMosquito += 2; 
        izqMosquito--;
        mosquito.style.left = izqMosquito + "px";
    }

    //si el top del mosquito es menor que el del Bebé, lo incremento para llegar al Bebé. Si no, lo decremento
    if (topMosquito < topBebe) {
        //PARA FIREFOX, HAY QUE HABILITAR ESTE INCREMENTO Y DESHABILITAR topMosquito++;
        //topMosquito +=4; 
        topMosquito++;
        mosquito.style.top = topMosquito + "px";
    } else if (topMosquito > topBebe) {
        //PARA FIREFOX, HAY QUE HABILITAR ESTE DECREMENTO Y DESHABILITAR topMosquito--;
        //topMosquito +=2; 
        topMosquito--;
        mosquito.style.top = topMosquito + "px";
    }

    // si izq y top son iguales el juego a finalizado
    if ((izqMosquito === izqBebe) && (topMosquito === topBebe)) {
        finish();
    }

    // obtengo el level del juego para incrementar velocidad del mosquito
    level = parseInt(document.getElementById("level").innerHTML);
    var incrementLevel = 25 / level;
    setTimeout("moveMosquito('" + level + "')", incrementLevel);
}

/* function finish *************************************************/
function finish() {
    //obtener los dos elementos del cuadro de juego: babe y mosquito
    var mosquito = document.getElementById("mosquito");
    var bebe = document.getElementById("bebe");

    // elimino bebe
    bebe.parentNode.removeChild(bebe);

    // se quita el onclick del mosquito
    mosquito.setAttribute("onclick", "");

    //muestro el mensaje de gameover
    document.getElementById("finish").innerHTML = "GAME OVER!!";

    // se vuelve a habilitar el boton de start
    document.getElementById("startButton").disabled = false;
}

/* function deleteAll *************************************************/
function deleteAll() {
    //elimina los mosquitos del juego anterior
    var deadMosquito = document.querySelectorAll(".deadMosquito");
    var totalMosquitos = deadMosquito.length;
    //y los elimino
    for (i = 0; i < totalMosquitos; i++) {
        deadMosquito[i].parentNode.removeChild(deadMosquito[i]);
    }

    //también elimina el ultimo mosquito
    var oldMosquito = document.getElementById("mosquito");
    if (oldMosquito) {
        oldMosquito.parentNode.removeChild(oldMosquito);
    }


    //eliminar mensaje de game over
    document.getElementById("finish").innerHTML = '';

    //se establece de nuevo el nivel de juego en 1
    lever = 1;
    document.getElementById("level").innerHTML = level;
}

/* function newMosquito() *************************************************/
function newMosquito() {
    level = parseInt(document.getElementById("level").innerHTML);

    // buscar el mosquito vivo y el bebe
    var mosquito = document.getElementById("mosquito");
    var izqMosquito = mosquito.offsetLeft;
    var topMosquito = mosquito.offsetTop;

    // crear div de deadMosquito
    var deadMosquito = document.createElement("div");
    deadMosquito.className = "deadMosquito";
    // se posiciona en el sitio donde estaba el mosquito vivo
    deadMosquito.style.left = izqMosquito + "px";
    deadMosquito.style.top = topMosquito + "px";
    // se incluye en el cuadro de game
    document.getElementById("game").appendChild(deadMosquito);

    // buscar nueva posición para el mosquito vivo
    // si el nuevo mosquito es demasiado cerca del bebe si incrementa en 200px
    var izqMosquito = Math.floor(Math.random() * 97);
    mosquito.style.left = izqMosquito + "%";
    var topMosquito = Math.floor(Math.random() * 522);
    mosquito.style.top = topMosquito + "px";

    incrementLevel();
}

/* function incrementLevel() *************************************************/
function incrementLevel() {
    level++;
    document.getElementById("level").innerHTML = level;
}