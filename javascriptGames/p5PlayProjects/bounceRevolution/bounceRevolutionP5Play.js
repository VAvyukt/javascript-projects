// Objects we want every function to be able to access
let ball1;
let ball2;

function setup() {
    // Creates the canvas
    new Canvas(450, 450);
    // Turns on gravity in the world
    world.gravity.y = 10;

    // Setting up the first ball
    ball1 = new Sprite();
    ball1.diameter = 30;
    ball1.bounciness = 0.7;
    ball1.friction = 0;
    ball1.x = 215;
    ball1.y = 50;

    // Setting up the second ball
    ball2 = new Sprite();
    ball2.diameter = 50;
    ball2.bounciness = 0.7;
    ball2.x = 200;
    ball2.y = 200;

    // Setting up the ground
    let ground = new Sprite();
    ground.width = 450;
    ground.height = 60;
    ground.friction = 0;
    ground.collider = 'static';
    ground.y = 420;
}

function draw() {
    // Refreshing the background every time
    clear();
    background('#6f6ad4');

    // Checks to see if the two balls have collided each frame
    if (ball1.collides(ball2)) {
        ball1.diameter += 30;
        ball2.diameter -= 30;
    }

}