//Creo variables globales
var nivel = 1;
var idCereza = 0;
var pacman;
var fantasma;
var tiempoTimeout = 50;

//Función para comenzar la partida
function nuevaPartida(){
    //Elimino todas las capas dentro del contenedor
    var capasContenedor = document.querySelectorAll("#contenedor div");
    for(var i = 0; i < capasContenedor.length; i++){
        capasContenedor[i].parentNode.removeChild(capasContenedor[i]);
    }
    
    //Oculto el mensaje de game over y restablezco el nivel
    document.getElementById("gameOver").style.display = "none";
    nivel = 1;
    document.getElementById("nivel").innerHTML = "Nivel: " + nivel;
    
    //Creo el pacman y el fantasma y le asigno las id
    pacman = document.createElement("div");
    fantasma = document.createElement("div");
    pacman.id = "pacman";
    fantasma.id = "fantasma";
    
    //Les asigno una posición aleatoria dentro del contenedor.
    var topPacman = Math.floor(Math.random() * 550);
    pacman.style.top = topPacman + "px";
    var leftPacman = Math.floor(Math.random() * 1200);
    pacman.style.left = leftPacman + "px";
    var topFantasma = Math.floor(Math.random() * 550);
    fantasma.style.top = topFantasma + "px";
    var leftFantasma = Math.floor(Math.random() * 1200);
    fantasma.style.left = leftFantasma + "px";
    
    //Le añado el atributo onclick al pacman para moverse de posicion.
    pacman.setAttribute("onclick", "nuevaPosicion()");

    //Añado el pacman y el fantasma al contenedor
    document.getElementById("contenedor").appendChild(pacman);
    document.getElementById("contenedor").appendChild(fantasma);
    
    //Deshabilito el boton nueva partida
    document.getElementById("botonNuevo").disabled = true;
    
    //Llamo a la funcion perseguir
    perseguir();
}

//Funcion para cambiar la posición del pacman
function nuevaPosicion(){ 
    //Creo la capa cereza y le asigno clase,id y la posición actual de pacman
    var cereza = document.createElement("div");
    cereza.id = "cereza" + idCereza;
    cereza.className = "cereza";
    idCereza++;
    cereza.style.top = pacman.offsetTop + "px";
    cereza.style.left = pacman.offsetLeft + "px";
    
    //Le cambio la posición a pacman
    var topPacman = Math.floor(Math.random() * 550);
    pacman.style.top = topPacman + "px";
    var leftPacman = Math.floor(Math.random() * 1200);
    pacman.style.left = leftPacman + "px";
    
    //Aumento el nivel de la partida
    nivel++;
    document.getElementById("nivel").innerHTML = "Nivel: " + nivel;
    
    //Pinto una cereza
    document.getElementById("contenedor").appendChild(cereza);
}

//Función perseguir
function perseguir(){
    //debugger;
    //Recojo las posiciones actuales del fantasma y del pacman
    var topFantasma = fantasma.offsetTop;
    var leftFantasma = fantasma.offsetLeft;
    var topPacman = pacman.offsetTop;
    var leftPacman = pacman.offsetLeft;
    
    //Compruebo la distancia entre ellos para moverlos
    if(leftFantasma < leftPacman){
        leftFantasma++;
        fantasma.style.left = leftFantasma + "px";
    } else if(leftFantasma > leftPacman){
        leftFantasma--;
        fantasma.style.left = leftFantasma + "px";
    }
    if(topFantasma < topPacman){
        topFantasma++;
        fantasma.style.top = topFantasma + "px";
    } else if(topFantasma > topPacman){
        topFantasma--;
        fantasma.style.top = topFantasma + "px";
    } 
    //Llamo recursivamente a la funcion perseguir 
    //hasta que el fantasma alcance al pacman
    if(leftFantasma == leftPacman && topFantasma == topPacman){
        //Habilito el boton nueva partida y muestro el cartel de game over.
        document.getElementById("botonNuevo").disabled = false;
        document.getElementById("gameOver").style.display = "block";
        //Elimino la capa pacman.
        pacman.parentNode.removeChild(pacman);   
    } else { //Si no lo alcanza lo vuelve a llamar
        setTimeout("perseguir()",(tiempoTimeout/nivel));
    }
}