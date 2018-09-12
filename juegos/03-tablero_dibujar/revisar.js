// Función getId -> Para ahorrarnos el tener que escribir document.getElementById("elemento") todo el rato.
function getId(element) {
    return document.getElementById(element);
}
var paint = false;
var activeColor = "";



/* función createEvent *****************************************/
var createEvent = function() {
    function w3c_crearEvento(elemento, evento, mifuncion) {
        elemento.addEventListener(evento, mifuncion, false);
    }

    function ie_crearEvento(elemento, evento, mifuncion) {
        var fx = function() {
            mifuncion.call(elemento);
        };

        // Enlazamos el evento con attachEvent. Cuando usamos attachEvent
        // dejamos de tener acceso al objeto this en mifuncion. Para solucionar eso
        // usaremos el método call() del objeto Function, que nos permitirá
        // asignar el puntero this para su uso dentro de la función. El primer
        // parámetro que pongamos en call será la referencia que se usará como 
        // objeto this dentro de nuestra función. De esta manera solucionamos el problema
        // de acceder a this usando attachEvent en Internet Explorer.

        elemento.attachEvent('on' + evento, fx);
    }

    if (typeof window.addEventListener !== 'undefined') {
        return w3c_crearEvento;
    } else if (typeof window.attachEvent !== 'undefined') {
        return ie_crearEvento;
    }
}(); // <= Esta es la parte más crítica - tiene que terminar en ()


/* iniciamos todo *****************************************/
createEvent(window, "load", start);
/*window.onload = function() {
    //asignamos las funciones a los eventos onclick de los botones
    start();
};*/


/* función start *****************************************/
function start() {
    //dibujar el tablero
    createBoard();

    console.log(document.getElementsByClassName('selected')[0].className);

    // activamos el color seleccionado
    var colorTable = getId("palette");

    var cellColor = colorTable.getElementsByTagName("td");
    for (var i = 0; i < cellColor.length; i++) {
        createEvent(cellColor[i], "click", detectColor());
    }

    // si usamos internet explorer
    if (navigator.appName.indexOf("Explorer") != -1) {
        // Usaremos className en lugar de classList
        activeColor = colorCell[0].className.split(" ")[0];
    } else {
        activeColor = colorCell[0].classList[0];
    }

    // al tablero le asignamos el evento click para activar/desactivar la pintura
    var board = getId("board");
    var cellBoard = board.getElementsByTagName("td");

    for (var i = 0; i < cellBoard.length; i++) {
        createEvent(cellBoard[i], "click", activateBrush);
    }

    // al tablero le asignamos el evento mouseover para pintar
    board = getId("board");
    cellBoard = board.getElementsByTagName("td");
    for (var i = 0; i < cellBoard.length; i++) {
        createEvent(cellBoard[i], "mouseover", paintBoard);
    }
}



/* función para dibujar el tablero *****************************************/
function createBoard() {
    var newTable = document.createElement("table");
    newTable.setAttribute("border", "1");
    newTable.setAttribute("solid", "red");
    newTable.setAttribute("id", "board");
    newTable.setAttribute("class", "board");

    /*var titleBoard = document.createElement("caption");
    var titleContent = document.createElement("Click en celda para activar o desactivar el pincel");
    titleBoard.appendChild(titleContent);
    newTable.appendChild(titleBoard);*/

    // creamos las filas y columnas de la tabla
    // creamos el tamaño de la tabla en función de la resolución de la pantalla
    var widthScreen = screen.width / 13;
    var heightScreen = (screen.height / 21 - 10);

    //console.log(heightScreen);

    var widthCell = parseInt(widthScreen);
    var heightCell = parseInt(heightScreen);

    for (var i = 1; i <= heightCell; i++) {
        var newFile = document.createElement("tr");
        for (var j = 1; j <= widthCell; j++) {
            var newColumn = document.createElement("td");
            newFile.appendChild(newColumn);
        }
        newTable.appendChild(newFile);
    }

    // la tabla creada la metemos dentro del DIV drawingArea.
    getId("drawingArea").appendChild(newTable);
}



/* función activateBrush *****************************************/
function activateBrush(evt) {
    if (paint) {
        getId("brush").childNodes[0].nodeValue = "Pincel desactivado ...";
        paint = false;
    } else {
        getId("brush").childNodes[0].nodeValue = "Pincel activado ...";
        paint = true;

        // Si estamos usando Internet Explorer
        // Tendremos que usar className en lugar de classList
        if (navigator.appName.indexOf("Explorer") != -1) {
            this.className = activeColor;
        } else {
            this.classList.add(activeColor);
        }
    }
}



/* función paint *****************************************/
function paintBoard(evt) {
    var newColor = activeColor;

    if (paint) {
        // si estamos usando Internet Explorer tendremos que usar className en lugar de classList
        if (navigator.appName.indexOf("Explorer") != -1) {
            this.className = activeColor;
        } else {
            for (var i = 0; i < this.classList.length; i++) {
                this.classList.remove(this.classList[i]);
            }

            // Pintamos con el color que está activo.
            this.classList.add(activeColor);
        }
    }
}



/* función detectColor *****************************************/
function detectColor() {
    console.log(document.getElementsByClassName('selected')[0].className);

    // Revisamos todos los elementos de la tabla colores y si encontramos alguno que tenga
    // más de una clase CSS eliminamos la segunda que es la clase seleccionado
    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
        // Si estamos usando Internet Explorer
        if (navigator.appName.indexOf("Explorer") != -1) {
            // Usaremos className en lugar de classList
            this.parentNode.childNodes[i].className = this.parentNode.childNodes[i].className.replace(/\bselected\b/, '');
        } else
            this.parentNode.childNodes[i].classList.remove("selected");
    }

    // Si estamos usando Internet Explorer
    if (navigator.appName.indexOf("Explorer") != -1) {
        // Tendremos que usar className en lugar de classList
        activeColor = this.className;
        this.className += " selected";
    } else {
        activeColor = this.classList[0];
        this.classList.add("selected");
    }
}