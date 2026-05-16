let starGroup, ship;

function setup() {
    new Canvas(450, 450);
    noStroke();

    // Create ship sprite
    ship = new Sprite();
    ship.width = 20;
    ship.height = 30;
    ship.y = 420;
    ship.color = 'white';

    // Group for the stars
    starGroup = new Group();
    starGroup.diameter = 20;
    starGroup.color = '#e9c46a';
    starGroup.collider = 'static';
    starGroup.tile = "*";
    
    // ---> Set the tile symbol for starGroup
    

    // ---> Use starGroup symbol in Tiles to create your
    // star field stars
    new Tiles(
        [
        "...****..**.***...",
        "***.........*****.",
        "...******....***..",
        "***...*.........*.",
        ".*************....",
        ".*****.....**.....",
        "...***.........***",
        ".*******....**....",
        ".....***..........",
        "..**.....******....",
        "........********...",
        ],
        20,
        50,
        starGroup.diameter + 4,
        starGroup.diameter * 1.5
    );
}

function draw() {
	clear();
    background('#264653');

    // Calling functions to move/rotate ship and check for collisions
    moveRotateShip();
    checkForCollisions();
}

// This functions checks to see if the ship has collided with
// any of the stars
function checkForCollisions() {
    for (let star of starGroup) {
        if (ship.collide(star)) {
            star.color = '#e76f51';
        }
    }
}

// This function moves and rotates the ship based on key presses
function moveRotateShip() {
    if (kb.pressing('up')) {
        ship.bearing = ship.rotation - 90;
        ship.applyForce(5);
    } else if (kb.pressing('down')) {
        if (ship.speed > 0.1) {
            ship.speed -= 0.1;
            ship.rotationSpeed -= 0.1;
        } else {
            ship.speed = 0;
            ship.rotationSpeed = 0;
        }
    }

    if (kb.pressing('left')) {
        ship.rotate(-5, 60);
    } else if (kb.pressing('right')) {
        ship.rotate(5, 60);
    }
}