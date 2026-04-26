let catImage = "https://codehs.com/uploads/d2cdd0c5fc0ecbd392a627da614c93f5";
let grassImage = "https://codehs.com/uploads/a9299bf0a43754a3780c8d8df82c5ec3";
let cat;

function setup() {
    new Canvas(450, 450);
    world.gravity.y = 10;
    
    createScene();
}

function draw() {
    clear();
    background('#73d2de');

    // ---> Fill in the if statement to check if the mouse is 
    // dragging the cat
    if (cat.mouse.dragging()) {
        cat.moveTowards(mouse, 0.1);
    } 

    // ---> Fill in the if statement to check if the "g" key is 
    // being pressed down
    if (kb.pressing('g')) {
        cat.scale += 0.01;
    }

    // ---> Fill in the if statement to check if the "s" key is 
    // being pressed down
    if (kb.pressing('s')) {
        cat.scale -= 0.01;
    }
    
    // Keeps the cat from going off the sides of the canvas
    if (cat.x + cat.width / 2 >= width) {
        cat.x = width - cat.width / 2;
    } else if (cat.x - cat.width / 2 < 0) {
        cat.x = cat.width / 2;
    }
}

function createScene() {
    cat = new Sprite();
    
    // Gives the sprite an image and scales it
    cat.img = loadImage(catImage);
    cat.scale = 0.2;

    // Sets up the size of the physics collider around the image
    cat.width = 85;
    cat.height = 120;
    
    // Sets up other properties for the cat
    cat.y = 320;
    cat.bounciness = 0;
    cat.rotationLock = true;
    
    grass = new Sprite();
    
    // Gives the sprite an image and scales it
    grass.img = loadImage(grassImage);
    grass.scale = 0.5;
    
    // Sets up the size of the physics collider around the image
    grass.width = width;
    grass.height = 10;
    
    grass.y = 400;
    grass.collider = 'static';
}