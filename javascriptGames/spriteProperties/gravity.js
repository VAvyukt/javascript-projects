let coordinates;

function setup() {
    // Create your canvas:
    new Canvas(480, 360);

    // Add your sprites here:
    let ground = new Sprite();
    let pipe = new Sprite();
    let mario = new Sprite();
    let blockPlatform = new Sprite();
    let coin1 = new Sprite();
    let coin2 = new Sprite();
    noStroke();
    
    //ground properties
    ground.width = 480;
    ground.height = 50;
    ground.x = 240;
    ground.y = 345;
    ground.color = '#d14600';
    
    //pipe properties
    pipe.height = 50;
    pipe.width = 60;
    pipe.x = 95;
    pipe.y = 295;
    pipe.color = '#56e500';
    
    //mario properties
    mario.height = 45;
    mario.width = 25;
    mario.x = 95;
    mario.y = 247;
    mario.color = '#ff0000';
    
    //blockPlatform properties
    blockPlatform.height = 30;
    blockPlatform.width = 150;
    blockPlatform.x = 270;
    blockPlatform.y = 235;
    blockPlatform.color = '#d14600';
    
    //coin1 properties
    coin1.diameter = 25;
    coin1.x = 230;
    coin1.y = 205;
    coin1.color = '#f1c231';

    //coin2 properties
    coin2.diameter = 25;
    coin2.x = 270;
    coin2.y = 205;
    coin2.color = '#f1c231';
    
    // Adds the mouse coordinates
    mouseCoordinates();
}

function draw() {
    // Set up your background color:
    clear();
    background('#459bff');

    // Updates the mouse coordinates
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1);
}

// This function adds a mouse coordinate box to the screen
function mouseCoordinates() {
    coordinates = new Sprite();
    coordinates.color = 'white';
    coordinates.width = 80;
    coordinates.height = 20;
    coordinates.x = width - coordinates.width / 2 - 5;
    coordinates.y = coordinates.height / 2 + 5;
    coordinates.collider = 'none';
}