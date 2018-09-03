var numBolita = 1;

//función de crear capas
function crear(numBolita){
	//crea una nueva capa
	var bolita = document.createElement("div");
	
	//se le asigna una clase
	bolita.className = "bubble";
	
	//se le asigna una posición aleatoria 
	//hasta 800px bottom y 1700 left que es tamaño mi pantalla
	var superior = Math.floor(Math.random() * 800); 
	var izquierda = Math.floor(Math.random() * 1700);
	
	//se posicionan las bolitas en la pantalla
	bolita.style.top = superior + "px";
	bolita.style.left = izquierda + "px";
	
	//se crean las bolitas con tamaños aleatorios
	var tamanio = Math.floor(Math.random() * 150) + 10;
	bolita.style.width = tamanio + "px";
	bolita.style.height = tamanio + "px";
	
	//se le da un número a la capa
	var numCapa = parseInt(numBolita.innerHTML) + 1;
	bolita.innerHTML = numCapa ;//pongo el número en la capa +1 a la que le hago el mouseover
	
	
	//se crean las bolitas con colores aleatorios
	var colorBolita = "rgb(" + Math.floor(Math.random() * 255) + "," +
					Math.floor(Math.random() * 255) + "," +
					Math.floor(Math.random() * 255) + ")";
	bolita.style.backgroundColor = colorBolita;
	
	/*
	//creamos un contador de capas para darle un id a la bolita
	bolita.value = 0;
	
	//asignamos un nuevo id a la capa
	contadorCapa++;
	bolita.id = "capa" + contadorCapa;
	*/
	
	//le asigno el onmouseover a cada bolita 
	//si se pasa con el raton sobre bolita crea otra
	bolita.setAttribute("onmouseover", "crear(this)");
	
	//añado la bolita al contenedor
	//document.body.appendChild(bolita);
	//o también
	document.getElementById("contenedor").appendChild(bolita);
}

//función de eliminar todas las capas
function limpiar(){
	//coje todas las copas con el nombre de la clase bubble
	var todo = document.querySelectorAll(".bubble");
	
	//y las elimina
	for(var i = 0; i < todo.length; i++){
		todo[i].parentNode.removeChild(todo[i]);
	}
}