var heigthBowl = 530;
var value1;
var countFish = 0;
var countFood = 0;
var width = screen.width - 100;
var velocity = 20;
var moving = 0;

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

// disabled all the button until the fishbowl is full
function start() {
    document.getElementById("bottonFill").disabled = false;
    document.getElementById("bottonCreate").disabled = true;
    document.getElementById("bottonDrop").disabled = true;
}

// fill the fishbowl
function fillFishbowl() {
    var intervalFill = setInterval(function() {
        if (heigthBowl > 20) {
            heigthBowl--;
            document.getElementById("water").style.height = heigthBowl + "px";
        } else {
            clearInterval(intervalFill);
            // abled the bottons createFish and disabled botton to fill with water
            document.getElementById("bottonFill").disabled = true;
            document.getElementById("bottonCreate").disabled = false;
        }
    }, 2); // fill the fishbowl in 6 seconds
}

//when the fishbowl is fill create 10 div fish
function createFish() {
    var fish = document.createElement("div");
    fish.className = "fish";
    //selection is a function to select the fish who eat the food
    fish.onclick = selection;
    fish.style.left = getRand(70, width) + "px";
    fish.style.top = getRand(130, 510) + "px";
    fish.id = countFish;

    fish.value = 0;
    countFish++;

    var fishType = Math.floor(getRand(1, 5));
    fish.style.backgroundImage = "url(images/fish" + fishType + ".png)";

    document.getElementById("fishbowl").appendChild(fish);
    document.getElementById("countFish").innerHTML = "Fish Number: " + countFish;

    if (countFish == 3) {
        document.getElementById("bottonCreate").disabled = true;
        document.getElementById("bottonDrop").disabled = false;
        document.getElementById("countFish").style.color = "blue";
    }

    moveFish(fish.id);
}

/* create the food */
function createFood() {
    var foods = document.createElement("div");
    foods.className = "food";
    foods.style.left = parseInt(getRand(100, width)) + "px";
    foods.style.top = 100 + "px";
    foods.onclick = selection;
    foods.id = countFood + "food";

    countFood++;

    var colorFood = "rgb(" + Math.floor(getRand(0, 255)) + "," + Math.floor(getRand(0, 255)) + "," + Math.floor(getRand(0, 255)) + ")";
    foods.style.backgroundColor = colorFood;

    document.getElementById("fishbowl").appendChild(foods);
    document.getElementById("countFood").innerHTML = "Food droped: " + countFood;

    if (countFood == 100) {
        document.getElementById("bottonDrop").disabled = true;
        document.getElementById("countFood").style.color = "blue";
        //document.getElementById("countFood").innerHTML.style.color = "No more food!";
    }

    fallFood(foods.id);
}

/* functionn to fall the food to fishbowl */
function fallFood(id) {
    var food = document.getElementById(id);
    var intervalFall = setInterval(function() {
        var topFall = parseInt(food.style.top);
        var leftFall = parseInt(food.style.left);

        if (topFall < 530) {
            food.style.top = (topFall += 2) + "px";
            food.style.left = (leftFall += 1) + "px";
        } else {
            clearInterval(intervalFall);
        }
    }, 100);
}

//function that choose the fish who eat the food
function selection() {
    if (this.className == "fish") {
        value1 = this;
        document.getElementById("fishChoose").innerHTML = "Fish Choose: " + this.id;
        document.getElementById("foodEated").innerHTML = "Food Eated: " + this.value;
    } else {
        //if click on the fish and on the food
        if ((value1 != undefined) && (this.className == "food")) {
            deleted(this);
            value1.value++;
            document.getElementById("food").innerHTML = "food" + value1.value;
        }
    }
}

function deleted(food) {
    food.parentNode.removeChild(food);
}

