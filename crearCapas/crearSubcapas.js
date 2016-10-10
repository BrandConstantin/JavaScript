var colores = ["cyan", "violet", "green", "yellow", "blue", "grey", "brown"];

function crearCapa(miCapa){
		//Crea nueva capa hija
		var capaNueva = document.createElement("div");
	
		capaNueva.className = "capa";//le asigno una clase
			
		var topeSuperior = Math.floor(Math.random() * 700);
		capaNueva.style.top = topeSuperior + "px";//lo posiciono aleatoriamente
	
		var topeIzquierdo = Math.floor(Math.random() * 1700);
		capaNueva.style.left = topeIzquierdo + "px"; //lo posiciono aleatoriamente
		
		var numHijo = parseInt(miCapa.innerHTML) + 1;
		capaNueva.innerHTML = numHijo ;//pongo el número en la capa +1 a la que le hago el mouseover
		
		var colorHijo = parseInt(miCapa.innerHTML) + 1;
		capaNueva.style.backgroundColor = colores[colorHijo];
		
		capaNueva.setAttribute("onmouseover","crearCapa(this)");//asigno atributo onmouseover para que el div creado llame a la funcion
		
		document.body.appendChild(capaNueva);
 
}