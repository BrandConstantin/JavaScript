//global variable
var heigthBowl = 500;
//var accountant = 0;
var value1;
var countFish = 0;
var countFood = 0;

//disabled all the botton until the fishbowl is full
function start(){
	document.getElementById("bottonFill").disabled = false;
	document.getElementById("bottonCreate").disabled = true;
	document.getElementById("bottonDrop").disabled = true;
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

//fill the fishbowl
function fillF(){
	//fill the fishbowl little by little until top 100px
	var intervalFill = setInterval(function(){
		if(heigthBowl > 40){
			heigthBowl--;
			document.getElementById("water").style.height = heigthBowl + "px";
		}else{
			clearInterval(intervalFill);
			//abled the botton createFish
			document.getElementById("bottonCreate").disabled = false;
			//fill the fishbowl and disabled the botton
			document.getElementById("bottonFill").disabled = true;
		}
	}, 8); //8 second to fill the fishbowl
}

//when the fishbowl is fill create 10 div fish
function createFi(){
	var fish = document.createElement("div");
	//assign the class .fish to the div, with event onclick
	//with posicion left and top 
	fish.className = "fish";
	//to click the fish who eat the food
	fish.onclick = selection; 
	fish.style.left = getRand(100, 1000) + "px";
	fish.style.top = getRand(150, 500) + "px";
	//assign the id to the fish, all the fishes have unique id
	fish.id = countFish;
	//the value to assign to the fish to eat them
	fish.value = 0;
	countFish++;
	//add the fish to the fishbowl
	document.getElementById("fishbowl").appendChild(fish);
	//use the getRand to random the fishes to apear
	var fishType = Math.floor(getRand(1, 5));
	fish.style.backgroundImage = "url(images/fish" + fishType + ".png)";

    document.getElementById("countFish").innerHTML = "Fish Nº: " + countFish;

	if(countFish == 10){
		document.getElementById("bottonCreate").disabled = true;
		document.getElementById("bottonDrop").disabled = false;
		document.getElementById("countFish").style.color = "blue";
	}
}

function createFo(){
	var foods = document.createElement("div");
	foods.className = "food";
	foods.style.left = getRand(100, 1000) + "px";
	foods.style.top = 150 + "px";
	foods.onclick = selection;
	foods.id = countFood + "food";
	//foods.value1 = 0;
	countFood++;
	document.getElementById("fishbowl").appendChild(foods);
	//assign a color to the foods
	var colorFood = "rgb(" + Math.floor(getRand(0, 255)) + "," + Math.floor(getRand(0, 255)) + "," + Math.floor(getRand(0, 255)) + ")";
	foods.style.backgroundColor = colorFood;
	//initiate the fall of the foods
	fall(foods.id);

	document.getElementById("countFood").innerHTML = "Food droped: " + countFood;

	if(countFood == 100){
		document.getElementById("bottonDrop").disabled = true;
		document.getElementById("countFood").style.color = "blue";
		//document.getElementById("countFood").innerHTML.style.color = "No more food!";
	}
}

/////////////////////////////////
//function to fall the foods
function fall(id){
	var theFood = document.getElementById(id);
	var intervalFall = setInterval(function(){
		var topFall = parseInt(theFood.style.top);
		var leftFall = parseInt(theFood.style.left);

		if(topFall < 580){
				theFood.style.top = (topFall += 2) + "px";
				theFood.style.left = (leftFall += 1) + "px";
		}else{
			clearInterval(intervalFall);
		}
	}, 40);
}

//function that choose the fish who eat the food
function selection(){
	if(this.className == "fish"){
		value1 = this;
		document.getElementById("fishChoose").innerHTML = "Fish Choose: " + this.id;
		document.getElementById("foodEated").innerHTML = "Food Eated: " + this.value;
	}else{
		//if click on the fish and on the food
		if((value1 != undefined) && (this.className == "food")){
			deleted(this);
			value1.value++;
			document.getElementById("food").innerHTML = "food" + value1.value;
		}
	}
}

function deleted(food){
	food.parentNode.removeChild(food);
}