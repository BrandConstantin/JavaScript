//Defino variables globales
var altura = 600;
var contador = 0;
var valor1;

var contPez = 1;
var cantComida;
 //Funcion que pone en disable los botones hasta que no se llena 
function inicio() {
    document.getElementById("botonComida").disabled = true;
    document.getElementById("botonPez").disabled = true;
}
 //Funcion que llena la pecera, y deshabilito el boton para que no se puede volver a llenar y habilito el crear peces 
function llenar() {
    document.getElementById("botonLlenar").disabled = true;
	//Ejecuta intervalo funcion incrustada se ejecuta hasta que altura = 20
    var intervalo = setInterval(function () {
        if (altura > 20) {
            altura--;
            document.getElementById("agua").style.height = altura + "px";
        } else {
			//Para el intervalo
            clearInterval(intervalo);
			//Habilita el boton del pez
            document.getElementById("botonPez").disabled = false;

        }
    }, 7) //7 milisegundos
}
 //Funcion para crear los peces, al crear crear el primer pez habilito el boton para la Comida.
function crearPez() {
    document.getElementById("botonComida").disabled = false;
    //creo cada capa de pez, le doy su clase, el onclick, el lugar donde aparecera, un id para el Nºpez y un value para la cantidad de comida
	//Crea capa
    var pececito = document.createElement("div");
    //Asigna clase
	pececito.className = "pececito";
    //Asigna evento onclick
	pececito.onclick = seleccion;
	//Posiciona left
    pececito.style.left = getRand(50, 1550) + "px";
	//Posiciona top
    pececito.style.top = getRand(50, 550) + "px";
    //Le asigno un id al pez
	pececito.id = contPez;
	//le inicializo el value a 0
    pececito.value = 0;
	//incrementamos el contador
    contPez++;
	//directamente añado la capa pez a la pecera
    document.getElementById("pecera").appendChild(pececito);
    //Defino que tipo de pez sera, la funcion "getRand" esta definida al final que es una funcion para crear aleatorios definiendo un minimo y un maximo, en este caso da resultados entre 1 y 4.99999.. y el math floor me da el entero(1,2,3,4)
    var tipoPez = Math.floor(getRand(1, 5));
	pececito.style.backgroundImage = "url(images/fish" + tipoPez + ".png)";
}

 //Funcion para crear la comida, le doy su clase, le digo el color aleatorio que tendra, su sitio de aparicion, el onlick, su id.
function crearComida() {
	//crear capa
    var comidita = document.createElement("div");
    //asigna clase
	comidita.className = "comida";
	//Color aleatorio
    var nuevoColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
	comidita.style.backgroundColor = nuevoColor;
    //Left aleatorio
	comidita.style.left = getRand(0, 1550) + "px";
    //Top comienza en lo alto del agua
	comidita.style.top = 90 + "px";
	//agregamos la capa comida a la pecera
    document.getElementById("pecera").appendChild(comidita);
    //Le doy un  + "comida" al id para que se diferencie del id de pez y asi tendre 1 2 3 para los peces y 1comida 2comida 3comida para las comidas
    comidita.id = contador + "comida";
	contador++;
    //Asignamos el evento onclick a la funcion
	//seleccion
	comidita.onclick = seleccion;
    //Aqui llamo a la funcion caidaComida para el movimiento
    caidaComida(comidita.id);

}

 //Funcion con intervalo para genera el movimiento(caida) de la comida
function caidaComida(id) {
	//Obtengo el objeto capa de la comida
    var miComida = document.getElementById(id);
	//Incrementa el top hasta que llega a 420
    var idinterval = setInterval(function () {
		//Calcula su top lo mismo que offsetTop
        var topreal = parseInt(miComida.style.top);
        if (topreal < 640) {
            miComida.style.top = (topreal += 2) + "px";
        } else {
            clearInterval(idinterval);
        }
    }, 100)
}

 //Aqui esta la funcion para seleccionar el pez y la comida que quiere comerse
function seleccion() {
    //Cree 2 variables globales (valor1 y valor2) y le doy la condicion de que tiene que tener la className pececito para ser guardada 
    //como seleccionada y una vez este el pez seleccionado, si seleccionamos otro pez la seleccion cambia automaticamente a este y si es ota cosa, 
    //tiene que cumplirse que exista ya un valor para la primera seleccion y que la nueva seleccion sea className comida y si se cumple todo
    // borra la comida, aumenta el value del pez y dejo undefined el valor2 para que pueda seguir comiendo y actualizo instantaneamente la cantidad comida por el pez en pantalla.
    if (this.className == "pececito") {
        valor1 = this;
        document.getElementById("contPez").innerHTML = "Pez Nº: " + this.id;
        document.getElementById("comidita").innerHTML = "Comida: " + this.value;
    } else {
		//Si hay pez seleccionado y se trata
		//de una comida
        if ((valor1 != undefined) && (this.className == "comida")) {
            borrar(this);
			//incrementa su valor 
            valor1.value++;
			//actualiza en pantalla
            document.getElementById("comida").innerHTML = "comida: " + valor1.value;					
        }
    }
}

function borrar(comida) {
    comida.parentNode.removeChild(comida);
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}