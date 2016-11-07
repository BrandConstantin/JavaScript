var nivel = 0;
var contadorVidas = 3;
var animales = ["lion","bird","cat","dog", "rabbit"];
var contarAnimales = [0,0,0,0];

var animalrdm = 0;

function empezar(){
	nivel = 0;
	document.getElementById("mensajeAnimal").innerHTML = nivel;

	contadorVidas = 3;

	//crea animales aleatoriamente
	for (i = 1; i <= 10; i++){
		//crea animal aleatoriamente
		var num = Math.floor(Math.random() * 5);
		//incremento cantidad del animal;
		contarAnimales[num - 1]++;
		
		//Crea nueva capa
		var animal = document.createElement("div");
		animal.className = "animal";//le asigno una clase
		
		//lo posiciono aleatoriamente
		var superior = Math.floor(Math.random() * 650);
		animal.style.top = superior+"px";
		
		var izda = Math.floor(Math.random() * 850);
		animal.style.left = izda+"px"; 
		
		console.log(num);
		animal.style.backgroundImage = "url(img/"+ animales[num] + ".png)";
				
		animal.value = num;

		//Le asigno el onclick
		animal.setAttribute("onclick","eliminaAnimal(this)");
		
		//Lo añado al contenedor	
		document.getElementById("contenedor").appendChild(animal);
	}

	console.log(contarAnimales);

	//elige animal aleatoriamente
	animalrdm = Math.floor(Math.random() * 5);
	document.getElementById("mensajeAnimal").innerHTML = animales[animalrdm];

	//crea los tres estrellaes 
	for (i=1;i<=3;i++){
		//Crea nueva capa
		var estrella = document.createElement("span");
		estrella.className = "estrella";//le asigno una clase
		estrella.id="estrella" + i;
		document.getElementById("vidas").appendChild(estrella);	
	}

}

function eliminaAnimal(capa){
	//comprobar que el value del animal es igual que el 
	//animalrdm
	console.log(animalrdm + "," + capa.value);
	if (animalrdm == capa.value){
		contarAnimales[parseInt(capa.value - 1)]--;
		console.log(contarAnimales);
		if (contarAnimales[parseInt(capa.value - 1)] == 0){
			document.getElementById("mensajeVida").innerHTML = "NEXT nivel";
			document.getElementById("contenedor")
			.removeChild(capa);
		}
	}else{
		console.log("estrella" + contadorVidas)
		var unaEstrella = document.getElementById("estrella" + contadorVidas);
		if (contadorVidas >= 1){
			document.getElementById("vidas").removeChild(unaEstrella);	
		}

		contadorVidas--;

		if (contadorVidas <= 0){
			document.getElementById("mensajeVida").innerHTML = "GAME OVER";
		}	
	}
}

function nextlevel(){
	empezar();
	nivel++;
	document.getElementById("mensajeNivel").innerHTML = nivel; 
}