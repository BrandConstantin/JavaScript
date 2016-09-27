		//variable inicial de la cuenta
		var cuenta = 10;
		var intervalo = setInterval(function(){
			//mientras que cuenta sea mayor a 0 cambia el texto de la capa miCuenta
			if(cuenta > 1){
				cuenta--;
				document.getElementById("miCuenta").innerHTML = cuenta;
			}else{
				//clearInterval(intervalo);
				document.getElementById("miCuenta").innerHTML = "Moises el más feo de la clase!";
			}
		},1000);