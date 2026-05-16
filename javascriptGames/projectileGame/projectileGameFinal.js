//Declaring all global vars
let ground, cannon, ballGroup, woodGroup, stoneGroup, target1;
let cannonImage = "https://codehs.com/uploads/3fa5f0d917ff2dc39bd196cff06677bb";
let launch = false;
let ballCount = 0;
let tileWidth = 15;
let tileHeight = 30;

//Function that runs once at the beginning to setup the entire scene.
function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    mouseCoordinates(); //Posts the coordinates of the mouse at the top right to help the developer
    setupGround(); //Calls the ground sprite props.
    setupCannon(); //Calls the pole/cannon sprite props.
    setupCannonBalls(); //Calls the cannon ball group props.
    setupTiles(); //Calls the tile groups and props.
}

//Function that runs 60x per second.
function draw() {
    clear(); //Clears the canvas of any fragments of moving objects due to animations.
    background("#1bc8e3"); //Bg color of the canvas.
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1); //Sets up the mouse coordinates in the top right of the screen with the correct x/y info.
    
    if(kb.pressing("up")) {
        cannon.y = cannon.y - 1;
    }
    else if(kb.pressing("down")) {
        cannon.y = cannon.y + 1;
    }
    
    if(kb.pressing("left")) {
        cannon.rotate(-1, 10);
    }
    else if(kb.pressing("right")) {
        cannon.rotate(1, 10);
    }

    if(kb.presses("space")) {
        let ball = new ballGroup.Sprite();
        ball.x = cannon.x;
        ball.y = cannon.y;
        ball.direction = cannon.rotation;
        launch = true;
        ballCount = ballCount + 1;
    }

    // Checks to see if a ball has been launched before entering loops
    if (launch) {
        // Loops through all balls launched
        for (let ball of ballGroup) {
            // Loops through all wood blocks
            for (let wood of woodGroup) {
                // ----> Write the code to check if the single ball
                // variable has collided with the single wood variable.
                // If so, remove the single wood:
                if(ball.collides(wood)) {
                    if(ball.speed > 1) {
                        wood.remove();
                    }
                }
            }
        }
    }

    if(target1.collides(ground)) {
        youWin();
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

//This function defines the pole and sets up props. for the pole/cannon.
function setupCannon() {
    let pole = new Sprite();
    pole.x = 50;
    pole.width = 2;
    pole.height = height;
    pole.layer = 1;
    pole.color = "black";
    pole.collider = "none";
    
    cannon = new Sprite();
    cannon.img = loadImage(cannonImage);
    cannon.scale = 0.5;
    cannon.x = 50;
    cannon.y = 405;
    cannon.layer = 2;
    cannon.collider = "none";
}

function setupCannonBalls() { //Defines the cannon balls as a new group and sets th group's props.
    ballGroup = new Group();
    ballGroup.diameter = 15;
    ballGroup.mass = 5;
    ballGroup.speed = 10;
    ballGroup.life = 300;
    ballGroup.layer = 1;
    ballGroup.color = "white";
}

function setupTiles() { //Defines the tile properties (creates a group and a tile system)

    //Defines target1 as a sprite.
    target1 = new Sprite();
    target1.width = tileWidth;
    target1.height = tileHeight;
    target1.mass = 3;
    target1.color = "red";
    target1.tile = "t";

    //Wood tiles group props.
    woodGroup = new Group();
    woodGroup.width = tileWidth;
    woodGroup.height = tileHeight;
    woodGroup.mass = 3;
    woodGroup.color = "#edde05";
    woodGroup.tile = "w";

    //Stone tiles group props.
    stoneGroup = new Group();
    stoneGroup.width = tileWidth;
    stoneGroup.height = tileHeight;
    stoneGroup.color = "#898c8a";
    stoneGroup.collider = "static";
    stoneGroup.tile = "s";

    new Tiles(
    [
        's..ssw.ws..',
        'sss.wwtwww.',
        '.wwww..sss.',
        'wwwss.wwww.',
        'ww.ws.ww.s.',
        'www.w.w.ssw',
        'ss.w..www..',
        'sssww.wwws.',
        'sss.s.wwww.',
        'ww..w.ww..s',
    ],
    240,
    144,
    tileWidth + 5,
    tileHeight
);

}

function youWin() {

    //Score props def.
    let score = new Sprite();
    score.width = 175;
    score.height = 30;
    score.y = 70;
    score.color = "#29c294";
    score.stroke = "#0b758a";
    score.text = "Ball Count: " + ballCount;
    score.textSize = 24;
    score.collider = "none";

    let win = new Sprite();
    win.width = 250;
    win.height = 30;
    win.y = 30;
    win.color = "gray";
    win.stroke = "black";
    win.text = "You Won!";
    win.textSize = 24;
    win.collider = "none";
}