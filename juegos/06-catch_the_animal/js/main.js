var level = 1;
var lifes = 5;
var animals = ["bird", "cat", "dog", "lion", "rabbit"];
var starImg = "url(img/star.jpg";
var screenWidth = screen.width - 150;
var screenHeight = screen.height - 400;
var randomAnimal;
var countAnimals = [];
var valueAnimal;

/* start the game */
function start() {
    createAnimals();
    //level = 1;
    //document.getElementById("animal").innerHTML = level;
    //lifes = 3;

    choseAnimal();
    createStars();

    document.getElementById("start").disabled = true;
}

/* crear los animales */
function createAnimals() {
    //crear los animale de forma aleatoria
    for (var i = 0; i < 5; i++) {
        var numeberAnimalInArray = Math.floor(Math.random() * 5);

        //crear la animal
        var animal = document.createElement("div");
        animal.className = "animal";
        var topAnimal = Math.floor(Math.random() * screenHeight);
        animal.style.top = topAnimal + "px";
        var leftAnimal = Math.floor(Math.random() * screenWidth);
        animal.style.left = leftAnimal + "px";

        //console.log(animal.value = numeberAnimalInArray);
        animal.value = numeberAnimalInArray
        animal.style.backgroundImage = "url(img/" + animals[numeberAnimalInArray] + ".png";
        document.getElementById("container").appendChild(animal);

        //console.log(numeberAnimalInArray);
        countAnimals += animal.value;
    }

    animal.setAttribute("onclick", "deleteAnimal(this)");
    //console.log(countAnimals);
}



/* crear las estrellas de la vida */
function createStars() {
    //crear las 5 estrellas
    for (var i = 0; i < 5; i++) {
        var star = document.createElement("span");
        star.className = "star";
        star.id = "star" + i;
        star.style.backgroundImage = starImg;
        document.getElementById("lifes").appendChild(star);
    }
}

/* escoger el animal a eliminar */
// escoger uno de los animales del array random
var position = countAnimals.length;
position *= Math.floor(Math.random());

function choseAnimal() {
    //elige animal de forma aleatoria para atraparlo
    randomAnimal = Math.floor(Math.random() * 5);

    //console.log(countAnimals[position]);

    if (randomAnimal == countAnimals[position]) {
        document.getElementById("message").innerHTML = animals[randomAnimal];
        //mostrar el nivel
        document.getElementById("level").innerHTML = 1;
    } else {
        choseAnimal();
    }

}

/* elimina animal */
function deleteAnimal(capa) {
    //comprobar que el value del animal es igual que el 
    //animalrdm
    //console.log(randomAnimal + "," + capa.value);
    if (randomAnimal == countAnimals[position]) {
        var found = countAnimals.find(function(element) {
            return (randomAnimal == countAnimals[position]);
        });
        countAnimals.splice(found, 1);
        console.log(countAnimals);
        /* if (countAnimals[parseInt(capa.value - 1)] == 0) {*/
        document.getElementById("message").innerHTML = "NEXT nivel";
        document.getElementById("container").removeChild(capa);
        //}
    } else {
        //console.log("estrella" + lifes)
        var star = document.getElementById("star" + lifes);
        if (lifes >= 1) {
            document.getElementById("star").removeChild(star);
        }

        lifes--;

        if (lifes <= 0) {
            document.getElementById("message").innerHTML = "GAME OVER";
        }
    }
}