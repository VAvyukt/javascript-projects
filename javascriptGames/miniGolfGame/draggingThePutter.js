//Declaring all global variables
let coordinates;
let grass, hole, ball, putter;

//Function that runs once at the beginning to setup the entire scene.
function setup() {
    new Canvas(450, 520);
    noStroke(); //Ensures that the wall sprites blend together and don't make distinct lines.
    mouseCoordinates(); //Posts the coordinates of the mouse at the top right to help the developer
    setupHole();
    setupBallAndPutter();
}

//Function that runs 60x per second.
function draw() {
    clear(); //Clears the canvas of any fragments of moving objects due to animations.
    background("#05aae6"); //Bg color of the canvas.
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1); //Sets up the mouse coordinates in the top right of the screen with the correct x/y info.
    if(putter.mouse.dragging()) {
        putter.moveTowards(mouse, 0.1);
    }
    
    else {
        putter.speed = 0;
    }
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

//This function sets up the the current hole of the mini golf game.
function setupHole() {
    
    //Defines the grass as a sprite and sets its properties.
    grass = new Sprite();
    grass.y = 265;
    grass.width = 270;
    grass.height = 395;
    grass.collider = 'none';
    grass.color = '#008763';
    
    //Defines the top wall as a sprite variable and sets its properties.
    let topWall = new Sprite();
    topWall.collider = 'static';
    topWall.color = '#828282';
    topWall.width = 295;
    topWall.height = 15;
    topWall.y = 65;
    
    //Defines the bottom wall as a sprite variable and sets its properties.
    let bottomWall = new Sprite();
    bottomWall.collider = 'static';
    bottomWall.color = '#828282';
    bottomWall.width = 295;
    bottomWall.height = 15;
    bottomWall.y = 460;
    
    //Defines the right wall as a sprite variable and sets its properties.
    let rightWall = new Sprite();
    rightWall.collider = 'static';
    rightWall.color = '#828282';
    rightWall.width = 15;
    rightWall.height = 400;
    rightWall.x = 365;
    rightWall.y = 260;
    
    //Defines the left wall as a sprite variable and sets its properties.
    let leftWall = new Sprite();
    leftWall.collider = 'static';
    leftWall.color = '#828282';
    leftWall.width = 15;
    leftWall.height = 400;
    leftWall.x = 85;
    leftWall.y = 265;
    
    //Defines the hole as a sprite and sets its properties.
    hole = new Sprite();
    hole.diameter = 25;
    hole.x = random(120, 330);
    hole.y = 95;
    hole.color = 'black';
    hole.collider = 'static';
}

//This function sets up the ball and putter along with their properties.
function setupBallAndPutter() {
    
    //Defines the ball as a sprite and sets its properties.
    ball = new Sprite(); 
    ball.diameter = 15;
    ball.y = 440;
    ball.bounciness = 0.75;
    ball.color = '#152ae8';
    
    //Defines the putter as a sprite and sets its properties.
    putter = new Sprite();
    putter.width = 40;
    putter.height = 15;
    putter.y = 500;
    putter.color = '#4d4d4d';
    putter.collider = 'kinematic';
}