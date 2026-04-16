let coordinates;
let grass, hole, ball, putter;

function setup() {
    new Canvas(450, 520);
    noStroke();
    mouseCoordinates();
    setupHole();
    setupBallAndPutter();
}

function draw() {
    clear();
    background("#05aae6");
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1);
}

function mouseCoordinates() {
  coordinates = new Sprite();
  coordinates.color = 'white';
  coordinates.width = 80;
  coordinates.height = 20;
  coordinates.x = width - coordinates.width / 2 - 5;
  coordinates.y = coordinates.height / 2 + 5;
  coordinates.collider = 'none';
}

function setupHole() {
    grass = new Sprite();
    grass.y = 265;
    grass.width = 270;
    grass.height = 395;
    grass.collider = 'none';
    grass.color = '#008763';
    
    let topWall = new Sprite();
    topWall.collider = 'static';
    topWall.color = '#828282';
    topWall.width = 295;
    topWall.height = 15;
    topWall.y = 65;
    
    let bottomWall = new Sprite();
    bottomWall.collider = 'static';
    bottomWall.color = '#828282';
    bottomWall.width = 295;
    bottomWall.height = 15;
    bottomWall.y = 460;
    
    let rightWall = new Sprite();
    rightWall.collider = 'static';
    rightWall.color = '#828282';
    rightWall.width = 15;
    rightWall.height = 400;
    rightWall.x = 365;
    rightWall.y = 260;
    
    let leftWall = new Sprite();
    leftWall.collider = 'static';
    leftWall.color = '#828282';
    leftWall.width = 15;
    leftWall.height = 400;
    leftWall.x = 85;
    leftWall.y = 265;
    
    hole = new Sprite();
    hole.diameter = 25;
    hole.x = random(120, 330);
    hole.y = 95;
    hole.color = 'black';
    hole.collider = 'static';
}

function setupBallAndPutter() {
    ball = new Sprite(); 
    ball.diameter = 15;
    ball.y = 440;
    ball.bounciness = 0.75;
    ball.color = '#152ae8';
    
    putter = new Sprite();
    putter.width = 40;
    putter.height = 15;
    putter.y = 500;
    putter.color = '#4d4d4d';
    putter.collider = 'kinematic';
}