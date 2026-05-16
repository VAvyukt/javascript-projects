//Declaring all global vars
let font, grassGroup, grassImg;
let character, startingX, startingY;


//Function that runs before the setup function to make sure everything is ready to be setup.
function preload() {
    font = loadFont('https://codehs.com/uploads/00669efb4a6a5ec861b581609abf57ac');

    // ######## GRASS #########
    grassGroup = new Group();
    grassGroup.bounciness = 0.1;
    grassGroup.layer = 0;
    grassGroup.tile = "g";
    grassGroup.collider = "static";
    grassImg = loadImage('https://codehs.com/uploads/d482966734b6d6a1e64ca8ec91014a99');
    grassGroup.img = grassImg;
    grassGroup.width = 48;
    grassGroup.height = 48;

    // ######## CHARACTER #########
    character = new Sprite();
    character.rotationLock = true;
    character.friction = 0;
    character.bounciness = 0;
    character.layer = 10;
}

//Function that runs once at the beginning to setup the entire scene.
function setup() {
    new Canvas(500, 400, 'pixelated');
    allSprites.pixelPerfect = true;
    noSmooth();
    textFont(font);
    world.gravity.y = 20;
    mouseCoordinates(); //Posts the coordinates of the mouse at the top right to help the developer
    setupLevel1();
}


//Function that runs 60x per second.
function draw() {
    clear(); //Clears the canvas of any fragments of moving objects due to animations.
    background("#5bcaf0"); //Bg color of the canvas.
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

function setupLevel1() {
    new Tiles(
        [
            '.................................................',
            '.................................................',
            '.................................................',
            '.................................................',
            '.................................................',
            '.........................................gg......',
            '................................gg...gg..........',
            '.....g............ggg.........gg.................',
            'gggggggggg..ggggggggg...gggggg.............gggggg',
        ],
        0,
        0,
        grassGroup.width,
        grassGroup.height
    );
    startingX = 100;
    startingY = 320;
    character.x = startingX;
    character.y = startingY;
}