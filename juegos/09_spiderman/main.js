var screenWidth = screen.width;
var level = 0;
var counter = 0;
var goblin;
var spider;
var building;
var id1, id2;
var explosionNuclear;

/* disabled/enabled the buttons */
function go() {
    document.getElementById("startGame").disabled = false;
    //document.getElementById("goToUp").disabled = true;
    //document.getElementById("goToDown").disabled = true;
}

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

/* start the game */
function start() {
    document.getElementById("startGame").disabled = true;
    document.getElementById("startGame").innerHTML = "START GAME";
    document.getElementById("message").innerHTML = " ";
    //document.getElementById("pauseGame").disabled = false;
    //document.getElementById("goToUp").disabled = false;
    //document.getElementById("goToDown").disabled = false;

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

/* create the bulding */
function createBuilding() {
    building = document.createElement("div");
    //assign a class, a name div, a style, and put to the container
    building.className = "building";
    building.id = "idBuilding";
    building.style.left = 35 + "px";
    building.style.top = 100 + "px";
    document.getElementById("container").appendChild(building);
}

/* create the spiderman */
function createSpiderman() {
    spider = document.createElement("div");
    spider.className = "spider";
    spider.id = "idSpider";
    spider.style.left = 200 + "px";
    spider.style.top = getRand(120, 500) + "px";
    document.getElementById("container").appendChild(spider);
}

/* crete the goblin */
function createGoblin() {
    goblin = document.createElement("div");
    goblin.className = "goblin";
    goblin.id = "idGoblin";
    goblin.style.left = (screenWidth - 225) + "px";
    goblin.style.top = getRand(120, 500) + "px";
    document.getElementById("container").appendChild(goblin);

    //function onclick to shoot
    goblin.setAttribute("onclick", "createBomb(this)");
}

/* goblin drop bombs */
// create the bombs
function createBomb() {
    //create the bombs
    var bomb = document.createElement("img");
    //bomb = getRand(120, 500) + "px";
    bomb.setAttribute("src", "img/bomb.png");
    bomb.className = "bomb";
    bomb.id = "idBomb";
    //shoot the bomb from the position of the goblin
    bomb.style.left = goblin.offsetLeft + (-10) + "px";
    bomb.style.top = goblin.offsetTop + 30 + "px";

    counter++;

    dropBomb(bomb);
}

/* function to create the spiderweb */
function createSpiderweb() {
    //create the bombs
    var spiderweb = document.createElement("img");
    spiderweb.setAttribute("src", "img/telarania.jpg");
    spiderweb.className = "spiderweb";
    spiderweb.id = "idSpiderweb";
    //shoot the bomb from the position of the goblin
    spiderweb.style.left = spider.offsetLeft + 40 + "px";
    spiderweb.style.top = spider.offsetTop + 70 + "px";

    counter++;

    //document.getElementById("container").appendChild(spiderweb);

    dropSpiderweb(spiderweb);
}

// drop the bomb
function dropBomb(bomb) {
    //movement the bomb
    var bombInterval = setInterval(function() {
        building = document.getElementById("idBuilding");

        //var bomb = document.getElementById("idBomb");

        //obtengo la posicón de los dos elementos
        var izqBomb = bomb.offsetLeft;
        var topBomb = bomb.offsetTop;
        var izqBuilding = (building.offsetLeft + 150);
        //if the bomb touch the spider

        if (izqBomb > izqBuilding) {
            izqBomb--;
            bomb.style.left = izqBomb + "px";
        }

        // si izq y top son iguales el juego a finalizado
        if ((izqBuilding) == izqBomb) {
            explosion(bomb, izqBomb, topBomb);
        }

    }, 5);
    document.getElementById("container").appendChild(bomb);
}

function dropSpiderweb(spiderweb) {
    //movement the bomb
    var spiderWebInterval = setInterval(function() {
        //obtengo la posicón de los dos elementos
        globin = document.getElementById("idGoblin");
        var izqGlobin = globin.offsetLeft;
        var topGlobin = globin.offsetTop;
        spiderweb = document.getElementById("idSpiderweb");
        var izqSpiderweb = spiderweb.offsetLeft;
        var topSpiderweb = spiderweb.offsetTop;
        /*bomb = document.getElementById("idBomb");
        var izqBomb = bomb.offsetLeft;
        var topBomb = bomb.offsetTop;*/

        if (globin) {
            if (izqGlobin > izqSpiderweb) {
                izqSpiderweb++;
                spiderweb.style.left = izqSpiderweb + "px";
            } else {
                izqSpiderweb--;
                spiderweb.style.left = izqSpiderweb + "px";
            }

            if (topGlobin > topSpiderweb) {
                topSpiderweb++;
                spiderweb.style.top = topSpiderweb + "px";
            } else {
                topSpiderweb--;
                spiderweb.style.top = topSpiderweb + "px";
            }
        }

        /*if (!bomb) {
            izqBomb = screen.width;
            topBomb = screen.height;

            spiderweb.style.left = izqBomb + "px";
            spiderweb.style.top = topBomb + "px";
            spiderweb.parentNode.removeChild(spiderweb);
        }

        if (bomb) {
            if (izqBomb > izqSpiderweb) {
                izqSpiderweb++;
                spiderweb.style.left = izqSpiderweb + "px";
            } else {
                izqSpiderweb--;
                spiderweb.style.left = izqSpiderweb + "px";
            }

            if (topBomb > topSpiderweb) {
                topSpiderweb++;
                spiderweb.style.top = topSpiderweb + "px";
            } else if (topBomb > topSpiderweb) {
                topSpiderweb--;
                spiderweb.style.top = topSpiderweb + "px";
            }
        }*/

        // si izq y top son iguales el juego a finalizado
        if (izqSpiderweb == izqGlobin) {
            explosion2(spiderweb, izqGlobin, topGlobin);
        }

    }, 5);
    document.getElementById("container").appendChild(spiderweb);
}

//window.addEventListener("keydown", moveKey, false);
window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);
window.addEventListener("keydown", space, false);
window.addEventListener("keydown", letterV, false);

