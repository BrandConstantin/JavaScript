var distancia = 100;	
var contador = 1;
var intervaloCoche;

//genera coches
function genera(){ 
	document.getElementById("ok").disabled = true;
	var participan = document.getElementById("participantes").value;
	
	for (var i = 0; i < participan; i++){ 			
		var coches = document.createElement("div");
		coches.className="coche"; 
		coches.style.top = distancia + "px";
		distancia += 70;
		coches.style.backgroundImage = "url(img/coche" + i +".jpeg)";
		coches.setAttribute("id", "coche" + contador);		
		contador++;
		document.getElementById("container").appendChild(coches);
		
	}
}
	
//mover los coches
function mover(){	
		
	intervaloCoche = setInterval(function () { 	
		var cocheCreado = document.getElementById("participantes").value;
		
		for (var i = 0; i < cocheCreado; i++){ 				
			var totalCoches = document.querySelectorAll(".coche");	
			var posicion = totalCoches[i].offsetLeft;
						
			if (posicion <= 1000) {
				totalCoches[i].style.left = (posicion += getRand(1, 20)) + "px";				
			}else  {
				comprobar(totalCoches[i]);		
			}
		}
	}, 45);	
	
	document.getElementById("mover").disabled = true;	
}

document.getElementById("disponible").innerHTML = "€ disponible: 500";
	 
//comprobar coche elegido
function comprobar(coches){
	var dineroRestante = parseInt(document.getElementById("disponible").innerHTML = "€ disponible: " + dineroRestante);
	
	if ((coches.id == "coche") && (document.getElementById("cocheElegido").value)) {	
		clearInterval(intervaloCoche);	
		
		document.getElementById("resultado").innerHTML="¡EHNORABUENA! HAS"  + document.getElementById("cocheElegido").value;
		document.getElementById("disponible").innerHTML=(dineroRestante + parseInt(document.getElementById("apuesta").value));	
	} else {			
		clearInterval(intervaloCoche);
		
		document.getElementById("resultado").innerHTML="HAS PERDIDO";
		document.getElementById("disponible").innerHTML=(dineroRestante - document.getElementById("apuesta").value);		
	} 			
}

//reanudar juego
function reanudar(){
		var totalCoches = document.querySelectorAll(".coche");
		
		for (var i = 0; i < totalCoches.length; i++){
			totalCoches[i].parentNode.removeChild(totalCoches[i]);
		}
		
		distancia = 100;	
		contador = 1;
		
		document.getElementById("mover").disabled = false;	
		document.getElementById("ok").disabled = false;
		document.getElementById("resultado").innerHTML="¿QUIEN GANARA?";
}

function getRand(min, max) { 
	return Math.random() * (max - min) + min;
}	