var totalTree = 0;
var bombNumb = 0;
var velocity = 1;
var level = 0;
var bombNumb = 10;
var destroyed = 0;
//var minimLimit = 50;
//var maximLimit = 1100;

function go(){
	document.getElementById("startGame").disabled = false;
	document.getElementById("restartGame").disabled = true;
}

function random(min, max){
	return Math.floor((Math.random() * max) + min);
}

//start the game
function start(){
	document.getElementById("restartGame").disabled = false;
	document.getElementById("startGame").disabled = true;

	//create the ovni
	var ovni = document.getElementById("ovni");
	ovni.className = "ovni";
	ovni.id = "idOvni";
	ovni.style.left = 1200 + "px";
	ovni.style.top = 110 + "px";
	//random type of ovni
	//var ovniType = Math.floor(getRand(1, 2));
	//ovni.style.backgroundImage = "url(img/ufo" + ovniType + ".png)";
	//interval to fly the ovni
	var intervalOvni = setInterval(function(){
		if(ovni.offsetLeft > -50){
			ovni.style.left = (ovni.offsetLeft + velocity) + "px";
		}else{
			ovni.style.left = 1200 + "px";
		}
	}, 6);

	level = 1;
	document.getElementById("level").innerHTML = "Level: " + level;

	createHouses();
}

//create the houses
var arrayHouse = [];
function createHouses(){
	var housesNumb = random(2, 6);
	allHouses = housesNumb;

	for(var i = 0; i < housesNumb; i++){
		var houses = document.createElement("div");
		houses.className = "houses";
		//houses.style.backgroundImage = ("url(img/house.png)");
		houses.style.left = (Math.floor((Math.random() * 1000) + 50)) + "px";
		houses.style.top = 500 + "px";
		document.getElementById("container").appendChild(houses);
		arrayHouse = houses;
	}
}

//create the bomb
function drop(ovni){
	if(bombNumb != 1){
		bombNumb--;
		document.getElementById("bombNumb").innerHTML = "Bomb Nº: " + bombNumb;

		var bomb = document.createElement("img");
		bomb.className = "bomb";
		bomb.id = "idBomb";
		var positionBombLeft = ovni.offsetLeft;
		var positionBombTop = ovni.offsetTop;
		bomb.style.left = positionBombLeft + "px";
		bomb.style.top = positionBombTop + "px";
		//houses.style.backgroundImage = ("url(img/bomb.png)");
		bomb.setAttribute("src", "img/bomb.png");
		document.getElementById("container").appendChild(bomb);

		//drop the bomb
		//function drop(ovni){
		var intervalBomb = setInterval(function(){
			if(bomb.offsetTop == 600){
				for(var i = 0; i < arrayHouse.length; i++){
					if((bomb.offsetLeft >= arrayHouse[i].offsetLeft) && 
						(bomb.offsetLeft < arrayHouse[i].offsetLeft + 50)){
						arrayHouse[i].parentNode.removeChild(arrayHouse[i]);

						housesNumb--;
						document.getElementById("bombNumb").innerHTML = bombNumb;

						if(housesNumb == 0){
							level();
						}
					}
				}

				clearInterval(intervalBomb);
				createTree(bomb);
				bomb.parentNode.removeChild(bomb);
			}else{
				bomb.style.top = (bomb.offsetTop + 3) + "px";
			}
		}, 4);
		//}
	}else{
		document.getElementById("bombNumb").innerHTML = "Bomb Nº: 0";
		//document.getElementById("end").innerHTML = "Game Over";
	}
}

function level(){
	velocity += velocity;
	bombNumb += 5;
	createHouses();
}

//createTree the houses with the tree
function createTree(bomb){
	var createTree = document.createElement("div");
	//createTree.setAttribute("src", "img/tree.png");
	createTree.style.left = (bomb.offsetLeft - 25) + "px";
	createTree.style.top = (bomb.offsetTop - 50) + "px";
	createTree.className = "createTree";
	document.getElementById("container").appendChild(createTree);

	var intervalReplace = setInterval(function(){
		//createTree.parentNode.removeChild(createTree);
		clearInterval(intervalReplace);	
	}, 500);	
}