		//variable inicial de la cuenta
		//var numero;

        function iniciar(){
            var cuenta = document.getElementById("segundos").value;

            var intervalo = setInterval(function(){
                //mientras que cuenta sea mayor a 0 cambia el texto de la capa miCuenta
                if(cuenta > 1){
                    cuenta--;
                    document.getElementById("cuenta").innerHTML = cuenta;
                }else if(cuenta <= 1){
                    //clearInterval(intervalo);
                    document.getElementById("cuenta").innerHTML = "Cuenta finalizada!";
                }
            },1000);
        }