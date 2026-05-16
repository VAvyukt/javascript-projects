let ball, block;

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;

    // Sets up the scene
    setupScene();
}

function draw() {
    clear();
    background("#79bef2");

    // ----> Write your code here that will remove the block
    // if the ball collides with it:
    if(ball.collides(block)) {
        block.remove();
    }
    
    
}

// Creates the scene with a ground, ball, and block
function setupScene() {
    let ground = new Sprite();
    ground.width = width;
    ground.height = 225;
    ground.y = 370;
    ground.friction = 2;
    ground.collider = 'static';

    ball = new Sprite();
    ball.diameter = 30;
    ball.mass = 5;
    ball.x = 50;
    ball.y = ground.y - ground.height / 2 - ball.radius;
    ball.rotationDrag = 0;

    block = new Sprite();
    block.width = 30;
    block.height = 50;
    block.mass = 3;
    block.x = 300;
    block.y = ground.y - ground.height / 2 - block.height / 2;
    ball.speed = 3;
}