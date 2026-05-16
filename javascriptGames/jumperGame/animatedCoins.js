//Declaring all global vars
let font, grassGroup, grassImg;
let character, startingX, startingY; //Character vars
let caracterIdleImg, characterWalkImg; //Character Ani vars
let coinGroup, coinImg; //Coin vars


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
    //Sets the character sprite props and animation props
    character = new Sprite();
    character.rotationLock = true;
    character.friction = 0;
    character.bounciness = 0;
    character.layer = 10;

    //Character ani
    characterIdleImg = loadImage('https://codehs.com/uploads/b885c421c581b65fe79d3f011dcde599');
    characterWalkImg = loadImage('https://codehs.com/uploads/075bfccf7c0234f223737867cc4b2a2d');
    character.addAni('idle', characterIdleImg, {w: 32, h: 28, row: 0, frames: 4, frameDelay: 16});
    character.addAni('walk', characterWalkImg, {w: 32, h: 28, row: 0, frames: 6, frameDelay: 8});
    character.ani = 'idle';
    character.scale = 2;
    character.width = 36;
    character.height = 54;

    // ######## COINS #########
    coinGroup = new Group();
    coinGroup.layer = 0;
    coinGroup.tile = 'c';
    coinGroup.collider = 'static';

    //Coin ani
    coinImg = loadImage('https://codehs.com/uploads/d4336715c879adae55dac63e2ae51e4a');
    coinGroup.addAni('spin', coinImg, {w: 16, h: 16, row: 0, frames: 5, frameDelay: 8});
    coinGroup.scale = 2.5;
}

//Function that runs once at the beginning to setup the entire scene.
function setup() {
    new Canvas(500, 400, 'pixelated');
    allSprites.pixelPerfect = true;
    noSmooth();
    textFont(font);
    world.gravity.y = 20;
    setupLevel1();
}


//Function that runs 60x per second.
function draw() {
    clear(); //Clears the canvas of any fragments of moving objects due to animations.
    background("#5bcaf0"); //Bg color of the canvas.

    //Character horizontal movement
    if(kb.pressing("left")) {
        character.vel.x = -3;
        character.ani = 'walk'; //Sets the character spritesheet to walk
        character.mirror.x = true; //Makes sure that the direction of the character is correct when walking left
    }
    else if(kb.pressing("right")) {
        character.vel.x = 3;
        character.ani = 'walk'; //Sets the character spritesheet to walk
        character.mirror.x = false; //Makes sure that the direction of the character is correct when walking right
    }
    else {
        character.vel.x = 0;
        character.ani = 'idle'; //Sets the character spritesheet to idle when the user doesn't want to move the character
    }

    //Character jumps
    if(kb.presses("up")) {
        character.vel.y = -9;
    }

    camera.x = character.x + 50; //Ensures that the camera is following the character
}

function setupLevel1() {
    //Sets up the grass block ground for the character to move on
    new Tiles(
        [
            '.................................................',
            '.................................................',
            '.................................................',
            '.................................................',
            '.........................................cc......',
            '.....c....cc....................cc...cc..gg......',
            '.....c....cc......ccc.......c...gg...gg..........',
            '.....g............ggg...ccc...gg.............cccc',
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