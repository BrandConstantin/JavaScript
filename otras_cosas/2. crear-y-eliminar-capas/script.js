var contadorCapa = 0;

//función de crear capas
function crear(){
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
	var tamanio = Math.floor(Math.random() * 100) + 5;
	bolita.style.width = tamanio + "px";
	bolita.style.height = tamanio + "px";
	
	//se crean las bolitas con colores aleatorios
	var colorBolita = "rgb(" + Math.floor(Math.random() * 255) + "," +
					Math.floor(Math.random() * 255) + "," +
					Math.floor(Math.random() * 255) + ")";
	bolita.style.backgroundColor = colorBolita;
	
	//creamos un contador de capas para darle un id a la bolita
	bolita.value = 0;
	
	//asignamos un nuevo id a la capa
	contadorCapa++;
	bolita.id = "capa" + contadorCapa;
	
	//añado la bolita al contenedor
	document.getElementById("contenedor").appendChild(bolita);
	
	//le asigno el onclick a cada bolita 
	//si se hace click sobre bolita la elimina
	bolita.setAttribute("onclick", "limpiarBolita(this)");
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

//eliminar la bolita sobre cual se hace click
function limpiarBolita(bolita){
	//this es el objeto al que le he hecho onclick
    //parentNode es su capa contenedora
    //como para eliminar un elemento tenemos que 
    //llamar a su padre this.parentNode
    //a su padre hay que especificarle que objeto hijo
    //borramos que es this removechild(this)
	bolita.parentNode.removeChild(bolita);
	//tambien se puede hacer asi
	//document.getElementById("contenedor").removeChild(this);
}