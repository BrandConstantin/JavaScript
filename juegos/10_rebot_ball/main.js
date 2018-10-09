var x = 0;
var y = 0;
var moving = 0;
var width = screen.width - 20;
var height = screen.height - 200;

function resize() {
    window.resizeTo(100, 100);
}

function go() {
    var container = document.getElementById("container");
    container.style.height = height + "px";
    container.style.width = width + "px";
}

function movement(moving) {
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

    if (document.getElementById) {
        document.getElementById('imgMove').style.top = x + "px";
        document.getElementById('imgMove').style.left = y + "px";
    }
}

function move() {
    if (x > (height - 40)) {
        (moving == 0) ? moving = 2: moving = 3;
    } else if (y > (width - 40)) {
        (moving == 0) ? moving = 1: moving = 3;
    } else if (x < 0) {
        (moving == 2) ? moving = 0: moving = 1;
    } else if (y < 0) {
        (moving == 3) ? moving = 2: moving = 0;
    }

    movement(moving);
    setTimeout("move()", 30);
}