var x = 100;
var y = 50;
var img;

function setup() {
    createCanvas(800, 500);
    stroke("#000");
    fill("#d34");
    img = loadImage("logo.png");
}

function draw() {
    background("#4af");
    //clear();

    ellipse(100, 250, 100, 100);
    ellipse(x, height / 2, 90, 90);
    x++;

    rect(100, y, 50, 50);
    y++;
    triangle(300, 100, 300, 350, (mouseX - 200), (mouseY) - 200, 200, 100);
    image(img, (x - 33), 230);

    mousePresionado();

    moverCirculo();
}

function mousePresionado() {
    if (mouseIsPressed) {
        fill("yellow");
    } else {
        fill("blue");
    }
}

// mover con el teclado
function moverCirculo() {
    if (keyIsDown(LEFT_ARROW))
        x -= 5;

    if (keyIsDown(RIGHT_ARROW))
        x += 5;

    if (keyIsDown(UP_ARROW))
        y -= 5;

    if (keyIsDown(DOWN_ARROW))
        y += 5;
}