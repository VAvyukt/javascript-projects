let person, walkingSheet, idleSheet;
let ground;

function preload() {
    // Create person sprite
    person = new Sprite();

    // Load the spritesheets
    idleSheet = loadImage('https://codehs.com/uploads/f93503a72914c115a634068135907706');
    walkingSheet = loadImage('https://codehs.com/uploads/bf3d388e26fc5c3b2ed91fd8dd3be63d');

    // Create the two sprite animations
    person.addAni('idle', idleSheet, {w: 48, h: 30, row: 0, frames: 10, frameDelay: 8});
    
    // -----> Create the 'walking' animation here:
    person.addAni('walking', walkingSheet, {w: 48, h: 30, row: 0, frames: 8, frameDelay: 8});
    

    
    
    // Set initial sprite animation
    person.ani = 'idle';

    // ####### Initialize other sprite properties ####### //

    // Scale the image
    person.scale = 3;
    
    // Set the collider dimensions so that the sprite image
    // collides correctly with the ground
    person.width = 60;
    person.height = 90;
    
    // -----> Uncomment the below line to see the collider box
    person.debug = true; 

    // Prevent the sprite from rotating
    person.rotationLock = true;
}

function setup() {
    new Canvas(400, 400);
    noSmooth();
    noStroke();

    // Set up scene and person sprites
    setupScene();
}

// This function creates the scene
function setupScene() {
    // Create the ground sprite
    ground = new Sprite();
    ground.height = height / 3;
    ground.width = width;
    ground.y = (5/6) * height;
    ground.color = '#abe64c';

    // Set the initial position of the persion
    person.y = ground.y - ground.height / 2 - person.height / 2;
    person.x = width / 2;
}

function draw() {
    clear();
    background('#7d7d7d');

    // Moves sprite if user presses arrow keys
    if (kb.pressing('arrowRight')) {
        person.mirror.x = false;
        person.vel.x = 2;

        // ------> Display the 'walking' animation here:
        person.ani = 'walking';

    } else if (kb.pressing('arrowLeft')) {
        person.mirror.x = true;
        person.vel.x = -2;

        // ------> Display the 'walking' animation here:
        person.ani = 'walking';
        
    } else {
        person.ani = 'idle';
        person.vel.x = 0;
    }
}