window.onload = iniciar;

function iniciar() {
    //borramos los cookie existente para empezar de 0
    borrarCookie("visita");

    //cuando se envia el formulario se valida
    document.getElementById("enviar").addEventListener('click', validar, false);
    //convertimos en mayusculas el nombre y los apellidos
    document.getElementById("nombre").addEventListener('blur', convertirMayusculas, false);
    document.getElementById("apellidos").addEventListener('blur', convertirMayusculas, false);
}

/*
 * ***********************************************************/
/* convertir en mayúsculas */
function convertirMayusculas() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

/*
 * ***********************************************************/
/* validar campos */
function validar(eventopordefecto) {
    //introducimos el valor de la coockie almacenada si no almacenamos 1
    var valor = parseInt(leerCookie("visita")) + 1;
    //si la coocke no esta creada se crea y le añadimos el nuevo valor
    crearCookie("visita", valor, 30);
    //mostramos valor coockie incrementado en 1
    document.getElementById("intentos").innerHTML = "Intentos de envio de formulario: " + valor;

    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    if (validarcampostexto(this) && validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && confirm("¿Deseas enviar el formulario?"))
        return true;
    else {
        // Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
        eventopordefecto.preventDefault();
        return false; // Salimos de la función devolviendo false.
    }
}

/*************************************************************/
/* función de borrar los coocke */
//se pone el día en negativo para eliminar el coocke el dia anterior
function borrarCookie(nombre) {
    crearCookie(nombre, "", -1);
}

/*
 * ***********************************************************/
/* funcines para crear y leer  los coocke */
function crearCookie(nombre, valor, dias) {
    //se indica cuantos días tardan en borrarse los cookies si no se indica se eliminarán el cerrar el navegador
    if (dias) {
        var date = new Date();
        //a la fecha actual se le añaden los días recibidos por la función
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        //se almacena la nueva fecha (date + días recibidos)
        var expire = "; expire=" + date.toGMTString();
    } else {
        var expire = "";
    }

    document.cookie = nombre + "=" + valor + expire + "; path=/";
}

function leerCookie() {
    //asignamos nombre al coocke
    var miNombre = nombre + "=";
    //almacenar en array la cadena del coockie
    var cadena = document.cookie.split(";");
    //se recorre el array
    for (var i = 0; i < cadena.length; i++) {
        var c = cadena[i];
        //se eliminan los carácteres en blanco
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(miNombre) == 0) {
            return c.substring(miNombre.length, c.length);
        }

        return 0;
    }
}


/*
 * ************************************************************
 * validar los campos de texto
 */
function validarcampostexto(objeto) {
    // le pasamos todo lo que se envia en un objeto
    var formulario = objeto.form;
    // recoremos todos los input del formulario para ver cuales son de tipo texto
    for (var i = 0; i < formulario.elements.length; i++) {
        // Eliminamos la clase Error que estuviera asignada a algún campo.
        formulario.elements[i].className = "";
        if (formulario.elements[i].type == "text" && formulario.elements[i].value == "") {
            formulario.elements[i].className = "error";
            formulario.elements[i].focus();
            document.getElementById("errores").innerHTML = "ERROR: " + formulario.elements[i].name.toUpperCase() + " no puede estar vacío";
            return false;
        }
    }
    return true; // Si sale de la función con esta instrucción es que todos los campos de texto son válidos.
}


/*
 * ************************************************************
 * solo permitimos edades de hasta 100
 */
function validarEdad() {
    // Si no es número o es inferior a 0 ó superior a 105
    if (isNaN(document.getElementById("edad").value) || document.getElementById("edad").value < 0 || document.getElementById("edad").value > 100) {
        document.getElementById("errores").innerHTML = "ERROR: La edad debe estar entre 0 y 100";
        document.getElementById("edad").className = "error";
        document.getElementById("edad").focus();
        return false;
    }
    // Si llega aquí es que la edad es correcta
    document.getElementById("edad").className = "";
    return true;
}

/*
 * ************************************************************
 * sólo permitimos números de teléfono de 9 dígitos que comiencen por 6 o 9
 */
function validarTelefono() {
    // Comenzará con un 6 ó un 9 y seguirá por 8 dígitos numéricos
    var patron = /^[69]\d{8}$/;
    // Si el dato introducido no cumple el patrón
    if (!patron.test(document.getElementById("telefono").value)) {
        document.getElementById("errores").innerHTML = "ERROR: Sólo teléfonos que comiencen por 6 ó 9";
        document.getElementById("telefono").className = "error";
        document.getElementById("telefono").focus();
        return false;
    }
    // Si llega aquí es que el teléfono es correcto
    document.getElementById("telefono").className = "";
    return true;
}

/*
 * ************************************************************
 * comprobamos el email (caracteres)@(caracteres).(de 2 a 4 caracteres)
 */