function keydown(event) {
    if (event.keyCode == 40) {
        moveDown();
    }
    /*else if (event.keyCode == 38) {
           moveUp();
       } else if (event.keyCode == 27) {
           stopMove();
       }*/
}

function keyup(event) {
    if (event.keyCode == 38) {
        moveUp();
    }
    /* else if (event.keyCode == 40) {
            moveDown();
        } else if (event.keyCode == 27) {
            stopMove();
        }*/
}

function space(event) {
    if (event.keyCode == 32) {
        stopMove();
    }
}

function letterV(event) {
    if (event.keyCode == 86) {
        createSpiderweb();
    }
}

/* move the spiderman up and down
function moveKey(e) {
    var key_code = e.which || e.key;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}*/

/*function moveLeft() {
    spider.style.left = parseInt(spider.style.left) - 5 + 'px';
}*/

/* move to up the spiderman */
function moveUp() {
    clearInterval(id2);

    var spider = document.getElementById("idSpider");
    //see the position of the spider en put into variable
    var onTheTop = spider.offsetTop;

    id1 = setInterval(function() {
        if (onTheTop > 100) {
            onTheTop--;
            spider.style.top = onTheTop + "px";
        } else {
            clearInterval(id1);
        }
    }, 5);
}

/* move down the spiderman */
function moveDown() {
    clearInterval(id1);

    var spider = document.getElementById("idSpider");
    //see the position of the spider en put into variable
    var onTheTop = spider.offsetTop;

    id2 = setInterval(function() {
        if (onTheTop < 500) {
            onTheTop++;
            spider.style.top = onTheTop + "px";
        } else {
            clearInterval(id2);
        }
    }, 5);
}

/* stop the move */
function stopMove() {
    clearInterval(id1);
    clearInterval(id2);
}

/* explosion of the building */
function explosion(bomb, izqBomb, topBomb) {
    bomb.parentNode.removeChild(bomb);

    var izqExplosion = izqBomb;
    var topExplosion = topBomb;

    var explosion = document.createElement("img");
    explosion.setAttribute("src", "img/explosion.png");
    explosion.className = "explosion";
    explosion.id = "idExplosion" + counter;

    explosion.style.left = izqExplosion + "px";
    explosion.style.top = topExplosion + "px";


    // cambiar el lugar del goblin
    document.getElementById("container").appendChild(explosion);

    var cadena = explosion.id,
        inicio = 11,
        fin = 20,
        totalBombsDroped = cadena.substring(inicio, fin);

    console.log(totalBombsDroped); // la consola devolverá: texto
    if (totalBombsDroped <= 4) {
        randomGoblin();
    } else {
        finish();
    }
    //console.log(explosion.offsetLeft, explosion.style.top);
}

function explosion2(spiderweb, izqGlobin, topGlobin) {
    spiderweb.parentNode.removeChild(spiderweb);

    var izqExplosion = izqGlobin;
    var topExplosion = topGlobin;

    var explosion = document.createElement("img");
    explosion.setAttribute("src", "img/explosion.png");
    explosion.className = "explosion";
    explosion.id = "idExplosion" + counter;

    explosion.style.left = izqExplosion + "px";
    explosion.style.top = topExplosion + "px";


    // cambiar el lugar del goblin
    document.getElementById("container").appendChild(explosion);

    var cadena = explosion.id,
        inicio = 11,
        fin = 20,
        totalBombsDroped = cadena.substring(inicio, fin);

    console.log(totalBombsDroped); // la consola devolverá: texto
    if (totalBombsDroped <= 4) {
        randomGoblin();
    } else {
        finish();
    }
    //console.log(explosion.offsetLeft, explosion.style.top);
}

/* stop the game */
function finish() {
    counter = 0;

    document.getElementById("message").innerHTML = "Game Over!";

    goblin.parentNode.removeChild(goblin);
    spider.parentNode.removeChild(spider);
    //building.parentNode.removeChild(building);

    /*var explosion = document.querySelectorAll(".explosion");
    var totalExpl = [];
    totalExpl += explosion;
    for (i = 0; i <= totalExpl.length; i++) {
        explosion[i].parentNode.removeChild(explosion[i]);
    }*/

    createNuclearExplosion();
}

/* explosion nuclear */
function createNuclearExplosion() {
    explosionNuclear = document.createElement("div");
    //assign a class, a name div, a style, and put to the container
    explosionNuclear.className = "explosion-nuclear";
    explosionNuclear.id = "idExplosionNuclear" + counter;
    explosionNuclear.style.left = 35 + "px";
    explosionNuclear.style.top = 100 + "px";

    // cambiar el lugar del goblin
    document.getElementById("container").appendChild(explosionNuclear);

    //console.log(explosionNuclear);
}

/* move the goblin */
function randomGoblin() {
    goblin.style.left = (screenWidth - 225) + "px";
    goblin.style.top = getRand(120, 500) + "px";
}