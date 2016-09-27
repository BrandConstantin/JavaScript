		//iniciar variables
		var contador;
		var intervalo;

		function enviar(){
			clearInterval(intervalo);
			contador = 1;
			intervalo=setInterval("pintar()", document.getElementById("tiempoPixel").value);
		}

		function pintar(){
			contador++;
			document.getElementById("barra").style.background = document.getElementById("color").value;
			document.getElementById("procesando").innerHTML = contador;
			document.getElementById("barra").style.width = contador + "px";

			if (contador == document.getElementById("longitud").value) {
				clearInterval(intervalo);
			};
		}