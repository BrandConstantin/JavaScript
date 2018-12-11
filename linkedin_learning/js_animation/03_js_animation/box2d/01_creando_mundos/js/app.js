var world;
var ctx;
var canvasWidth;
var canvasHeight;
var canvasTop;
var canvasLeft;

window.onload = function() {
    world = createWorld();
    ctx = $('canvas').getContext('2d');
    var myCanvas = $('canvas');

    canvasWidth = parseInt(myCanvas.width);
    canvasHeight = parseInt(myCanvas.height);
    canvasTop = parseInt(myCanvas.style.top);
    canvasLeft = parseInt(myCanvas.style.left);

    generarMundo();

    addEventListener('click', function(e) {
        if (Math.random() > 0.5) {
            createBall(world, e.pageX / 2, e.pageY);
        } else {
            createBox(world, e.pageX / 2, e.pageY, 10, 10, false);
        }
    })

    step();
}

function createWorld() {
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    var gravity = new b2Vec2(0, 300);
    var doSleep = true;
    world = new b2World(worldAABB, gravity, doSleep);

    createGround(world);

    return world;
}

function step(cnt) {
    var stepping = false;
    var timeStep = 1.0 / 60;
    var iteration = 1;

    world.Step(timeStep, iteration);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawWorld(world, ctx);
    setTimeout('step(' + (cnt || 0) + ')', 10);
}

function createBall(world, x, y) {
    var ballSd = new b2CircleDef();
    ballSd.density = 0.8;
    ballSd.radius = 25;
    ballSd.restitution = 0.5;
    ballSd.friction = 5;

    var ballBd = new b2BodyDef();
    ballBd.AddShape(ballSd);
    ballBd.position.Set(x, y);

    return world.CreateBody(ballBd);
}

function createBox(world, x, y, width, height, fixed) {
    var boxSd = new b2BoxDef();
    if (!fixed) {
        boxSd.density = 0.2;
    }
    boxSd.restitution = 0.0;
    boxSd.friction = 1.0;
    boxSd.extents.Set(width, height);

    var boxBd = new b2BodyDef();
    boxBd.AddShape(boxSd);
    boxBd.position.Set(x, y);

    return world.CreateBody(boxBd);
}

function createJoint() {
    var myBall = createBall(world, 600, 150);
    var jointDef = new b2RevoluteJointDef();
    jointDef.anchorPoint.Set(400, 200);
    //declaramos la pared y la bola
    jointDef.body1 = world.GetGroundBody();
    jointDef.body2 = myBall;

    return world.CreateJoint(jointDef);
}

function createGround(world) {
    //Se define la forma del cuerpo
    var groundSd = new b2BoxDef();
    groundSd.extents.Set(300, 30);
    //Se define el cuerpo
    var groundBd = new b2BodyDef();
    groundBd.AddShape(groundSd);
    //mostrar que ademas de piso puede ser un obstaculo    
    groundBd.position.Set(400, 475);

    //Se genera el cuerpo en el mundo de box2d    
    return world.CreateBody(groundBd);
}

function generarMundo() {
    console.log("El mundo ha sido creado");

    createBall(world, 300, 50);
    createBox(world, 500, 10, 10, 30, false);
    createBox(world, 100, 300, 40, 20, true);
    createJoint();
}