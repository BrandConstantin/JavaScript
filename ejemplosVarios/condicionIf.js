function comprobar(){
    var edad = document.getElementById("edad").value;
    var mensaje;

    //el mensaje se traduce asi
    //si edad es mayor o igual a 18 la persona el 'Mayor' sino 'Menor'
    mensaje = (edad >= 18) ? "Eres 'mayor' de edad" : "Eres 'menor' de edad";

    document.getElementById("mensaje").innerHTML = mensaje;
}