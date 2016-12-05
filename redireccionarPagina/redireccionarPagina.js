window.setTimeout("redireccionar()", "7000");
    
function redireccionar(){
    location.href = "http://www.google.es";
}
    
function mostrar(){
document.getElementById("mensaje").innerHTML = location.href;
}