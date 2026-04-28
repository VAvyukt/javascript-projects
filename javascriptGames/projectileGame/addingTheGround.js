//Declaring all global vars
let ground;

//Function that runs once at the beginning to setup the entire scene.
function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    mouseCoordinates(); //Posts the coordinates of the mouse at the top right to help the developer
    setupGround();
}

//Function that runs 60x per second.
function draw() {
    clear(); //Clears the canvas of any fragments of moving objects due to animations.
    background("#1bc8e3"); //Bg color of the canvas.
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1); //Sets up the mouse coordinates in the top right of the screen with the correct x/y info.
}

//This function also helps sets up the mouse coordinates in the top right of the screen with the correct x/y info.
function mouseCoordinates() {
    coordinates = new Sprite();
    coordinates.color = 'white';
    coordinates.width = 80;
    coordinates.height = 20;
    coordinates.x = width - coordinates.width / 2 - 5;
    coordinates.y = coordinates.height / 2 + 5;
    coordinates.collider = 'none';
}

//This function sets up the properties of the ground at the bottom of the scene.
function setupGround() {
    ground = new Sprite();
    ground.y = 440;
    ground.width = 2*width;
    ground.height = 20;
    ground.friction = 2;
    ground.layer = 2;
    ground.color = "#06bf3d";
    ground.collider = "static";
}