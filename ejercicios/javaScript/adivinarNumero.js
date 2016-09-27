		//iniciar variables
		var numAleatorio;
		var intentos;
		var contador;
		var intervalo;
		var tiempoAgotado;

		//Funcion inicial
		function iniciar(){
			intentos = 0;
			numAleatorio = Math.floor((Math.random() * 10) + 1);
			console.log(numAleatorio);
			tiempoAgotado = false;
			contador = 15;
			document.getElementById("tiempoRestante").innerHTML = contador;
			clearInterval(intervalo);
			//Lanzamos el interval
			//llama a la función muestra cada 1seg
			intervalo = setInterval("mostrar()", 1000);
		}

		function mostrar(){
			//decremento
			contador--;
			//Actualizo el valor de pantalla
			document.getElementById("tiempoRestante").innerHTML = contador;
			//Si contador = 0 paramos
			if (contador <= 0){
				 clearInterval(intervalo);
				 document.getElementById("tiempoRestante").innerHTML = "Tiempo agotado";
				 tiempoAgotado = true;
			}
		}

		function comprobarNumero(){
			if (!tiempoAgotado){
				var numeroIntrod = document.getElementById("numeroIntrod").value;
				intentos++;
				if (numAleatorio == numeroIntrod){
					document.getElementById("mensaje").innerHTML = "HAS ACERTADO";
					document.getElementById("intentos").innerHTML = intentos;
					clearInterval(intervalo);
				}else 
					document.getElementById("mensaje").innerHTML = "NO LO CONSEGUISTE";
					document.getElementById("intentos").innerHTML = intentos;
			}
		}