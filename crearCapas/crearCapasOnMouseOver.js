var colores = ["cyan", "violet", "green", "yellow", "blue", "grey", "brown", "lightgreen",
				"black", "pink", "lightblue", "lightgrey", "lightred"];

function creaCapa(miCapa){
		//Crea nueva capa hija
		var capaNueva = document.createElement("div");
	
		capaNueva.className = "capa";//le asigno una clase
			
		var topSuperior = Math.floor(Math.random() * 600);
		capaNueva.style.top = topSuperior + "px";//lo posiciono aleatoriamente
	
		var topIzquierdo = Math.floor(Math.random() * 800);
		capaNueva.style.left = topIzquierdo + "px"; //lo posiciono aleatoriamente
		
		var numHijo = parseInt(miCapa.innerHTML) + 1;
		capaNueva.innerHTML = numHijo ;//pongo el número en la capa +1 a la que le hago el mouseover
		
		var colorHijo = parseInt(miCapa.innerHTML) - 1;
		capaNueva.style.backgroundColor = colores[colorHijo];
		
		capaNueva.setAttribute("onmouseover","creaCapa(this)");//asigno atributo onmouseover para que el div creado llame a la funcion
		
		document.body.appendChild(capaNueva);
	}