function validarEmail() {
    /* 	Comienza con 2 ó más caracteres alfanuméricos incluidos el guión y el punto, seguido de un símbolo @
    	Seguirá con cualquier conjunto de 2 ó más caracteres alfanuméricos incluido el guión y finalizando en un punto.
    	Terminará con 2 a 4 caracteres alfanuméricos incluidos el guión
    */
    var patron = /^[\w-\.]{2,}@([\w-]{2,}\.)+([\w-]{2,4})$/;
    // Si no se cumple el patrón
    if (!patron.test(document.getElementById("email").value)) {
        document.getElementById("errores").innerHTML = "ERROR: No es un email válido.";
        // Situamos el foco en el campo email y le asignamos la clase error.
        document.getElementById("email").focus();
        document.getElementById("email").className = "error";
        return false;
    }
    // Si llega aquí es que el email es correcto
    document.getElementById("email").className = "";
    return true;
}

/*
 * ************************************************************
 * Comprobamos que el NIF esté compuesto por 8 dígitos, un guión y una letra mayúscula
 */
function validarNif() {
    // 8 Números 1 letra de la A-Z en mayúsculas, separados por un guión
    var patron = /^\d{8}-[A-Z]$/;
    // Si no se cumple el patrón definido
    if (!patron.test(document.getElementById("nif").value)) {
        document.getElementById("errores").innerHTML = "ERROR: No es un número de NIF válido. Debe ser formado por 8 dígitos, un guión y una letr mayúscula";
        // Situamos el foco en el campo nif y le asignamos la clase error.
        document.getElementById("nif").focus();
        document.getElementById("nif").className = "error";
        return false;
    }
    // Si llega aquí es que el número del NIF es correcto
    document.getElementById("nif").className = "";
    return true;
}

/*
 * ************************************************************
 * Función que comprueba se hemos realizado alguna selección de provincia
 */
function validarProvincia() {
    // Comprueba que la opción seleccionada sea diferente a 0, si no significa que no se ha escogido nada
    if (document.getElementById("provincia").selectedIndex == 0) {
        document.getElementById("errores").innerHTML = "ERROR: No ha seleccionado ninguna provincia.";
        // Situamos el foco en el campo provincia y le asignamos la clase error.
        document.getElementById("provincia").focus();
        document.getElementById("provincia").className = "error";
        return false;
    }
    // Si llega aquí es que sí hemos seleccionado alguna provincia
    return true;
}

/*
 * ************************************************************
 * Función que valida la introducción de un dia entre 1 y 31, un mes entre 1 y 12
 * y un año entre 1000 y 2999. Todo separado por un guión o una barra inclinada, y
 * que permite la introducción de hasta dos dígitos (para el día y el mes) con 0 delante ó  sin él
 */
function validarFecha() {
    /* Debe empezar por 0 (no obligatorio) y un número del 1 al 9, ó por 1 y un dígito decimal, ó por 2 y un
       dígito decimal, ó por 3 y un dígito entre el 0 y el 1.
       A continuación admitirá un guión o una barra inclinada.
       Seguirá con un 0 (no obligatorio) y un dígito entre el 1 y el 9, ó un 1 seguido de dígitos entre el 0 y el 2
       Seguirá con un guión o una barra inclinada, y terminaremos con un dígito entre el 1 y el 2 seguido de 
       3 dígitos numéricos
    */
    var patron = /^((0?[1-9])|(1\d)|(2\d)|(3[0-1]))[-|\/]((0?[1-9])|(1[0-2]))[-|\/]([1-2]\d{3})$/
        // Si no se cumple el patrón definido
    if (!patron.test(document.getElementById("fecha").value)) {
        document.getElementById("errores").innerHTML = "Fecha errónea. Introdúzcala de nuevo (dd/mm/aaaa)";
        document.getElementById("fecha").focus();
        document.getElementById("fecha").className = "error";
        return false;
    }
    // Si llega aquí es que todo ha sido correcto
    return true;
}

/*
 * ************************************************************
 * Función que comprueba la introducción de una hora entre 01 ó 1 hasta 23,
 * y unos minutos entre 01 ó 1 hasta 59. Separados por dos puntos (:)
 */
function validarHora() {
    // Comenzamos con un 0 (no obligatorio) y un dígito del 1 al 9, ó un 1 y un dígito numérico, 
    // ó un 2 y un dígito de 0 a 3, continuamos con dos puntos y un dígito entre el 0 y el 5 (no obligatorio)
    // seguido de otro dígito numérico
    var patron = /^(0?[1-9]|1\d|2[0-3]):([0-5]?\d)$/;
    // Si no se cumple el patrón definido
    if (!patron.test(document.getElementById("hora").value)) {
        document.getElementById("errores").innerHTML = "Hora errónea. Introdúzcala de nuevo (hh:mm)";
        document.getElementById("hora").focus();
        document.getElementById("hora").className = "error";
        return false;
    }
    // Si todo ha sido correcto
    return true;
}