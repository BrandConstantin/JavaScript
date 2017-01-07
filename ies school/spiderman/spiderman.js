var level = 0;
var id;
var id2;

//abled the botton to start the game
function go(){
	document.getElementById("startGame").disabled = false;	
	document.getElementById("pauseGame").disabled = true;	
	document.getElementById("goToUp").disabled = true;	
	document.getElementById("goToDown").disabled = true;	
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

//start the game
function start(){
	//disabled the start game and abled the another three buttons
	document.getElementById("startGame").disabled = true;	
	document.getElementById("pauseGame").disabled = false;	
	document.getElementById("goToUp").disabled = false;	
	document.getElementById("goToDown").disabled = false;

	//when start the game the level change to 1
	var level = 1;
	document.getElementById("level").innerHTML = "Level: " + level;

	/*
	var allDivs = document.querySelectorAll("#container div");
	for(var i = 0; i < allDivs.length; i++){
		allDivs[i].parentNode.removeChild(allDivs[i]);
	}
	*/

	//onload the function:
	createBuilding();
	createSpiderman();
	createGoblin();
}

//create the building
function createBuilding(){
	var building = document.createElement("div");
	//assign a class, a name div, a style, and put to the container
	building.className = "building";
	building.id = "idBuilding";
	building.style.left = 120 + "px";
	building.style.top = 100 + "px";
	document.getElementById("container").appendChild(building);
}

//create the spiderman
function createSpiderman(){
	var spider = document.createElement("div");
	spider.className = "spider";
	spider.id = "idSpider";
	spider.style.left = 200 + "px";
	spider.style.top = getRand(120, 500) + "px";
	document.getElementById("container").appendChild(spider);
}

//functions to move the spiderman

//function to go up spider
function goUp(){
	var spider = document.getElementById("idSpider");
	//see the position of the spider en put into variable
	var onTheTop = spider.offsetTop;
	//close the interval go down
	clearInterval(id2);
	id = setInterval(function(){
		if(onTheTop > 100){
			onTheTop--;
			spider.style.top = onTheTop + "px";
		}else{
			clearInterval(id);
		}
	}, 12);
}

//function to go down spider
function goDown(){
	var spider = document.getElementById("idSpider");
	//see the position of the spider en put into variable
	var onTheTop = spider.offsetTop;
	//close the interval go down
	clearInterval(id);

	id = setInterval(function(){
		if(onTheTop < 500){
			onTheTop++;
			spider.style.top = onTheTop + "px";
		}else{
			clearInterval(id2);
		}
	}, 2);
}

//function to pause the spider
function toPause(){
	//var spider = document.getElementById("idSpider");
	//var onTheTop = spider.offsetTop;
	clearInterval(id);
	clearInterval(id2);
}

//create green goblin
function createGoblin(){
	var goblin = document.createElement("div");
	goblin.className = "goblin";
	goblin.id = "idGoblin";
	goblin.style.left = "900px";
	goblin.style.top = getRand(120, 500) + "px";
	document.getElementById("container").appendChild(goblin);

	//function onclick to shoot
	goblin.setAttribute("onclick", "bomb(this)");
}

//function to create the bomb
function bomb(){
	//create the bombs
	var bomb = document.createElement("img");
	var bombHight = getRand (120, 500) + "px";
	bomb.setAttribute("src", "img/bomb.png");
	bomb.className = "bomb";
	bomb.id = "idBomb" + i;
	//shoot the bomb from the position of the goblin
	bomb.style.left = goblin.offsetLeft + 30 + "px";
	bomb.style.top = goblin.offsetTop + 30 + "px";
	//document.getElementById("container").appendChild(bomb);
	//movement the bomb
	var bombInterval = setInterval(function(){
		var spider = document.getElementById("spider");
		//if the bomb touch the spider
		if((((bomb.offsetLeft + 40) > spider.offsetLeft) && ((bomb.offsetLeft + 40) < (spider.offsetLeft + 150))) &&
			((bomb.offsetTop >= spider.offsetTop) && (bomb.offsetTop <= (spider.offsetTop + 109)) || 
				((bomb.offsetTop + 56) >= spider.offsetTop) && ((bomb.offsetTop + 56) <= (spider.offsetTop + 109)))){
			bomb.parentNode.removeChild(bomb);
			document.getElementById("goblin").setAttribute("onclick", "shoot()");
		}else if(bomb.offsetLeft == (1000 - 170)){
			goblin.setAttribute("onclick", "");
			explosion(bomb);
		}else{
			bomb.style.left = (bomb.offsetLeft + 1) + "px";
		}

		//bomb vertical movement
		if(bomb.offsetTop < bombHight){
			bomb.style.top = (bomb.offsetTop + 1) + "px";
		}else{
			bomb.style.top = (bomb.offsetTop - 1) + "px";
		}
	}, 5);
	document.getElementById("container").appendChild(bomb);
}

//function to shoot the bomb
function shoot(){
	level++;
	document.getElementById("level").innerHTML = "Level: " + level;
	var goblin = document.getElementById("goblin");
	goblin.setAttribute("onclick", "");
	for(var i = 0; i < level; i++){
		bomb();
	}

	goblin.style.top = getRand(120, 500) + "px";
}

/*
//function to shoot the bomb
function shootBomb(bomb){
	var spider = document.getElementById("idSpider");
	//position on the top of spider
	var onTheTopSpider = spider.offsetTop;

	var building = document.getElementById("idBuilding");

	var goblin = document.getElementById("idGoblin");

	//see the position of the bomb to assign a variable
	var onTheTop = bomb.offsetTop;
	var onTheLeft = bomb.offsetLeft;
	//create random position
	var randomOnTheTop = getRand(120, 500) + "px";

	var id3 = setInterval(function(){
		goblin.setAttribute("onclick", "bomb(this)");
		var onTheTopSpider = spider.offsetTop;

		if (onTheTop < randomOnTheTop) {
			onTheLeft--;
			onTheTop++;
			bomb.style.top = onTheTop + "px";
			bomb.style.left = onTheLeft + "px";
		}else if(onTheTop > randomOnTheTop){
			onTheLeft--;
			onTheTop--;
			bomb.style.top = onTheTop + "px";
			bomb.style.left = onTheLeft + "px";
		}else if(onTheLeft > 200){
			onTheLeft--;
			bomb.style.left = onTheLeft + "px";
		}else{
			clearInterval(id3);
			level++;

			if((onTheLeft == 300) && (onTheTop >= onTheTopSpider - 60) &&
				(onTheTop <= onTheTopSpider + 200)){
				bomb.parentNode.removeChild(bomb);

				if(level > 3){
					level--;
				}

				document.getElementById("level").innerHTML = "Level: " + level;

				//shott again the bomb
				goblin.setAttribute("onclick", "bomb(this)");
			}else{
				bomb.style.backgroundImage = "url(img/explosion.png)";
				bomb.style.top = 300 + 'px';
				bomb.style.left = 75 + 'px';

				//remove the building
				building.parentNode.removeChild(building);

				var mesage = document.createElement("div");
				mesage.className = "mesage";
				mesage.id = "idmesage";
				document.getElementById("container").appendChild(mesage);
				document.getElementById("container").innerHTML = "GAME OVER!";

				document.getElementById("startGame").disabled = false;	
				document.getElementById("pauseGame").disabled = true;	
				document.getElementById("goToUp").disabled = true;	
				document.getElementById("goToDown").disabled = true;
			}
		}
	}, 5);

	goblin.style.top = getRand(500, 100) + "px";
}*/