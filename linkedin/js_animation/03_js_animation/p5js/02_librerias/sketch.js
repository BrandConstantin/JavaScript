var x = 100;
var y = 100;
var button;

function preload() {
    mySound = loadSound('drop_coins.mp3');
}

function setup() {
    createCanvas(800, 500);
    stroke("#666666");
    fill("#4FBDF2");

    button = createButton('Detener');
    button.position(20, 20);
    button.mousePressed(cambiarFondo);

    buttonPlay = createButton('Reproducir');
    buttonPlay.position(20, 50);
    buttonPlay.mousePressed(reproducir);

    buttonPlay = createButton('Reproducir audio');
    buttonPlay.position(20, 80);
    buttonPlay.mousePressed(reproducirAudio);
}

// mover el boton
function draw() {
    button.position(x, y);
    x++;
}

function cambiarFondo() {
    var r = random(255);
    var g = random(255);
    var b = random(255);

    background(r, g, b);
    //para detener la función de mover el boton
    noLoop();
}

function reproducir() {
    loop();
}

function reproducirAudio() {
    mySound.play();
}