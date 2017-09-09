var cuenta = 0;
//Se ejecuta contador() cada segundo
window.setInterval("contador()", "1000");

//Es llamada por setInterval
function contador(){
    cuenta++;
    document.getElementById("capa").innerHTML = cuenta;
}

var cuenta2 = 0;    

function contador2(){
    cuenta2++;
    document.getElementById("capa2").innerHTML = cuenta2;
    window.setTimeout("contador2()", "2000");
}

var cuenta3 = 0;    

function contador3(){
    cuenta3++;
    document.getElementById("capa3").innerHTML = cuenta3;
    window.setTimeout("contador3()", "3000");
}
   
var cuenta4 = 0;    

function contador4(){
    cuenta4++;
    document.getElementById("capa4").innerHTML = cuenta4;
    window.setTimeout("contador4()", "4000");
}

window.onload=function(){
    contador2();
    contador3();  
    contador4();   
}