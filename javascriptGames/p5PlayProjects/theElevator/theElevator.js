// Copy and paste the code blocks to their appropriate location!
let square;
let elevator;

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    
    square = new Sprite();
    square.width = 30;
    square.height = 30;
    square.bounciness = .1;
    square.y = 40;
    
    elevator = new Sprite();
    elevator.width = 100;
    elevator.height = 15;
    elevator.color = '#99d46a';
    elevator.collider = 'kinematic';
}

function draw() {
    clear();
    elevator.vel.y = cos(frameCount * 2.2) * 6;
}