/* function to move the fish */
function moveFish(fishId) {
    var divFish = document.getElementById(fishId);
    var leftAnimal = divFish.offsetLeft;
    var topAnimal = divFish.offsetTop;

    var moving = Math.floor(getRand(0, 3));

    switch (moving) {
        case 0:
            x += 5;
            y += 5;
            break;
        case 1:
            x += 5;
            y -= 5;
            break;
        case 2:
            x -= 5;
            y += 5;
            break;
        case 3:
            x -= 5;
            y -= 5;
            break;
    }

    if (divFish.id % 2 == 0) {
        if (topAnimal < 150) {

        }
    } else {

    }

    if (leftAnimal < (width - 100) && topAnimal > 150) {
        if (divFish.id % 2 == 0) {
            leftAnimal += 0.5;
            topAnimal -= 0.5;
        } else {
            leftAnimal += 0.5;
            topAnimal -= 0.5;
        }
    } else if (topAnimal < 150) {
        if (divFish.id % 2 == 0) {
            leftAnimal += 0.5;
            topAnimal += 0.5;
        } else {
            leftAnimal -= 0.5;
            topAnimal += 0.5;
        }
    } else if (leftAnimal > 100 && topAnimal > 150) {
        if (divFish.id % 2 == 0) {
            leftAnimal -= 0.5;
            topAnimal += 0.5;
        } else {
            leftAnimal -= 0.5;
            topAnimal -= 0.5;
        }
    } else if (topAnimal > 150 && leftAnimal < (width - 100)) {
        if (divFish.id % 2 == 0) {
            leftAnimal += 0.5;
            topAnimal -= 0.5;
        } else {
            leftAnimal -= 0.5;
            topAnimal -= 0.5;
        }
    }

    /*if (leftAnimal > (width - leftAnimal)) {
        (moving == 0) ? moving = 2: moving = 3;
    } else if (topAnimal > 150) {
        (moving == 0) ? moving = 1: moving = 3;
    } else if (leftAnimal < width) {
        (moving == 2) ? moving = 0: moving = 1;
    } else if (topAnimal < 150) {
        (moving == 3) ? moving = 2: moving = 0;
    }*/

    setTimeout("moveFish('" + fishId + "')", velocity);
    divFish.style.left = leftAnimal + "px";
    divFish.style.top = topAnimal + "px";


    /*if (divFish.id % 2 == 0) {
        if (leftAnimal < width) {
            leftAnimal++;
        } else {
            leftAnimal--;
        }

        setTimeout("moveFish('" + fishId + "')", velocity);
        divFish.style.left = leftAnimal + "px";
        divFish.style.top = topAnimal + "px";
    } else {
        if (leftAnimal < width) {
            leftAnimal--;
        } else if (leftAnimal < 100) {
            leftAnimal++;
        }

        setTimeout("moveFish('" + fishId + "')", velocity);
        divFish.style.left = leftAnimal + "px";
        divFish.style.top = topAnimal + "px";
    }*/

    //if (divFish.id % 2 == 0) {
    /*switch (moving) {
        case 0:
            if (leftAnimal == width) {
                leftAnimal++;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            break;
        case 1:
            if (leftAnimal >= width) {
                leftAnimal--;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            break;
        case 2:
            if (leftAnimal < width && topAnimal < 150) {
                leftAnimal++;
                topAnimal++;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            divFish.style.top = topAnimal + "px";
            break;
        case 3:
            if (leftAnimal < width && topAnimal > 150) {
                leftAnimal++;
                topAnimal--;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            divFish.style.top = topAnimal + "px";
            break;
        case 4:
            if (leftAnimal > 70 && topAnimal < 150) {
                leftAnimal--;
                topAnimal++;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            divFish.style.top = topAnimal + "px";
            break;
        case 5:
            if (leftAnimal < 70 && topAnimal > 150) {
                leftAnimal++;
                topAnimal--;
                setTimeout("moveFish('" + fishId + "')", velocity);
            }

            divFish.style.left = leftAnimal + "px";
            divFish.style.top = topAnimal + "px";
            break;
    }*/

    //}
}