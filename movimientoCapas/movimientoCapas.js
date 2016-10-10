var avanzar = 1;
var retroceder = 10;

var colores = ["yellow", "red", "green", "violet", "blue", "grey", "lightgreen", "brown", "pink", "purple", "lightblue"];

function empezar(){
	if (avanzar < 10){	
		avanzar++;
		//mueve y cambia color
		muevePintando("+", avanzar);
		setTimeout("empezar()", 2000);
	}else{
		if (retroceder > 1){
			retroceder--;
			//mueve y cambia color
			muevePintando("-", retroceder);
			setTimeout("empezar()", 2000);
		}
	}
}

var izquierda = 50;

function muevePintando(operador, num){
	izquierda = (operador == "+") ? izquierda + 60 : izquierda - 60;

	document.getElementById("capa").style.left = izquierda + "px"; 
	document.getElementById("capa").style.backgroundColor = colores[num];
	document.getElementById("capa").innerHTML = num;	
}