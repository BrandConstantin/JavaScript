var screenWidth = screen.width - 100;
var screenHeight = 450;
var count = 0;
var shooting = 0;
var free = 0;
var time = 3600;
var velocity = 110;
var level = 1;
var duck1 = "url(img/pato_left.png)";
var duck2 = "url(img/pato_right.png)";

function start() {
    if (free < 16) {
        setInterval("createDuck()", time);
    } else {
        stopGame();
    }
    document.getElementById("start").disabled = true;
    document.getElementById("level").innerHTML = 1;
}

function createDuck() {
    var newDuck = document.createElement("div");

    var topAnimal = Math.floor(Math.random() * screenHeight);
    if (topAnimal < 160) {
        var diference = 160 + (Math.floor(Math.random() * screenHeight));
        newDuck.style.top = (diference) + "px";
    }
    var leftAnimal = Math.floor(Math.random() * screenWidth);
    newDuck.style.left = (leftAnimal) + "px";


    newDuck.className = "duck";
    newDuck.id = count;

    var duckRandom = Math.floor(Math.random() * 2);
    if (duckRandom == 1) {
        newDuck.style.backgroundImage = duck1;
    } else {
        newDuck.style.backgroundImage = duck2;
    }

    document.getElementById("lake").appendChild(newDuck);

    count++;

    //mover el pato
    moveDuck(newDuck.id);

    //asigno el evento de disparar el pato
    newDuck.setAttribute("onclick", "shoot(this)");


    levelIncrement();
}

/* mover los patos */
function moveDuck(idDuck) {
    var divDuck = document.getElementById(idDuck);

    var leftAnimal = divDuck.offsetLeft;
    var topAnimal = divDuck.offsetTop;

    if (divDuck.id % 2 == 0) {
        if (leftAnimal < screenWidth && topAnimal < screenHeight) {
            leftAnimal++;
            topAnimal++;

            setTimeout("moveDuck('" + idDuck + "')", velocity);
        } else {
            divDuck.parentNode.removeChild(divDuck);
            free++;
            document.getElementById("free").innerHTML = free;
        }

        divDuck.style.left = leftAnimal + "px";
        divDuck.style.top = topAnimal + "px";

    } else {
        if (screenWidth > leftAnimal && screenHeight > topAnimal) {
            leftAnimal--;
            topAnimal++;

            setTimeout("moveDuck('" + idDuck + "')", velocity);
        } else {
            divDuck.parentNode.removeChild(divDuck);
            free++;
            document.getElementById("free").innerHTML = free;
        }

        divDuck.style.left = leftAnimal + "px";
        divDuck.style.top = topAnimal + "px";
    }
}

/* shoot the duck */
function shoot(duck) {
    shooting++;
    duck.parentNode.removeChild(duck);
    document.getElementById("message").innerHTML = shooting;
}

/* incrementar nivel */
function levelIncrement() {
    var array = ["5", "10", "17", "24", "33", "42", "53", "64", "79", "94"];
    var s = (document.getElementById("message").innerHTML);
    var f = (document.getElementById("free").innerHTML);

    if (time <= 100 || velocity <= 10) {
        time = 100;
        velocity = 5;
        array.forEach(element => {
            if (s == element) {
                velocity++;
            }
        });
    } else {
        if ((array.includes(s)) || (array.includes(f))) {
            time -= 700;
            velocity -= 20;
            level++;
            //console.log(array.includes(s))
        }
    }


    console.log(time, velocity, level);

    document.getElementById("level").innerHTML = level;

    //parar el juego
    if (f == 15) {
        stopGame();
    }
}

function stopGame() {

    document.getElementById("game_over").innerHTML = "Game Over!";
    document.getElementById("start").disabled = false;
    document.getElementById("free").innerHTML = "";
    document.getElementById("shooting").innerHTML = "";
    document.getElementById("level").innerHTML = "1";
    /*count = 0;
    shooting = 0;
    free = 0;
    time = 3600;
    velocity = 110;
    level = 1;*/
}