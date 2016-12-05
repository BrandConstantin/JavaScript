//Lanza intervalo de tiempo cada segundo
//llama a la funcion miReloj
var reloj = setInterval(miReloj, 1000);

function miReloj() {
    //variable de fecha
    var tiempo = new Date();
    //cambia valor de demo con fecha con formato
    document.getElementById("demo").innerHTML = tiempo.toLocaleTimeString();
}

//Para el intervalo
function parar(){
    window.clearInterval(reloj);
}
    
//Para el intervalo
function reanudar(){
    reloj = setInterval(miReloj, 1000);
}