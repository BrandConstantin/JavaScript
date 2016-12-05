var contadorCapa =0;

/*var padre;
window.onload=function(){
    padre=document.getElementById("contenedor");
}*/

//Crea cada bolita
function creaCapas(){
	//Crea nueva capa
	var bolita = document.createElement("div");
	
	bolita.className = "bubble";//le asigno una clase
	
	//lo posiciono aleatoriamente
	var superior = Math.floor(Math.random() * 800);
	bolita.style.top = superior + "px";
	
	var izda = Math.floor(Math.random() * 1200);
	bolita.style.left = izda + "px"; 
	
	//Tamaño aleatorio ancho y alto iguales
	var tamano = Math.floor(Math.random() * 100) + 10;
	bolita.style.width = tamano + "px";		
	bolita.style.height = tamano + "px";
	
	//Color aleatorio	
	var coloraleatorio = "rgb(" + Math.floor(Math.random() * 255) + "," 
		+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

	bolita.style.backgroundColor=coloraleatorio;
	
	//Le asigno un valor=0 que usare para 
	//contador interno
	bolita.value = 0;
	
	//Asignamos un nuevo id a la nueva capa
	contadorCapa++;		
	bolita.id = "capa" + contadorCapa;
	//console.log("crea capa id=" + contadorCapa);
	//Le asigno el onclick
	//bolita.onclick=eliminaBolita;
	bolita.setAttribute("onclick","eliminaBolita(this)");
			
	//Lo añado al contenedor	
	document.getElementById("contenedor").appendChild(bolita);
}

//Elimina la capa que se lo pasa como this
function eliminaBolita(miBolita){
    console.log("capa a eliminar =" + miBolita.id);
    //this es el objeto al que le he hecho onclick
    //parentNode es su capa contenedora
    //como para eliminar un elemento tenemos que 
    //llamar a su padre this.parentNode
    //a su padre hay que especificarle que objeto hijo
    //borramos que es this removechild(this)
    miBolita.parentNode.removeChild(miBolita);
    //padre.removeChild(this);
//document.getElementById("contenedor").removeChild(this);
}

function limpiaCapas(){
    var todasLasCapas = document.querySelectorAll(".bubble");
    
    for (var i = 0; i < todasLasCapas.length; i++){
		todasLasCapas[i].parentNode.removeChild(todasLasCapas[i]);   
    }
}
